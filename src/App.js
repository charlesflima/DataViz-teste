import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe Routes aqui

import Header from './Components/Header';
import Footer from './Components/Footer';
import AppRoutes from './AppRoutes';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<AppRoutes />} />
        </Routes>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;







