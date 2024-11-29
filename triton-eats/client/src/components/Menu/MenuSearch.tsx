import React, { useState, useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { dishItem } from "../../types/menuTypes";

export const RecommendSearch = () => {
    //const [searchItem, setSearchItem] = useState('');
    const { dishes, setDishes } = useContext(MenuContext);
    const [filteredOut, setFilteredOut] = useState<dishItem[]>([]);


    //handles the filtering process when values are being searched
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        //will fix this to sort based on what is active
        //the whole list of menu
        const revertBack = [...dishes, ...filteredOut].sort((a, b) => 
            a.food_name.localeCompare(b.food_name));

        //set value to what is being searched
        const value = event.target.value;
        // setSearchItem(value);
        //array of the searched items
        const searchFiltered = revertBack.filter(i => i.food_name.toLowerCase().includes(value.toLowerCase()));
        //array of the non-searched items
        const notSearched = revertBack.filter(i => !i.food_name.toLowerCase().includes(value.toLowerCase()));

        //setting the values
        setFilteredOut(notSearched);
        setDishes(searchFiltered);
    };

    return (
        <div className='RecommendSearch'>
            <input 
                type="text" 
                placeholder="Search..." 
                // value={searchItem} 
                onChange={handleSearch} 
            />
        </div>
    );


}

export default RecommendSearch;