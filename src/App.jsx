import React from 'react';
import Header from './Components/Header/Header.jsx'
import Register from './Components/Register/Register.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/cadastro' element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
