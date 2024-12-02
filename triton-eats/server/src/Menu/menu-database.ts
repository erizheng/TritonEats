import { db } from "../firebaseConfig";
import { doc, getDoc, setDoc, updateDoc, collection, getCountFromServer, where, query, getDocs } from "firebase/firestore";
import { dishItem } from "../Menu/types";

export const findDish = async (dish_name: string) => {
    const docRef = doc(db, "dishes", dish_name);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        throw new Error("No such dish!");
    }
}

export const updateDishDB = async (updatedDish: dishItem) => {
    const dishRef = doc(db, "dishes", updatedDish.food_name);
    await updateDoc(dishRef, updatedDish);
};

export const getId = async () => {

    const collectionRef = collection(db, "dishes");
    const snapshot = await getCountFromServer(collectionRef);
    return snapshot.data().count;

}

export const getIdByName = async (newDish: dishItem) => {

    const dish_name = newDish.food_name;
    
    const collectionRef = collection(db, "dishes");
    // find the document with the right name property
    const q = query(collectionRef, where(newDish.food_name, "==", dish_name));
    const snapshot = await getDocs(q);
    
    if(snapshot.size === 0) {
        return (await getId()).toString();
    } else {
        for(const doc of snapshot.docs) {
            if(doc.data().dining_hall) {
                return doc.id.toString();
            }
        }
        return (await getId()).toString();
    }
    
}

export const addDishToDB = async (newDish: dishItem) => {

    const dish_id = await getIdByName(newDish);
    newDish.food_id = dish_id;
    console.log("Adding dish with id:", dish_id);
    const dishRef = doc(db, "dishes", dish_id);

    if((await getDoc(dishRef)).exists()) {
        console.log("Dish already exists!");
        await updateDoc(dishRef, newDish);
    } else {
        console.log("Adding new dish to database");
        await setDoc(dishRef, newDish);  
    }

};

export const fetchAllDishes = async () => {
    const collectionRef = collection(db, "dishes");
    const snapshot = await getDocs(collectionRef);
    let dishes = <dishItem[]> [];
    snapshot.forEach(doc => {
        dishes.push(<dishItem> doc.data());
    });
    return dishes;
}