import React from 'react'
import { dishItem } from '../../types/menuTypes';
import { Link } from 'react-router-dom';
export const MenuItems = (currentDish: dishItem) => {
   
    return (
        <div className='DishItem'>
            <Link to={`/dish_details/${currentDish.food_id}`} key={currentDish.food_id}>
                <img src={'images/placeHolderImage.png'} className='recPics'/>
            </Link>
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