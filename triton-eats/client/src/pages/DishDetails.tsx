
import React, { useEffect, useState } from 'react'
import { FoodReview } from "../components/DishDetails/FoodReview"
import  NavBar  from '../components/NavBar';
import { Review } from '../types/reviewTypes';
import { useParams } from 'react-router-dom';
import { dishItem } from "../types/menuTypes";
import DishDetailsDescription from '../components/DishDetails/DishDetailsDescription';
import ReviewList from '../components/DishDetails/ReviewList';
import ReviewForm from '../components/DishDetails/ReviewForm';


export const DishDetails = () => {

    // Use Mocking for now
    const mockDish: dishItem = {
        food_id: "0",
        img: "/images/placeHolderImage.png",
        food_name: "something",
        cost: 1,
        location: { name: "Revelle", dining_hall: "sixtyfour", location_id: 1 },
        allergens: [],
        rating: 3.25,
        description: "something made with a bit of something cooked in a something topped with something with a side of something",
        numReviews: 0,
        numRecommend: 0,
    };




    const { dish_id } = useParams(); 
    const [dish, setDish] = useState<dishItem>(mockDish); // null
    const [reviews, setReviews] = useState<Review[]>([]); // empty array
    const [sortOption, setSortOption] = useState("mostRecent");



    /** 
      
        TODO: IMPLEMENT BACKEND LOGIC TO FETCH CORRECT DISH BASED ON THE DISH_ID PASSED 

    useEffect(() => {

        if (dish_id) {
            fetchDishDetails(dish_id).then((data) => setDish(data));  <--- implement fetchDishDetails on the backend and fetching from db 
            fetchReviews(dish_id).then((data) => setReviews(data));   <--- implement fetchReviews on the backend and fetching from db 
        }
    }, [dish_id]);
    */
   


    // Handle submitting the review and add it to the reviews list/db
    const handleReviewSubmit = (reviewData: any) => {

        const newReview = {
            datetime: new Date(),
            food_id: dish_id ? parseInt(dish_id, 10) : 0, // food_id needs to be valid
            img: "img.png", // Edit Image Upload later
            location: dish.location,
            rating: reviewData.rating,
            review_text: reviewData.reviewText,
            recommend: reviewData.recommend,
            food_name: dish.food_name,
            cost: dish.cost,
        };
        

        const updatedDish = { ...dish };

        // Update recommendation counts
        if (reviewData.recommend) {
            updatedDish.numRecommend += 1;
        }

        const totalRating = (updatedDish.rating * updatedDish.numReviews + reviewData.rating) / (updatedDish.numReviews + 1);
        updatedDish.rating = parseFloat(totalRating.toFixed(2)); 
        updatedDish.numReviews += 1;

        setDish(updatedDish)
        // updateDishDB(updatedDish); TODO: IMPLEMENT BACKEND LOGIC TO UPDATE REVIEW DB
        setReviews([newReview, ...reviews]);
        // updateReviewDB(newReview); TODO: IMPLEMENT BACKEND LOGIC TO UPDATE REVIEW DB
    };

    return (
        
        <div>
            <NavBar selected="Reviews"/>{/**<NavBar selected='DishDetails OR Reviews'/> */}
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