import React from 'react';
import Navbar from './components/NavBar';
import './CSS/App.css';
import './CSS/Navbar.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Recommend } from './pages/Recommend';
import { HomePage } from './pages/HomePage';
import './CSS/Recommend.css';

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    // </div>
    
    <BrowserRouter>
      <Routes>
        {/*HomePage*/ }
        <Route path="/" element={<HomePage/>} />
      
        {/*Recommendation Page*/ }
      <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
