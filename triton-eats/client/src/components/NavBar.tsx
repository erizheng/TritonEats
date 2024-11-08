import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  selected: string; // Expect a string that denotes the selected item
}

const Navbar: React.FC<NavbarProps> = ({ selected }) => {
  const navbarItems = [
    {name: 'Homepage', path: '/'},
    {name: 'Menu', path: '/menu'},
    {name: 'Reviews', path: '/review'},
    {name: 'Preferences', path: '/preferences/'}
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={ "images/logo.png" } alt="Triton Eats Logo" className="logo-icon" />
      </div>
      <div className="navbar-links">
        {navbarItems.map(item => (
          <Link key={item.name} to={item.path} className={`navbar-item ${selected === item.name ? 'selected' : ''}`}>
            {item.name}
          </Link>
        ))}
      </div>
      {/* <div className="navbar-auth">
        <button className="signin-btn">Sign in</button>
        <button className="register-btn">Register</button>
      </div> */}
    </nav>
  );
};

export default Navbar;

