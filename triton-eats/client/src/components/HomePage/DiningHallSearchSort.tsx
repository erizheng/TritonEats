import React, { useState } from 'react';
import { DiningHall } from '../../types/homepageTypes';

interface DiningHallSearchSortProps {
    filteredHalls: DiningHall[];
    setFilteredHalls: React.Dispatch<React.SetStateAction<DiningHall[]>>;
    allHalls: DiningHall[];
}

const DiningHallSearchSort: React.FC<DiningHallSearchSortProps> = ({ 
    filteredHalls, 
    setFilteredHalls, 
    allHalls 
}) => {
    const [searchItem, setSearchItem] = useState('');
    // const [distanceAsc, setDistanceAsc] = useState(true);
    const [busynessAsc, setBusynessAsc] = useState(true);
    const [activeSort, setActiveSort] = useState<'distance' | 'busyness' | null>(null);


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchItem(value);
        handleSearch(value); 
    };
    const handleSearch = (searchTerm: string) => {
        const filtered = allHalls.filter(hall =>
            hall.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredHalls(filtered);
    };


    // const handleSortByDistance = () => {
    //     const sorted = [...filteredHalls].sort((a, b) => {
    //         if (a.isOpen === b.isOpen) {
    //             return distanceAsc ? a.distance - b.distance : b.distance - a.distance;
    //         }
    //         return a.isOpen ? -1 : 1;
    //     });
    //     setFilteredHalls(sorted);
    //     setDistanceAsc(!distanceAsc);
    //     setActiveSort('distance'); 
    // };


    const handleSortByBusyness = () => {
        const sorted = [...filteredHalls].sort((a, b) => {
            if (a.isOpen === b.isOpen) {
                return busynessAsc ? a.busyness - b.busyness : b.busyness - a.busyness;
            }
            return a.isOpen ? -1 : 1;
        });
        setFilteredHalls(sorted);
        setBusynessAsc(!busynessAsc);
        setActiveSort('busyness');
    };

 
    return (
        <div className='DiningHallSearchSort'>
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchItem} 
                onChange={handleSearchChange} 
            />
            <div className="sort-buttons-container">
                {/* <button className="sort-button" onClick={handleSortByDistance}>
                    Distance {activeSort === 'distance' && (distanceAsc ? '↑' : '↓')}
                </button> */}
                <button className="sort-button" onClick={handleSortByBusyness}>
                    Busyness {activeSort === 'busyness' && (busynessAsc ? '↑' : '↓')}
                </button>
            </div>
        </div>
    );
};

export default DiningHallSearchSort;