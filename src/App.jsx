import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Forum from './pages/Forum';
import Ressources from './pages/Ressources';
import Annuaire from './pages/Annuaire';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/annuaire" element={<Annuaire />} />
      </Routes>
    </Router>
  );
}

export default App;
