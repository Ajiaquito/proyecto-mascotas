import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Galeria from './Galeria';
import DetalleMascota from './DetalleMascota';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Galeria />} />
        <Route path="/mascota/:id" element={<DetalleMascota />} />
      </Routes>
    </Router>
  );
}

export default App;