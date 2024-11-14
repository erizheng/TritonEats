import React from 'react';
import Navbar from './components/NavBar';
import './CSS/App.css';
import './CSS/Navbar.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Menu } from './pages/Menu';
import { HomePage } from './pages/HomePage';
import { FoodReviewPage } from './pages/FoodReview';
import './CSS/Menu.css';
import './CSS/FoodReview.css';
import FoodReview from './components/FoodReview';


function App() {
  return (
    // <div className="App">
    //   <Navbar />
    // </div>
    
    <BrowserRouter>
      <Routes>
        {/*HomePage*/ }
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
      
        {/*Recommendation Page*/ }
        <Route path="/menu" element={<Menu />} />
        <Route path="/review" element={<FoodReviewPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
