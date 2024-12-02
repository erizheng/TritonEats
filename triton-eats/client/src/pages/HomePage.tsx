import React from 'react';
import { useFetchDiningHalls } from '../components/HomePage/fetchDiningHalls';
import DiningHallSearchSort from '../components/HomePage/DiningHallSearchSort';
import DiningHallsGrid from '../components/HomePage/DiningHallsGrid';
import Navbar from '../components/NavBar';
import '../CSS/HomePage.css';

export const HomePage: React.FC = () => {
    // Every time homepage is loaded, a new fetch occurs. fetchDiningHalls handles all API calls and sets up dining halls
    const { filteredHalls, setFilteredHalls, allHalls } = useFetchDiningHalls();

    return (
        <div>
            <Navbar selected='Homepage' />

             {/** Handles all searching and filtering logic*/}
            <DiningHallSearchSort                
                filteredHalls={filteredHalls} 
                setFilteredHalls={setFilteredHalls} 
                allHalls={allHalls} 
            />

            {/** Handles all searching and filtering logic*/}
            <DiningHallsGrid diningHalls={filteredHalls} />
        </div>
    );
};

export default HomePage;