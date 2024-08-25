import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import FinancialUpdate from './pages/FinancialUpdate';
import Links from './components/Links';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/financial-update" element={<FinancialUpdate />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
