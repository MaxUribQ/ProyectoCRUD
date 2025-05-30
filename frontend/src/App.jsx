import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Usuarios from './componentes/Usuarios';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Usuarios />} />
            <Route path="*" element={<Usuarios />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
