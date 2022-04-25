import React from "react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";
import {
    Button,
    useDisclosure,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
} from "@chakra-ui/react";

function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <Button ref={btnRef} boxSize='70px'onClick={onOpen} bg='gray.700' borderBottomRightRadius='0' borderTopRightRadius='0'>
                <HamburgerIcon/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader bg="gray.700">Menu</DrawerHeader>
                    <DrawerBody bg="gray.900">
                        <Link to='/'><Button bg="gray.700" w='260px' mt='5px'>Home</Button></Link><br/>
                        <Link to='/'><Button bg="gray.700" w='260px' mt='5px'>Reservar</Button></Link><br/>
                        <Link to='entrar'><Button bg="gray.700" w='260px' mt='5px'>Entrar</Button></Link><br/>
                        <Link to='cadastro'><Button bg="gray.700" w='260px' mt='5px'>Cadastrar</Button></Link><br/>
                        <Link to='/'><Button bg="gray.700" w='260px' mt='5px'>Contato</Button></Link><br/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Nav;