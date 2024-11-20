import React, { useState, useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { dishItem } from "../../types/menuTypes";

export const RecommendSearch = () => {
    const [searchItem, setSearchItem] = useState('');
    const { dishes, setDishes } = useContext(MenuContext);
    const [filteredOut, setFilteredOut] = useState<dishItem[]>([]);



    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const revertBack = [...dishes, ...filteredOut].sort((a, b) => 
            a.food_name.localeCompare(b.food_name));
        const value = event.target.value;
        setSearchItem(value);
        const searchFiltered = revertBack.filter(i => i.food_name.includes(value));
        const notSearched = revertBack.filter(i => !i.food_name.includes(value));
        setFilteredOut(notSearched);
        setDishes(searchFiltered);

        console.log(dishes);
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