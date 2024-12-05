import { db } from "../firebaseConfig";
import { doc, getDoc, setDoc, updateDoc, collection, getCountFromServer, where, query, getDocs, deleteDoc } from "firebase/firestore";
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
    return snapshot.data().count + 1;

}

export const getIdByName = async (newDish: dishItem) => {

    const dish_name = newDish.food_name;
    console.log("Finding dish with name:", dish_name);
    const collectionRef = collection(db, "dishes");
    // find the document with the right name property
    const q = query(collectionRef, where(newDish.food_name, "==", dish_name));
    const snapshot = await getDocs(q);
    
    if(snapshot.size === 0) {
        console.log("No dish with that name found");
        return (await getId()).toString();
    } else {
        for(const doc of snapshot.docs) {
            console.log(doc.data());
            if(doc.data().location.dining_hall == newDish.location.dining_hall) {
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
    console.log("Allergens:", newDish.allergens);
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

export const deleteDish = async (dish_id: string) => {
    const dishRef = doc(db, "dishes", dish_id);
    await deleteDoc(dishRef);
}

export const deleteInvalidDishes = async () => {
    const collectionRef = collection(db, "dishes");
    const q = query(collectionRef, where("img", "==", "/images/placeHolderImage.png"));
    const snapshot = await getDocs(q);

    snapshot.forEach(async doc => {

        console.log("Deleting dish with id:", doc.id);

        await deleteDish(doc.id);
    });
}