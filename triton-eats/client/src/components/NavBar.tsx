import React from 'react';

interface NavbarProps {
  selected: string; // Expect a string that denotes the selected item
}

export const Navbar: React.FC<NavbarProps> = ({ selected }) => {
  const navbarItems = ['Homepage', 'Reviews', 'Capacity', 'Menu', 'Recipes'];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={ "images/logo.png" } alt="Triton Eats Logo" className="logo-icon" />
      </div>
      <ul className="navbar-links">
        {navbarItems.map(item => (
          <li key={item} className={`navbar-item ${selected === item ? 'selected' : ''}`}>
            {item}
          </li>
        ))}
      </ul>
      {/* <div className="navbar-auth">
        <button className="signin-btn">Sign in</button>
        <button className="register-btn">Register</button>
      </div> */}
    </nav>
  );
};

export default Navbar;

