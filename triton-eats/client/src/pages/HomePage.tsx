import { useState } from 'react';
import DiningHallsGrid from '../components/HomePage/DiningHallsGrid';
import DiningHallSearchSort from '../components/HomePage/DiningHallSearchSort';
import Navbar from '../components/NavBar';
import '../CSS/HomePage.css';
import { DiningHall } from '../types/homepageTypes';
import { diningHalls as initialDiningHalls } from '../constants/homepageConstants';


export const HomePage: React.FC = () => {
    const [filteredHalls, setFilteredHalls] = useState<DiningHall[]>(initialDiningHalls);
    const [distanceAsc, setDistanceAsc] = useState(true);
    const [busynessAsc, setBusynessAsc] = useState(true);

    const handleSearch = (searchTerm: string) => {
        const filtered = initialDiningHalls.filter(hall =>
            hall.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredHalls(filtered);
    };

    const handleSortByDistance = () => {
        const sorted = [...filteredHalls].sort((a, b) => {
            if (a.isOpen === b.isOpen) {
                return distanceAsc ? a.distance - b.distance : b.distance - a.distance;
            }
            return a.isOpen ? -1 : 1;
        });
        setFilteredHalls(sorted);
        setDistanceAsc(!distanceAsc);  
    };

    const handleSortByBusyness = () => {
        const sorted = [...filteredHalls].sort((a, b) => {
            if (a.isOpen === b.isOpen) {
                return busynessAsc ? b.busyness - a.busyness : a.busyness - b.busyness;
            }
            return a.isOpen ? -1 : 1;
        });
        setFilteredHalls(sorted);
        setBusynessAsc(!busynessAsc);  
    };

    return (
        <div>
            <Navbar selected='Homepage' />
            <DiningHallSearchSort 
                onSearch={handleSearch} 
                onSortByDistance={handleSortByDistance} 
                onSortByBusyness={handleSortByBusyness} 
            />
            <DiningHallsGrid diningHalls={filteredHalls} />
        </div>
    );
};

export default HomePage;