import React from 'react';


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={ "images/logo.png" } alt="Triton Eats Logo" className="logo-icon" />
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

