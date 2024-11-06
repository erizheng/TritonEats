import DiningHallsGrid from '../components/HomePage/DiningHallsGrid';
import RecommendedItem from '../components/HomePage/TempRecommendedItem';
import Navbar from '../components/NavBar';
import '../CSS/HomePage.css';

export const HomePage = () => {
   
    return (
        <body>
            <Navbar/>
            <div className="homepage">
                <h2>Recommended Items:</h2>
                <div className="recommended-items">
                    <RecommendedItem name="Umi Roll" price="$$$" rating={3} />
                    <RecommendedItem name="Achiote Chikcen Nachos" price="$$" rating={5} />
                    <RecommendedItem name="Chicken Tenders" price="$" rating={4} />
                    <RecommendedItem name="Chicken Katsu" price="$$" rating={3} />
                    <RecommendedItem name="Acai Bowl" price="$" rating={4} />
                    {/* Temp ReconmmendedItems untill integrated with reccomendations page */}
                </div>

                <h2>Dining hall capacity:</h2>
                <DiningHallsGrid />
            </div>
        </body>
        
    );

}