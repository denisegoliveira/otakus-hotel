import React from "react";
import Header from "./components/Header/Header.jsx";
import Register from "./components/Register/Register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Section from "./components/animation/Section.jsx"

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/animation" element={<Section />} />
				<Route path="/cadastro" element={<Register />} />
				<Route path="/entrar" element={<Login />} />
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
