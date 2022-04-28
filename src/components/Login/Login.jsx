import React from "react";
import FormsLayout from "../FormsLayout/FormsLayout.jsx"
import LayoutInput from "../FormsLayout/LayoutInput.jsx"
import InputLogin from "./InputLogin.jsx";

function Login() {
    return (
        <>
            <FormsLayout/>
            <LayoutInput titulo="Entrar"/>
            <InputLogin />
        </>
    )
}

export default Login;