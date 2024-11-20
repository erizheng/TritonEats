import React, { useContext, useState } from 'react'
import { MenuContext } from '../../context/MenuContext';
import { dishItem } from '../../types/menuTypes';
import { Link } from 'react-router-dom';
export const MenuItems = (currentDish: dishItem) => {

    const {dishes, setDishes} = useContext(MenuContext);
   
    return (
        <div className='DishItem'>
            <Link to={`/dish_details/${currentDish.food_id}`} key={currentDish.food_id}>
                <img src={'images/placeHolderImage.png'} className='recPics'/>
            </Link>

           <div className='gridContainer'>
                <div className='recImageText'>
                    <h3>{currentDish.food_name}</h3>
                    <h2>${currentDish.cost}</h2>
                    <p>{currentDish.location.name}</p>
                </div>
                <div className='recImageRating'>
                    {currentDish.rating}
                </div>
           </div>
           
            
        </div>
    );

    
}

export default MenuItems;