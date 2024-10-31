import React from 'react';
import './Navbar.css';
import logo from './logo.png';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={ logo } alt="Triton Eats Logo" className="logo-icon" />
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">Homepage</li>
        <li className="navbar-item selected">Reviews</li>
        <li className="navbar-item">Capacity</li>
        <li className="navbar-item">Recommendations</li>
        <li className="navbar-item">Recipes</li>
      </ul>
      <div className="navbar-auth">
        <button className="signin-btn">Sign in</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;

