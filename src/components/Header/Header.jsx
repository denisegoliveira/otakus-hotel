import { Box, Flex, Image, Spacer } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../assets/logo.png'
import LogoName from '../../assets/logo2.png'
import Nav from './Nav.jsx'

function Header() {
  return (
    <Flex color="white" h="70px" bg="gray.900" position='fixed' w="100%" top='0' zIndex='10' >
      <Box h={70} w={40} bg="gray.700"  position='static' borderTopRightRadius='5' borderBottomRightRadius='5'>
        <Image
          boxSize="55px"
          ml="10px"
          mt="4px"
          position="absolute"
          src={Logo}
          alt="logo"
        />
        <Image
          boxSize="65px"
          ml="70px"
          mt="2px"
          position="absolute"
          src={LogoName}
          alt="Nome do hotel"
        />
      </Box>
      <Spacer />
      <Box>
        <Nav />
      </Box>
    </Flex>
  )
}

export default Header
