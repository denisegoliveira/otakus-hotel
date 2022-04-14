import React from "react";
import { Text, Center } from '@chakra-ui/react'
import Imagem from '../../assets/images/restaurant.jpg'
import './LayoutRegister.css'

function LayoutRegister() {
    return (
        <>
        <Center>
        <Text fontSize={50}>Bem-Vindo!</Text>
        </Center>
        <div id="div-pai">
            <div id="div-filho">
                <img id="imagem" src={Imagem}/>
            </div>
           
        </div>
        </>
    )
}

export default LayoutRegister;