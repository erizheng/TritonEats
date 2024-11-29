import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { dishItem } from "../Menu/types";

// Fetch dish details based on id from the database
export const fetchDishDetails = async (dish_id: string) => {
    const docRef = doc(db, "dishes", dish_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        throw new Error("No such dish!");
    }
};

// Update the dish DB with updated dish
export const updateDishDB = async (updatedDish: dishItem) => {
    const dishRef = doc(db, "dishes", updatedDish.food_id);
    await updateDoc(dishRef, updatedDish);
};

// Add a new dish to the DB
export const addDishToDB = async (newDish: dishItem) => {
    
    const dishRef = doc(db, "/dishes", newDish.food_id);
    if((await getDoc(dishRef)).exists()) {
        throw new Error("Dish already exists!");
    }
    await setDoc(dishRef, newDish);  
};