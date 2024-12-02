import React from 'react';
import { Review } from '../../types/reviewTypes';

type FoodReviewProps = {
    review: Review;
};

/** Create a Review object based on a dynamic review item */
export const FoodReview = ({ review }: FoodReviewProps) => {    

    // Return div of stars based on rating
    const renderStars = (rating: number) => {
        const roundedRating = Math.round(rating); 
        const fullStars = Math.min(roundedRating, 5); 
        const emptyStars = 5 - fullStars;

        return (
            <p aria-label='foodReviewStars'>
                {'★'.repeat(fullStars)}
                {'☆'.repeat(emptyStars)}
            </p>
        );
    };

    // Format date as "Abbreviated Month Day, Year" (e.g., Sept. 16, 2025)
    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        };
        return new Date(date).toLocaleDateString('en-US', options);
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

                    
                    <div>{renderStars(review.rating)}</div>
                    <p>Would Recommend: {review.recommend ? "Yes" : "No"}</p>
                    <p>Posted on: {formatDate(review.datetime)}</p>

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