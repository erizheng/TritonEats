import React, { useState } from 'react';
import { DiningHall } from '../../types/homepageTypes';

interface DiningHallSearchSortProps {
    filteredHalls: DiningHall[];
    setFilteredHalls: React.Dispatch<React.SetStateAction<DiningHall[]>>;
    allHalls: DiningHall[];
}

// Handles both search and sorting features
const DiningHallSearchSort: React.FC<DiningHallSearchSortProps> = ({ 
    filteredHalls, 
    setFilteredHalls, 
    allHalls 
}) => {
    const [searchItem, setSearchItem] = useState('');
    const [busynessAsc, setBusynessAsc] = useState(false);

    // Looks for any changes in searchbar before calling handleSearch
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

    const handleSortByBusyness = () => {
        const sorted = [...filteredHalls].sort((a, b) => {
            if (a.isOpen === b.isOpen) {
                // Checks for ascending vs descending for arrow rendering
                return busynessAsc ? a.busyness - b.busyness : b.busyness - a.busyness;
            }
            return a.isOpen ? -1 : 1;
        });
        setFilteredHalls(sorted);
        setBusynessAsc(!busynessAsc);
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
                <button className="sort-button" onClick={handleSortByBusyness} data-testid={`Busyness`}>
                    Busyness {(busynessAsc ? '↑' : '↓')}
                </button>
            </div>
        </div>
    );
};

export default DiningHallSearchSort;