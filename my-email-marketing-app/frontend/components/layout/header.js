// frontend/components/Layout/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <a href="/">Your Logo</a>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a href="/register">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
