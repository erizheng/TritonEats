import './CSS/Navbar.css';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Menu } from './pages/Menu';
import { HomePage } from './pages/HomePage';
import './CSS/Menu.css';
import './CSS/FoodReview.css';
import { PreferencesPage } from './pages/PreferencesPage';
import './CSS/DishDetails.css'
import { DishDetails } from './pages/DishDetails';
import Login from './pages/Login';
import './CSS/Login.css'
import PrivateRoute from './components/Login/PrivateRoute';
import { useAuth } from './context/AuthContext';


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