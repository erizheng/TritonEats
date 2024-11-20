import React from 'react'
import { dishItem } from '../../types/menuTypes';
export const MenuItems = (currentDish: dishItem) => {
   
    return (
        <div className='DishItem'>
           <img src={currentDish.img} className='recPics'/>

           <div className='gridContainer'>
                <div className='recImageText'>
                    <h3>{currentDish.food_name}</h3>
                    <h2>${currentDish.cost}</h2>
                    <p>{currentDish.location.dining_hall}</p>
                </div>
                <div className='recImageRating'>
                    {currentDish.rating}
                </div>
           </div>
           
            
        </div>
    );

    
}

export default MenuItems;