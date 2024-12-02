import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Review } from "../Menu/types";

// Fetch the reviews from the database associated with the dish_id
export const fetchReviews = async (dish_id: string) => {
    const reviewsRef = collection(db, "dishes", dish_id, "reviews");
    const q = query(reviewsRef, orderBy("datetime", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => doc.data());
};

// Update the DB based on the new review. 
export const updateReviewDB = async (newReview: Review) => {
    const reviewsRef = collection(db, "dishes", newReview.food_id, "reviews");
    await addDoc(reviewsRef, newReview);
};