import React from 'react';
import Navbar from './components/NavBar';
import './CSS/App.css';
import './CSS/Navbar.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Menu } from './pages/Menu';
import { HomePage } from './pages/HomePage';
import './CSS/Menu.css';
import './CSS/FoodReview.css';
import Preferences from './components/Preferences/Preferences';
import PreferencesGrid from './components/Preferences/PreferenceGrid';
import { PreferencesPage } from './pages/PreferencesPage';
import './CSS/DishDetails.css'
import FoodReview from './components/DishDetails/FoodReview';
import { DishDetails } from './pages/DishDetails';

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
        <Route path="/preferences" element={<PreferencesPage/>} />

        {/*Dish Details Page*/ }
        <Route path="/dish_details/:dish_id" element={<DishDetails />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
