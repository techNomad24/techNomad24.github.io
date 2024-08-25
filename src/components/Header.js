import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import './Header.css'; // Optional, for custom styles

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="card text-center p-4">
          <h1 className="card-title">Welcome to My Portfolio</h1>
          <p className="card-text">I’m a software engineer passionate about technology and innovation.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
