import React from 'react';
import { dishItem } from '../../types/menuTypes';

type DishDetailsDescriptionProps = {
    dish: dishItem;
};

export const DishDetailsDescription = ({ dish }: DishDetailsDescriptionProps) => {    

    // Calculate the number of full, half, and empty stars
    const renderStars = (rating: number) => {

        const fullStars = Math.floor(rating); 
        const halfStars = rating % 1 >= 0.15 ? 1 : 0; // Add a half star if decimal part is >= 0.15
        const emptyStars = 5 - fullStars - halfStars; 

        return (
            <>
                <span aria-label="ratingStarFilled" className="star filled">{'★'.repeat(fullStars)}</span>
                {halfStars > 0 && <img src="/images/half-star.png" alt="half star" className='halfStar' aria-label="ratingStarHalfFilled"/>}
                <span className="star" aria-label="ratingStarEmpty">{'★'.repeat(emptyStars)}</span>
            </>
        );
    };


    return (
        <div className="dishDetailsSection">
            {/** Dish Image */}
            <div className='dishImage'>
                <img
                    src={dish.img}
                    alt={dish.food_name}
                    className="dishPic"
                    onError={(e) => {
                        e.currentTarget.src = '/images/placeHolderImage.png';
                    }}
                />
            </div>

            {/** Dish Information: Name, Img, Rating, Recommendendation %, # reviews, allergens */}
            <div className='dishInformation'>

                <h2 className='dishName'>{dish.food_name}</h2>
                <p className='dishLocation'>{dish.location.name}</p>
                <div className="dishRating"> 
                    {renderStars(dish.rating)} 
                    <p className="wordRating">{dish.rating} / 5  ({dish.numReviews} reviews)</p>
                </div>

                <h1 className='dishPrice'>
                    <sup className='dollarSign'>$</sup>{dish.cost}
                </h1>

                <div className='descriptionContainer'>
                    <h4 className='descriptionTitle'>Description</h4>
                    <h5 className='allergens'>
                        Allergens: {dish.allergens.length > 0 ? dish.allergens.join(', ') : 'None'}
                    </h5>                    
                    <p>{dish.description}</p>

                    
                </div>
                <div className="likeAndRecommend">
                    <p>
                        {dish.numReviews > 0 ? (
                            <>
                                {Math.round((dish.numRecommend / dish.numReviews) * 100)}% of people would recommend this dish.
                            </>
                        ) : (
                            <span>No Reviews Yet. Be the First to Review!</span>
                        )}
                    </p>
                </div>
                

            </div>
        </div>
    );
};

export default DishDetailsDescription;


