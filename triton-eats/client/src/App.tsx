import React from 'react';
import Navbar from './components/NavBar';
import './CSS/App.css';
import './CSS/Navbar.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Menu } from './pages/Menu';
import { TempHome } from './pages/tempHome';
import './CSS/Menu.css';

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    // </div>
    
    <BrowserRouter>
      <Routes>
        {/*HomePage*/ }
        <Route path="/" element={<TempHome />} />
      
        {/*Recommendation Page*/ }
      <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
