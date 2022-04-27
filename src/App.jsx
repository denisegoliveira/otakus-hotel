import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Load from "./components/animation/Load.jsx";
import Contatos from "./components/contatos/Contatos.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import PratoPagina from "./components/cardapio/PratoPagina.jsx";
import NovoPratoPagina from "./components/cardapio/NovoPratoPagina.jsx";

function App() {
	return (
		<Load
			component={
				<Router>
					<Header />
					<Routes>
						<Route path="/pratos" element={<PratoPagina />} />
						<Route path="/pratos/criar" element={<NovoPratoPagina />} />
						<Route path="/entrar" element={<Login />} />
						<Route path="/contatos" element={<Contatos />} />
						<Route path="/" element={<Home />} />
					</Routes>
					<Footer />
				</Router>
			}
		/>
	);
}

export default App;
