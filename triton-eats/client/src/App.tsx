import React from 'react';
import Navbar from './screens/navBar/NavBar';
import logo from './logo.svg';
import './CSS/App.css';
import './CSS/main.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Recommend } from './pages/Recommend';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
    <BrowserRouter>
      <Routes>
        {/*HomePage*/ }
      
        {/*Recommendation Page*/ }
      <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
