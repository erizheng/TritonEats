import React, { useState, useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { dishItem } from "../../types/menuTypes";
import { SearchSort } from "./SortFunction";

export const RecommendSearch = () => {
    //const [searchItem, setSearchItem] = useState('');
    const { dishes, setDishes,
        arrowCost, setArrowCost,
         arrowName, setArrowName,
          arrowRate, setArrowRate } = useContext(MenuContext);
    const [filteredOut, setFilteredOut] = useState<dishItem[]>([]);


    //handles the filtering process when values are being searched
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        //the whole list of menu
        //function used to sort the searched depending on which sort is active, arrow input must be in order of cost, name, and rate
        const revertBack = SearchSort([...dishes, ...filteredOut], arrowCost, arrowName, arrowRate);

        //set value to what is being searched
        const value = event.target.value;
        // setSearchItem(value);
        // array of the searched items
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