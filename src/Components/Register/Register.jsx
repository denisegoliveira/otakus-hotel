import React from "react";
import FormsLayout from "../FormsLayout/FormsLayout.jsx"
import LayoutInput from "../FormsLayout/LayoutInput.jsx"
function Register() {
    return (
        <>
            <FormsLayout TituloPage="Bem-Vindo!"/>
            <LayoutInput titulo="Faça seu cadastro"/>
        </>
    )
}

export default Register;