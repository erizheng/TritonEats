
import React from 'react'
import { FoodReview } from '../components/FoodReview';
import NavBar from '../components/NavBar';

import { Review, review } from '../constants/constants'; // Dynamically get an array of reviews instead of calling the mock, get from sql database
export const FoodReviewPage = () => {


// Page for just testing out the reviews, Delete Later
    return (
        <body>
            <head>
                <title>Food Reviews</title>
            </head>
            <NavBar /> 
            <div className="gridContainer">
                
                
                <div className="review-grid">
                    {/* Plan to make this into a list instead of repetitive calls */}
                    <FoodReview review={review}/>
                    <FoodReview review={review}/>
                    <FoodReview review={review}/>
                    <FoodReview review={review}/>
                    <FoodReview review={review}/>
                    <FoodReview review={review}/>
                    <FoodReview review={review}/>
                    <FoodReview review={review}/>
                    <FoodReview review={review}/>
                    <FoodReview review={review}/>

                </div>
            </div>
        </body>
        
    );

    
}