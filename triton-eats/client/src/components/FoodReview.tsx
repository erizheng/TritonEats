import React from 'react';
import { Review } from '../constants/constants'; 

interface FoodReviewProps {
    review: Review;
}

/** Create a Review object based on a dynamic review item */
export const FoodReview: React.FC<FoodReviewProps> = ({ review }) => {
    return (
        <div className='FoodReview'>
            {/** This image renders the placeHolder image if it can't find an associated image for the review */}
            <img
                src={review.img}
                alt={review.food_name}
                className="revPic"
                onError={(e) => {
                    e.currentTarget.src = 'images/placeHolderImage.png';
                }}
            />

            <div className='reviewContent'>
                <div className='reviewInformation'>
                    <h3>{review.food_name}</h3>
                    <p>${review.cost}</p>
                    <p>{review.location}</p>
                    <p>{review.rating} / 5</p>
                </div>

                {/** Deletes this div box if there is no review text, ie person just gives the thumbs up/down */}
                {review.review_text && review.review_text.trim() !== "" && (
                    <div className='reviewBody'>
                        <p className='reviewText'>{review.review_text}</p>
                    </div>
                )}


            </div>
        </div>
    );
};

export default FoodReview;