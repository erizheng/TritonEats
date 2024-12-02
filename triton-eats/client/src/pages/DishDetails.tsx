
import React, { useEffect, useState } from 'react'
import { Review } from '../types/reviewTypes';
import { Link, useParams } from 'react-router-dom';
import { DiningHalls, dishItem } from "../types/menuTypes";
import DishDetailsDescription from '../components/DishDetails/DishDetailsDescription';
import ReviewList from '../components/DishDetails/ReviewList';
import ReviewForm from '../components/DishDetails/ReviewForm';
import { addReviewAndUpdateDishInformation, fetchDishDetails, fetchReviewsByDishID }from '../utils/dish-details'
import Navbar from '../components/NavBar';

export const DishDetails = () => {

    // states to hold dish, reviews, and the current sort option
    const { dish_id } = useParams();
    const [dish, setDish] = useState<dishItem>();
    const [reviews, setReviews] = useState<Review[]>([]); 
    const [sortOption, setSortOption] = useState("mostRecent");
    
 
    // Upon loading the page, fetch the dish and reviews associated with dish_id using API calls
    useEffect(() => {
        if (dish_id) {
            fetchDishDetails(dish_id) // API call
            .then((data) => setDish(data))
            .catch((err) => console.error(err));

            fetchReviewsByDishID(dish_id)
            .then((data) => setReviews(data)) // API call
            .catch((err) => console.error(err));
        }
        
    }, [dish_id]);

    
    
    // Alt. screen to show when API calls being made
    if (!dish) {
        return <div>Loading Dish Details...</div>
    }


    // Handle submitting the review and add it to the reviews list/db
    const handleReviewSubmit = async (reviewData: any) => {

        const newReview = {
            datetime: new Date(),
            food_id: dish_id || "", 
            img: "img.png", // Edit Image Upload later
            location: dish.location,
            rating: reviewData.rating,
            review_text: reviewData.reviewText,
            recommend: reviewData.recommend,
            food_name: dish.food_name,
            cost: dish.cost,
        };

        if (dish_id === "") {
            // Handle the case when dish_id is an empty string
            console.error("Error: dish_id is nonexistent");
            return;
        }
    

        const updatedDish = { ...dish };

        // Update recommendation counts
        if (reviewData.recommend) {
            updatedDish.numRecommend += 1;
        }

        // Recalculate Rating
        const totalRating = (updatedDish.rating * updatedDish.numReviews + reviewData.rating) / (updatedDish.numReviews + 1);
        updatedDish.rating = parseFloat(totalRating.toFixed(2)); 
        updatedDish.numReviews += 1;
        
        // Update Reviews/Dishes locally
        setDish(updatedDish)
        setReviews([newReview, ...reviews]);

        // API call to update database
        await addReviewAndUpdateDishInformation(updatedDish, newReview);
    };

    return (
        
        <div>
            <Navbar selected='Menu'/>

            <div className="dishDetailsPage">

                {/** SECTION ONE - BASIC DISH INFORMATION*/}
                <DishDetailsDescription 
                    dish={dish} 
                />
                <div className="dishDetailsDivider" />

                {/** SECTION TWO - REVIEW FORM */}
                <ReviewForm onSubmit={handleReviewSubmit} />


                <div className="dishDetailsDivider" />

                
                {/** SECTION THREE - REVIEW LIST */}
                <ReviewList 
                    reviews={reviews} 
                    sortOption={sortOption} 
                    setSortOption={setSortOption} 
                />
            </div>
        </div>
    );
}