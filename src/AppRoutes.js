import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Main/Home';
import About from './Pages/Main/SobreEmpresa/About';
import Contact from './Pages/Contato/Contact';
import NotFound from './Pages/NotFound/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;





