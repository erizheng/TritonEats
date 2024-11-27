import { DiningHalls } from "../types/menuTypes";

export const API_BASE_URL = "http://localhost:8080";

export const dummyCheckList1 = [
    { name: "cafeventanas", checked: true },
    { name: "pines", checked: true },
    { name: "ovt", checked: true },
    { name: "64degrees", checked: true },
    { name: "foodworx", checked: true },
    { name: "canyonvista", checked: true },
 ]
 export const dummyCheckList2 = [
    { name: "Diary", checked: false },
    { name: "Nuts", checked: false },
    { name: "Other", checked: false },
 ]


 export const mockDishes = [
   { food_id: 0, img: "images/placeHolderImage.png", 
       food_name: "a", cost: 1, location: {name:"Revelle", dining_hall: DiningHalls.sixtyfour, location_id: 1}, 
       allergens: [], rating: 4, description: "nada", numReviews: 0, numRecommend: 0},

   { food_id: 1, img: "images/placeHolderImage.png", 
       food_name: "b", cost: 2, location: {name:"Muir", dining_hall: DiningHalls.pines, location_id: 2},
        allergens: [], rating: 5, description: "nada", numReviews: 0, numRecommend: 0 },

   { food_id: 2, img: "images/placeHolderImage.png", 
       food_name: "c", cost: 3, location: {name:"Marshall", dining_hall: DiningHalls.ovt, location_id: 3},
        allergens: [], rating: 3, description: "nada", numReviews: 0, numRecommend: 0 },

   { food_id: 3, img: "images/placeHolderImage.png", 
       food_name: "d", cost: 4, location: {name:"Warren", dining_hall: DiningHalls.canyonvista, location_id: 4},
        allergens: [], rating: 1, description: "nada", numReviews: 0, numRecommend: 0 },

   { food_id: 4, img: "images/placeHolderImage.png", 
       food_name: "e", cost: 5, location: {name:"Eleanor Roosevelt", dining_hall: DiningHalls.canyonvista, location_id: 5},
        allergens: [], rating: 0, description: "nada", numReviews: 0, numRecommend: 0 },

   { food_id: 5, img: "images/placeHolderImage.png", 
       food_name: "f", cost: 6, location: {name:"Sixth", dining_hall: DiningHalls.pines, location_id: 6},
        allergens: [], rating: 4.4, description: "nada", numReviews: 0, numRecommend: 0 },

   { food_id: 6, img: "images/placeHolderImage.png", 
       food_name: "g", cost: 7, location: {name:"Seventh", dining_hall: DiningHalls.cafeventanas, location_id: 7},
        allergens: [], rating: 2, description: "nada", numReviews: 0, numRecommend: 0 },

   { food_id: 7, img: "images/placeHolderImage.png", 
       food_name: "h", cost: 8, location: {name:"Eighth", dining_hall: DiningHalls.sixtyfour, location_id: 8},
        allergens: [], rating: 3.8, description: "nada", numReviews: 0, numRecommend: 0 },

   { food_id: 8, img: "images/placeHolderImage.png", 
       food_name: "i", cost: 9, location: {name:"Pepper Canyon", dining_hall: DiningHalls.foodworx, location_id: 9},
        allergens: [], rating: 1.3, description: "nada", numReviews: 0, numRecommend: 0 },

   { food_id: 9, img: "./images/placeHolderImage.png", 
       food_name: "j", cost: 10, location: {name:"Club Med", dining_hall: DiningHalls.foodworx, location_id: 10},
        allergens: [], rating: 0.2, description: "nada", numReviews: 0, numRecommend: 0 },

   { food_id: 10, img: "./images/placeHolderImage.png", 
       food_name: "k", cost: 11, location: {name:"Other", dining_hall: DiningHalls.foodworx, location_id: 11},
        allergens: [], rating: 4.9, description: "nada", numReviews: 0, numRecommend: 0 },

   { food_id: 11, img: "./images/placeHolderImage.png", 
       food_name: "l", cost: 12, location: {name:"Revelle", dining_hall: DiningHalls.sixtyfour, location_id: 1},
        allergens: [], rating: 2.7, description: "nada", numReviews: 0, numRecommend: 0 },


];