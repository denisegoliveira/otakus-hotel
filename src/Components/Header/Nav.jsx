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
            <Button ref={btnRef} boxSize='60px'm='5px'onClick={onOpen}>
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
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <Link to='/'><Button w='260px' mt='5px'>Home</Button></Link><br/>
                        <Link to='/'><Button w='260px' mt='5px'>Reservar</Button></Link><br/>
                        <Link to='/'><Button w='260px' mt='5px'>Entrar</Button></Link><br/>
                        <Link to='/'><Button w='260px' mt='5px'>Cadastrar</Button></Link><br/>
                        <Link to='/'><Button w='260px' mt='5px'>Contato</Button></Link><br/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Nav;