import React, { useState, useContext, useEffect } from "react";
import { MenuContext } from "../../context/MenuContext";
import { dishItem } from "../../types/menuTypes";
// import { SortButtonCostAscend } from "./Buttons";
import { sortDishes, fetchDishes } from '../../utils/menu-utils';


export const MenuSortButtons = () => {
    const { dishes, setDishes } = useContext(MenuContext);
    const [clickCountCost, setClickCountCost] = useState(0);
    const [clickCountName, setClickCountName] = useState(0);
    const [clickCountRate, setClickCountRate] = useState(0);

    useEffect(() => {
        loadMenu();
    }, []);

    // Function to load expenses and handle errors
    const loadMenu = async () => {
        try {
            const dishList = await fetchDishes();
            setDishes(dishList);
        } catch (err: any) {
            console.log(err.message);
        }
    };

    //COST SORTING
    const handleCost = () => {
        setClickCountCost(clickCountCost + 1);
        setClickCountName(0);
        setClickCountRate(0);
        if (clickCountCost % 2 === 0) {
            const sortedListByCost = [...dishes].sort((a, b) => 
                a.cost - b.cost); // Sort in ascending order;
            sortDishes(sortedListByCost);
            setDishes(sortedListByCost);
        } else {
            const sortedListByCost = [...dishes].sort((a, b) => 
                b.cost - a.cost); // Sort in decending order;
            sortDishes(sortedListByCost);
            setDishes(sortedListByCost);
        }
    };

    //RATING SORTING
    const handleRate = () => {
        setClickCountCost(0);
        setClickCountName(0);
        setClickCountRate(clickCountRate + 1);
        if (clickCountRate % 2 === 0) {
            const sortedListByCost = [...dishes].sort((a, b) => 
                a.rating - b.rating); // Sort in ascending order;
            sortDishes(sortedListByCost);
            setDishes(sortedListByCost);
        } else {
            const sortedListByCost = [...dishes].sort((a, b) => 
                b.rating - a.rating); // Sort in decending order;
            sortDishes(sortedListByCost);
            setDishes(sortedListByCost);
        }
    };

    //NAME SORT
    const handleName = () => {
        setClickCountCost(0);
        setClickCountName(clickCountName + 1);
        setClickCountRate(0);
        if (clickCountName % 2 === 0) {
            const sortedListByCost = [...dishes].sort((a, b) => 
                a.food_name.localeCompare(b.food_name)); // Sort in ascending order;
            sortDishes(sortedListByCost);
            setDishes(sortedListByCost);
        } else {
            const sortedListByCost = [...dishes].sort((a, b) => 
                b.food_name.localeCompare(a.food_name)); // Sort in descending order;
            sortDishes(sortedListByCost);
            setDishes(sortedListByCost);
        }
        
    };
    //DISTANCE SORT
    
    

    return (
        <div className='sortFilter'>
            <ul className="navbar-links">
                {/* <li className="sortItem">Distance</li>
                <li className="sortItem">Busyness</li> */}
                <button className="sortItem" onClick={() => {
                    handleCost()
                }}>Price</button>{/* Sorts list ascend */}

                <button className="sortItem" onClick={() => {
                    handleRate()
                }}>Rate</button>{/* Sorts list ascend */}
                
                <button className="sortItem" onClick={() => {
                    handleName()
                }}>Name</button>{/* Sorts list ascend */}
                
            </ul>
                    
        </div>
    );


}

export default MenuSortButtons;