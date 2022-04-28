import { Box, Button, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Prato from './Prato'

export default function PratoPagina() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('https://api-mod-5.herokuapp.com/pratos')
      .then(response => {
        setData(response.data.resultado)
      })
      .catch(error => console.log(error))
  }, [])

  const onDelete = async id => {
    try {
      await axios.delete(`https://api-mod-5.herokuapp.com/pratos/${id}`)

      const newData = data.filter(prato => prato.id !== id)
      setData(newData)
    } catch (error) {
      console.log(error)
    }

  // const onEdit = async id => {
  //   await axios.patch(`https://api-mod-5.herokuapp.com/pratos/${id}`)
  // }
  }

  const navigate = useNavigate()

  return (
    <>
      <Wrap w="100%" h="100%" bg="gray.500" justify="center" direction="column">
        <Box align="center">
          <Heading
            size="4xl"
            textAlign="center"
            bg="grey.500"
            w="100%"
            mt="70px"
            mb="50px"
          >
            Nossos pratos:
          </Heading>
          <Button onClick={() => navigate("/pratos/criar")} size="md" backgroundColor="#F2b705">
            Adicionar prato
          </Button>
        </Box>
        <WrapItem>
          <Wrap justify="center" w="100%">
            {data.map((prato, index) => (
              
              <WrapItem key={prato.id}>
                <Prato  prato={prato} onClick={onDelete}></Prato>
              </WrapItem>
            ))}
          </Wrap>
        </WrapItem>
      </Wrap>
    </>
  )
}
