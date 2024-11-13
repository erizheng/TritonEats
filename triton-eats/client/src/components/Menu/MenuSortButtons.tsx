import React, { useState, useContext, useEffect } from "react";
import { MenuContext } from "../../context/MenuContext";
import { dishItem } from "../../types/menuTypes";
// import { SortButtonCostAscend } from "./Buttons";
import { sortDishes, fetchDishes } from '../../utils/menu-utils';


export const MenuSortButtons = () => {
    const { dishes, setDishes } = useContext(MenuContext);

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
    const handleCostDescend = () => {
        const sortedListByCost = [...dishes].sort((a, b) => b.cost - a.cost); // Sort in decending order;
        sortDishes(sortedListByCost);
        setDishes(sortedListByCost);
    };
    const handleCostAscend = () => {
        const sortedListByCost = [...dishes].sort((a, b) => a.cost - b.cost); // Sort in ascending order;
        sortDishes(sortedListByCost);
        setDishes(sortedListByCost);
    };

    //RATING SORTING
    const handleRateAscend = () => {
        const sortedListByCost = [...dishes].sort((a, b) => a.rating - b.rating); // Sort in ascending order;
        sortDishes(sortedListByCost);
        setDishes(sortedListByCost);
    };
    const handleRateDescend = () => {
        const sortedListByCost = [...dishes].sort((a, b) => b.rating - a.rating); // Sort in decending order;
        sortDishes(sortedListByCost);
        setDishes(sortedListByCost);
    };

    //DISTANCE SORT
    //NAME SORT
    const handleNameAscend = () => {
        const sortedListByCost = [...dishes].sort((a, b) => 
            a.food_name.localeCompare(b.food_name)); // Sort in ascending order;
        sortDishes(sortedListByCost);
        setDishes(sortedListByCost);
    };
    const handleNameDescend = () => {
        const sortedListByCost = [...dishes].sort((a, b) => 
            b.food_name.localeCompare(a.food_name)); // Sort in descending order;
        sortDishes(sortedListByCost);
        setDishes(sortedListByCost);
    };
    

    return (
        <div className='sortFilter'>
            <ul className="navbar-links">
                {/* <li className="sortItem">Distance</li>
                <li className="sortItem">Ratings</li>
                <li className="sortItem">Busyness</li> */}
                <button className="sortItem" onClick={() => {
                    handleCostAscend()
                }}>Price ^</button>{/* Sorts list ascend */}
                <button className="sortItem" onClick={() => {
                    handleCostDescend()
                }}>Price Down</button>{/* Sorts list Descend */}
                <button className="sortItem" onClick={() => {
                    handleRateAscend()
                }}>Rate ^</button>{/* Sorts list ascend */}
                <button className="sortItem" onClick={() => {
                    handleRateDescend()
                }}>Rate Down</button>{/* Sorts list descend */}
                <button className="sortItem" onClick={() => {
                    handleNameAscend()
                }}>Name ^</button>{/* Sorts list ascend */}
                <button className="sortItem" onClick={() => {
                    handleNameDescend()
                }}>Name Down</button>{/* Sorts list ascend */}
            </ul>
                    
        </div>
    );


}

export default MenuSortButtons;