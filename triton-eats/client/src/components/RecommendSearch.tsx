import React, { useState, useContext } from "react";

export const RecommendSearch = () => {
    const [searchItem, setSearchItem] = useState('');

    const handleSearch = () => {
    
    };
   
    return (
        <div className='RecommendSearch'>
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchItem} 
                onChange={handleSearch} 
            />
        </div>
    );

    
}

export default RecommendSearch;