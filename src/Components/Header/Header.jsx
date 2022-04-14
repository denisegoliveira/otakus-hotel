import React from "react";
import { Flex, Box, Image, Spacer } from "@chakra-ui/react";
import Logo from '../../assets/logo.png'
import LogoName from '../../assets/logo2.png'
import Nav from './Nav.jsx'

function Header() {
    return (
        <Flex color='white' h='70px' bg='black'  >
            <Box>
                <Image
                    boxSize='55px'
                    ml='10px'
                    mt='4px'
                    position='fixed'
                    src={Logo}
                    alt='logo'
                />
                <Image 
                    boxSize='65px'
                    ml='70px'
                    mt='2px'
                    position='fixed'
                    src={LogoName}
                    alt='Nome do hotel'
                />
                    
            </Box>
            <Spacer />
            <Box>
                <Nav />
            </Box>
        </Flex>
    )
}

export default Header;