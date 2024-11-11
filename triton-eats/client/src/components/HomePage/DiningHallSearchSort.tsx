import React, { useState } from 'react';

interface DiningHallSearchSortProps {
    onSearch: (searchTerm: string) => void;
    onSortByDistance: () => void;
    onSortByBusyness: () => void;
}

const DiningHallSearchSort: React.FC<DiningHallSearchSortProps> = ({ onSearch, onSortByDistance, onSortByBusyness }) => {
    const [searchItem, setSearchItem] = useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchItem(value);
        onSearch(value);
    };

    return (
        <div className='DiningHallSearchSort'>
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchItem} 
                onChange={handleSearch} 
            />
            <div className="sort-buttons-container">
                <button className="sort-button" onClick={onSortByDistance}>Distance</button>
                <button className="sort-button" onClick={onSortByBusyness}>Busyness</button>
            </div>
        </div>
    );
};

export default DiningHallSearchSort;
