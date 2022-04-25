import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Register from "./components/Register/Register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Load from "./components/animation/Load.jsx";

function App() {
	return (
		<Load
			component={
				<Router>
					<Header />
					<Routes>
						<Route path="/cadastro" element={<Register />} />
						<Route path="/entrar" element={<Login />} />
						<Route path="/" element={<Home />} />
					</Routes>
					<Footer />
				</Router>
			}
		/>
	);
}

export default App;
