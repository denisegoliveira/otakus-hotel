import { Box, Button, Heading, Input, Wrap, WrapItem } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Prato.module.css'

export default function EditarPratoPagina() {
  const [nome, setNome] = useState('')
  const [tipo, setTipo] = useState('')
  const [preco, setPreco] = useState('')
  const [vegan, setVegan] = useState('')
  const [descricao, setDescricao] = useState('')
  const [imagem, setImagem] = useState('')

  const { id } = useParams()

  useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        `https://api-mod-5.herokuapp.com/pratos/${id}`
      )

      setNome(response.data.prato.nome)
      setTipo(response.data.prato.tipo)
      setPreco(response.data.prato.preco)
      setVegan(response.data.prato.vegan)
      setDescricao(response.data.prato.descricao)
      setImagem(response.data.prato.imagem)
    }

    fetch()
  }, [id])

  async function atualizarPrato(event) {
    event.preventDefault()

    try {
      axios.patch(`https://api-mod-5.herokuapp.com/pratos/${id}`, {
        nome,
        tipo,
        preco: parseFloat(preco),
        vegan,
        descricao,
        imagem
      })

      alert('Prato atualizado com sucesso')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Wrap
        w="100%"
        h="100%"
        bg="gray.500"
        justify="center"
        align="center"
        direction="column"
      >
        <Box>
          <Heading
            size="2xl"
            textAlign="center"
            bg="grey.500"
            w="100%"
            mt="70px"
          >
            Altere o prato:
          </Heading>
        </Box>

        <Wrap w="33%" h="" direction="column">
          <label className={styles.label}>Nome do prato</label>
          <WrapItem w="100%">
            <Input
              value={nome}
              onChange={event => {
                setNome(event.target.value)
              }}
              bgColor="white"
              fontWeight="medium"
              placeholder="Nome do prato"
            />
          </WrapItem>

          <label className={styles.label}>Tipo</label>
          <WrapItem w="100%">
            <Input
              value={tipo}
              onChange={event => {
                setTipo(event.target.value)
              }}
              bgColor="white"
              fontWeight="medium"
              placeholder="Tipo"
            />
          </WrapItem>

          <label className={styles.label}>Preço</label>
          <WrapItem w="100%">
            <Input
              value={preco}
              onChange={event => {
                setPreco(event.target.value)
              }}
              bgColor="white"
              fontWeight="medium"
              placeholder="Preço"
            />
          </WrapItem>

          <label className={styles.label}>Descrição</label>
          <WrapItem w="100%">
            <Input
              value={descricao}
              onChange={event => {
                setDescricao(event.target.value)
              }}
              bgColor="white"
              fontWeight="medium"
              placeholder="Descrição"
            />
          </WrapItem>

          <label className={styles.label}>Vegan</label>
          <WrapItem w="100%">
            <Input
              value={vegan}
              onChange={event => {
                setVegan(event.target.value)
              }}
              bgColor="white"
              fontWeight="medium"
              placeholder="Vegan"
            />
          </WrapItem>

          <label className={styles.label}>Imagem</label>
          <WrapItem w="100%">
            <Input
              value={imagem}
              onChange={event => {
                setImagem(event.target.value)
              }}
              bgColor="white"
              fontWeight="medium"
              placeholder="URL da imagem"
            />
          </WrapItem>
          <Button size="md" backgroundColor="#F2b705" onClick={atualizarPrato}>
            Atualizar
          </Button>
        </Wrap>
      </Wrap>
    </>
  )
}
