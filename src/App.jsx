import React from 'react';
import Header from './Components/Header/Header.jsx'
import Register from './Components/Register/Register.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login.jsx';
import HookForm from './test/test.jsx';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/cadastro' element={<Register/>}/>
        <Route path='/entrar' element={<Login/>}/>
        <Route path='/reservar' element={<HookForm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
