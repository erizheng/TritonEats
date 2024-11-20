import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { dishItem } from "../Menu/types";


export const fetchDishDetails = async (dish_id: string) => {
    const docRef = doc(db, "dishes", dish_id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        throw new Error("No such dish!");
    }
};

export const updateDishDB = async (updatedDish: dishItem) => {
    const dishRef = doc(db, "dishes", updatedDish.food_id);
    await updateDoc(dishRef, updatedDish);
};

export const addDishToDB = async (newDish: dishItem) => {
    const dishRef = doc(db, "dishes", newDish.food_id);
    await setDoc(dishRef, newDish);  
};