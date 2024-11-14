import { sortDishes } from '../../utils/menu-utils';
import React, { useState, useContext } from "react";
import { dishItem } from '../../types/menuTypes';
import { MenuContext } from "../../context/MenuContext";

// const handleCostAscend = () => {
//     const { dishes, setDishes } = useContext(MenuContext);
//     const sortedListByCost = [...dishes].sort((a, b) => b.cost - a.cost); // Sort in decending order;
//     setDishes(sortedListByCost);
//     sortDishes(sortedListByCost);
// };


// export function SortButtonCostAscend() {

//     return (
//         <button className="sortButton" onClick={() => {
//             handleCostAscend()
//         }}>
//             {text}
//         </button>
//     )
// }