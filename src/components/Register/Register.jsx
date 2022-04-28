import React from "react";
import FormsLayout from "../FormsLayout/FormsLayout.jsx"
import LayoutInput from "../FormsLayout/LayoutInput.jsx";
import InputRegister from "./InputRegister.jsx" 
function Register() {
	return (
		<section>
			<FormsLayout TituloPage="Bem-Vindo!" />
			<LayoutInput titulo="Faça seu cadastro" />
			<InputRegister />
		</section>
	);
}

export default Register;
