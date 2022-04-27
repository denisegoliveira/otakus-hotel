import { Box, Button, Heading, Input, Wrap, WrapItem } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import styles from './Prato.module.css'

export default function NovoPratoPagina() {
  const [nome, setNome] = useState('')
  const [tipo, setTipo] = useState('')
  const [preco, setPreco] = useState('')
  const [vegan, setVegan] = useState('')
  const [descricao, setDescricao] = useState('')
  const [imagem, setImagem] = useState('')

  function limparCampos() {
    setNome('')
    setTipo('')
    setPreco('')
    setVegan('')
    setDescricao('')
    setImagem('')
  }

  async function enviarPrato() {
    try {
      await axios.post('https://api-mod-5.herokuapp.com/pratos/create', {
        nome,
        tipo,
        preco: parseFloat(preco),
        vegan,
        descricao,
        imagem
      })

      limparCampos()

      alert('Prato cadastrado com sucesso')
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
            Cadastrar novo prato:
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
          <Button size="md" backgroundColor="#F2b705" onClick={enviarPrato}>
            Enviar
          </Button>
        </Wrap>
      </Wrap>
    </>
  )
}
