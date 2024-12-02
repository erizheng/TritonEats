import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  selected: string; // Expect a string that denotes the selected item
}

const Navbar: React.FC<NavbarProps> = ({ selected }) => {
  // const { user, setUser } = useAuth();
  // const navigate = useNavigate();
  
  const navbarItems = [
    {name: 'Homepage', path: '/'},
    {name: 'Menu', path: '/menu'},
    // {name: 'Reviews', path: '/review'},
    {name: 'Preferences', path: '/preferences/'}
  ];

  // const handleLogout = () => {
  //   setUser(null); // Clears state and localStorage
  //   navigate("/login"); // Redirect to login page
  // };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={ "/images/logo.png" } alt="Triton Eats Logo" className="logo-icon" />
        </Link>
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
        <nav>{user && <button className="logout-btn" onClick={handleLogout}>Logout</button>}</nav>
        <button className="register-btn">Register</button>
      </div> */}
    </nav>
  );
};

export default Navbar;

