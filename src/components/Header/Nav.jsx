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
<<<<<<< HEAD:src/Components/Header/Nav.jsx
                    <DrawerContent>   
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>
                        <DrawerBody>
                            <Link to='/'><Button w='260px' mt='5px'>Home</Button></Link><br/>
                            <Link to='/'><Button w='260px' mt='5px'>Reservar</Button></Link><br/>
                            <Link to='entrar'><Button w='260px' mt='5px'>Entrar</Button></Link><br/>
                            <Link to='cadastro'><Button w='260px' mt='5px'>Cadastrar</Button></Link><br/>
                            <Link to='/'><Button w='260px' mt='5px'>Contato</Button></Link><br/>
                        </DrawerBody>
                    </DrawerContent>
=======
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerHeader bg='gray.700'>Menu</DrawerHeader>
                    <DrawerBody bg="gray.900">
                        <Link to='/'><Button w='260px' mt='5px'bg='gray.700'>Home</Button></Link><br/>
                        <Link to='/'><Button w='260px' mt='5px'bg='gray.700'>Reservar</Button></Link><br/>
                        <Link to='entrar'><Button w='260px' mt='5px'bg='gray.700'>Entrar</Button></Link><br/>
                        <Link to='cadastro'><Button w='260px' mt='5px'bg='gray.700'>Cadastrar</Button></Link><br/>
                        <Link to='/contatos'><Button w='260px' mt='5px'bg='gray.700'>Contato</Button></Link><br/>

                    </DrawerBody>
                </DrawerContent>
>>>>>>> ef69ea45f5826eb2016bb533ff9f7f2965ddb115:src/components/Header/Nav.jsx
            </Drawer>
        </>
    )
}

export default Nav;