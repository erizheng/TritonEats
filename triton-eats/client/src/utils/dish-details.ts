import { API_BASE_URL } from "../constants/menuConstants";
import { dishItem } from "../types/menuTypes";
import { Review } from "../types/reviewTypes";

// Various API calls needed in the Dish_details page to read and write from DB for dish information and reviews. 

export const fetchDishDetails = async (dishId: string) => {

    const response = await fetch(`${API_BASE_URL}/api/dishes/${dishId}`);
    if (!response.ok) throw new Error("Failed to fetch dish details");

    return response.json();
};
  
export const fetchReviewsByDishID = async (dishId: string) => {

    const response = await fetch(`${API_BASE_URL}/api/dishes/${dishId}/reviews`);
    if (!response.ok) throw new Error(`Failed to fetch reviews for ${dishId}`);

    return response.json();
};


export const addReviewAndUpdateDishInformation = async (updatedDish: dishItem, reviewData: Review) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/dishes/${updatedDish.food_id}/review`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ updatedDish, reviewData }),
        });

        if (!response.ok) {
            throw new Error("Failed to update dish or add review");
        }

        const result = await response.json();
        console.log(result.message);
    } catch (error) {
        console.error("Error:", error);
    }
};

export const addDishToDB = async (newDish: dishItem) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/dishes/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( newDish ),
        });

        if (!response.ok) {
            throw new Error("Failed to update dish or add review");
        }

        const result = await response.json();
        console.log(result.message);
    } catch (error) {
        console.error("Error:", error);
    }
}