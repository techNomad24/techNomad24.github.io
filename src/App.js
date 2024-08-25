import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum'; 
import Blog from './pages/Blog';
import FinancialUpdate from './pages/FinancialUpdate';
import Header from './components/Header'; // Import Header component

const App = () => {
  return (
    <Router>
      <Header /> {/* Header with theme switcher */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/financial-update" element={<FinancialUpdate />} />
      </Routes>
    </Router>
  );
};

export default App;
