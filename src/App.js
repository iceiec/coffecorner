import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/home.tsx';
import Shop from './Components/shop.tsx';
import Bar from './Components/navbar.tsx';

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Bar />
      

      {/* Routes define what page to render */}
      <Routes>
        <Route path="/home.tsx" element={<Home />} />
        <Route path="/shop.tsx" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
