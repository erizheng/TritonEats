import React from 'react';
import { useFetchDiningHalls } from '../components/HomePage/fetchDiningHalls';
import DiningHallSearchSort from '../components/HomePage/DiningHallSearchSort';
import DiningHallsGrid from '../components/HomePage/DiningHallsGrid';
import Navbar from '../components/NavBar';
import '../CSS/HomePage.css';

export const HomePage: React.FC = () => {
    const { filteredHalls, setFilteredHalls, allHalls } = useFetchDiningHalls();

    return (
        <div>
            <Navbar selected='Homepage' />
            <DiningHallSearchSort 
                filteredHalls={filteredHalls} 
                setFilteredHalls={setFilteredHalls} 
                allHalls={allHalls} 
            />
            <DiningHallsGrid diningHalls={filteredHalls} />
        </div>
    );
};

export default HomePage;