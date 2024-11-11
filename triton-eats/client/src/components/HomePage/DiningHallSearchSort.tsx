import React, { useState } from 'react';

interface DiningHallSearchSortProps {
    onSearch: (searchTerm: string) => void;
    onSortByDistance: () => void;
    onSortByBusyness: () => void;
}

const DiningHallSearchSort: React.FC<DiningHallSearchSortProps> = ({ onSearch, onSortByDistance, onSortByBusyness }) => {
    const [searchItem, setSearchItem] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchItem(value);
        onSearch(value); 
    };

    const handleDistanceSort = () => {
        onSortByDistance(); 
    };

    const handleBusynessSort = () => {
        onSortByBusyness(); 
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
                <button className="sort-button" onClick={handleDistanceSort}>Distance</button>
                <button className="sort-button" onClick={handleBusynessSort}>Busyness</button>
            </div>
        </div>
    );
};

export default DiningHallSearchSort;
