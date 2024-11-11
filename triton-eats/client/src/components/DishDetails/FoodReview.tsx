import React from 'react';
import { Review } from '../../types/reviewTypes';

type FoodReviewProps = {
    review: Review;
};

/** Create a Review object based on a dynamic review item */
export const FoodReview = ({ review }: FoodReviewProps) => {    

    const renderStars = (rating: number) => {
        const roundedRating = Math.round(rating); // Round the rating to the nearest integer
        const fullStars = Math.min(roundedRating, 5); // Cap at 5 stars
        const emptyStars = 5 - fullStars;

        return (
            <p aria-label='foodReviewStars'>
                {'★'.repeat(fullStars)}
                {'☆'.repeat(emptyStars)}
            </p>
        );
    };

    return (
        <div className='FoodReview'>
            {/** This image renders the placeHolder image if it can't find an associated image for the review */}
            <img
                src={review.img}
                alt={review.food_name}
                className="revPic"
                onError={(e) => {
                    e.currentTarget.src = '/images/placeHolderImage.png';
                }}
            />

            <div className='reviewContent'>
                <div className='reviewInformation'>
                    <h3>Anonymous User</h3>

                    
                    <p>{renderStars(review.rating)}</p>
                    <p>Would Recommend: {review.recommend ? "Yes" : "No"}</p>

                </div>


                {/** Deletes this div box if there is no review text, ie person just gives the thumbs up/down */}
                {review.review_text && review.review_text.trim() !== "" && (
                    <><hr className='reviewDivider' /><div className='reviewBody'>
                        <p className='reviewText' aria-label='foodReviewText'>{review.review_text}</p>
                    </div></>
                )}


            </div>
        </div>
    );
};

export default FoodReview;