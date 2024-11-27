import React, { useState, useContext, useEffect } from "react";
import { MenuContext } from "../../context/MenuContext";
import { dishItem, sortArrows } from "../../types/menuTypes";
// import { SortButtonCostAscend } from "./Buttons";
//import { sortDishes, fetchDishes } from '../../utils/menu-utils';


export const MenuSortButtons = () => {
    const { dishes, setDishes,
         arrowCost, setArrowCost,
          arrowName, setArrowName,
           arrowRate, setArrowRate } = useContext(MenuContext);
    const [clickCountCost, setClickCountCost] = useState(0);
    const [clickCountName, setClickCountName] = useState(0);
    const [clickCountRate, setClickCountRate] = useState(0);
    
    //COST SORTING
    const handleCost = () => {
        setClickCountCost(clickCountCost + 1);
        setClickCountName(0);
        setClickCountRate(0);
        setArrowName(sortArrows.empty.sym);
        setArrowRate(sortArrows.empty.sym);
        if (clickCountCost % 2 === 0) {
            const sortedListByCost = [...dishes].sort((a, b) => 
                a.cost - b.cost); // Sort in ascending order;
            //sortDishes(sortedListByCost);
            setDishes(sortedListByCost);
            setArrowCost(sortArrows.down.sym);
        } else {
            const sortedListByCost = [...dishes].sort((a, b) => 
                b.cost - a.cost); // Sort in decending order;
            //sortDishes(sortedListByCost);
            setDishes(sortedListByCost);
            setArrowCost(sortArrows.up.sym);

        }
    };

    //RATING SORTING
    const handleRate = () => {
        setClickCountCost(0);
        setClickCountName(0);
        setClickCountRate(clickCountRate + 1);
        setArrowName(sortArrows.empty.sym);
        setArrowCost(sortArrows.empty.sym);
        if (clickCountRate % 2 === 0) {
            const sortedListByCost = [...dishes].sort((a, b) => 
                a.rating - b.rating); // Sort in ascending order;
            //sortDishes(sortedListByCost);
            setDishes(sortedListByCost);
            setArrowRate(sortArrows.down.sym);
        } else {
            const sortedListByCost = [...dishes].sort((a, b) => 
                b.rating - a.rating); // Sort in decending order;
            //sortDishes(sortedListByCost);
            setDishes(sortedListByCost);
            setArrowRate(sortArrows.up.sym);
        }
    };

    //NAME SORT
    const handleName = () => {
        setClickCountCost(0);
        setClickCountName(clickCountName + 1);
        setClickCountRate(0);
        setArrowCost(sortArrows.empty.sym);
        setArrowRate(sortArrows.empty.sym);
        if (clickCountName % 2 === 0) {
            const sortedListByCost = [...dishes].sort((a, b) => 
                a.food_name.localeCompare(b.food_name)); // Sort in ascending order;
            //sortDishes(sortedListByCost);
            setDishes(sortedListByCost);
            setArrowName(sortArrows.down.sym);
        } else {
            const sortedListByCost = [...dishes].sort((a, b) => 
                b.food_name.localeCompare(a.food_name)); // Sort in descending order;
            //sortDishes(sortedListByCost);
            setDishes(sortedListByCost);
            setArrowName(sortArrows.up.sym);
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
                }} data-testid='priceSort'>Price {arrowCost}</button>{/* Sorts list ascend */}

                <button className="sortItem" onClick={() => {
                    handleRate()
                }} data-testid='rateSort'>Rate {arrowRate}</button>{/* Sorts list ascend */}
                
                <button className="sortItem" onClick={() => {
                    handleName()
                }} data-testid='nameSort'>Name {arrowName}</button>{/* Sorts list ascend */}
                
            </ul>
                    
        </div>
    );


}

export default MenuSortButtons;