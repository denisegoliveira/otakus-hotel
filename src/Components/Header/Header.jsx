import React from "react";
import { Flex, Box, Image, Spacer, Text } from "@chakra-ui/react";
import Logo from './img/logo.png'
import Nav from './Nav.jsx'

function Header() {
    return (
        <Flex color='white' h='70px' bg='black'>
            <Box>
                <Image
                    boxSize='55px'
                    ml='10px'
                    mt='4px'
                    position='fixed'
                    src={Logo}
                    alt='logo'
                />
                <Text ml='80px' mt='20px'>Otakus's Hotel</Text>
            </Box>
            <Spacer />
            <Box>
                <Nav />
            </Box>
        </Flex>
    )
}

export default Header;