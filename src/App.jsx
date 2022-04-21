import React from "react";
import Header from "./components/Header/Header.jsx";
import Register from "./components/Register/Register.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/cadastro" element={<Register />} />
				<Route path="/entrar" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
