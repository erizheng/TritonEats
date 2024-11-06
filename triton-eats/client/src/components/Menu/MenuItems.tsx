import React, { useContext, useState } from 'react'
import { MenuContext } from '../../context/MenuContext';
import { dishItem
    
 } from '../../tempConstantAndTypesFiles/menuTypes';
export const MenuItems = (currentDish: dishItem) => {

    const {dishes, setDishes} = useContext(MenuContext);
   
    return (
        <div className='DishItem'>
           <img src={'images/placeHolderImage.png'} className='recPics'/>

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