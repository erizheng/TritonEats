import React, { useEffect, useState } from 'react';
import Navbar from './components/NavBar';
import './CSS/App.css';
import './CSS/Navbar.css';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
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
import Login from './pages/Login';
import './CSS/Login.css'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import PrivateRoute from './components/Login/PrivateRoute';
import { useAuth } from './context/AuthContext';

// function App() {
//   return (
//     // <div className="App">
//     //   <Navbar />
//     // </div>
    
//     <BrowserRouter>
//       <Routes>
//         {/*HomePage*/ }
//         <Route path="/" element={<HomePage/>} />
//         <Route path="/home" element={<HomePage/>} />
      
//         {/*Recommendation Page*/ }
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/review" element={<DishDetails/>}/>
//         <Route path="/preferences" element={<PreferencesPage/>} />

//         {/*Dish Details Page*/ }
//         <Route path="/dish_details/:dish_id" element={<DishDetails />} />

//         {/* Login Page */}
//         <Route path="/login" element={<Login/>} />
        
//       </Routes>
//     </BrowserRouter>
//   );
// }

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route: Login */}
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <PrivateRoute>
              <Menu />
            </PrivateRoute>
          }
        />
        <Route
          path="/review"
          element={
            <PrivateRoute>
              <DishDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/preferences"
          element={
            <PrivateRoute>
              <PreferencesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dish_details/:dish_id"
          element={
            <PrivateRoute>
              <DishDetails />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
