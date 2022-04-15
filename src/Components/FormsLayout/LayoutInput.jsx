import React from "react";
import "./FormsLayout.css"
import {
    Text,
    Center,
    Box
} from '@chakra-ui/react'


function LayoutInput({ titulo }) {
    return (
        <>
            <div id="div-form">
                <div>
                    <h1>{titulo}</h1>
                </div>
            </div>
        </>
    )
}

export default LayoutInput;