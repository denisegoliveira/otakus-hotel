import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Load from './components/animation/Load.jsx'
import Footer from './components/footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'

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
  )
}

export default App
