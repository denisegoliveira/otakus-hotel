import React from 'react';
import Header from './Components/Header/Header.jsx'
import Register from './Components/Register/Register.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login.jsx';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/cadastro' element={<Register/>}/>
        <Route path='/entrar' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
