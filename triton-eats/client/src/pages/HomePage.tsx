import { useDiningHallSearchSort } from '../components/HomePage/useDiningHallSearchSort';
import DiningHallsGrid from '../components/HomePage/DiningHallsGrid';
import DiningHallSearchSort from '../components/HomePage/DiningHallSearchSort';
import Navbar from '../components/NavBar';
import '../CSS/HomePage.css';

export const HomePage: React.FC = () => {
    const {
        filteredHalls,
        handleSearch,
        handleSortByDistance,
        handleSortByBusyness
    } = useDiningHallSearchSort(); // Use custom hook for logic

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
