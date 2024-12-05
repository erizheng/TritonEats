import { DiningHalls } from "./types";

export const dishes = [
    { food_id: 0, img: "images/placeHolderImage.png", 
        food_name: "a", cost: 1, location: {name:"Revelle", location_id: 1}, allergens: {}, rating: 4 },

    { food_id: 1, img: "images/placeHolderImage.png", 
        food_name: "b", cost: 2, location: {name:"Muir", location_id: 2}, allergens: {}, rating: 5 },

    { food_id: 2, img: "images/placeHolderImage.png", 
        food_name: "c", cost: 3, location: {name:"Marshall", location_id: 3}, allergens: {}, rating: 3 },

    { food_id: 3, img: "images/placeHolderImage.png", 
        food_name: "d", cost: 4, location: {name:"Warren", location_id: 4}, allergens: {}, rating: 1 },

    { food_id: 4, img: "images/placeHolderImage.png", 
        food_name: "e", cost: 5, location: {name:"Eleanor Roosevelt", location_id: 5}, allergens: {}, rating: 0 },

    { food_id: 5, img: "images/placeHolderImage.png", 
        food_name: "f", cost: 6, location: {name:"Sixth", location_id: 6}, allergens: {}, rating: 4.4 },

    { food_id: 6, img: "images/placeHolderImage.png", 
        food_name: "g", cost: 7, location: {name:"Seventh", location_id: 7}, allergens: {}, rating: 2 },

    { food_id: 7, img: "images/placeHolderImage.png", 
        food_name: "h", cost: 8, location: {name:"Eighth", location_id: 8}, allergens: {}, rating: 3.8 },

    { food_id: 8, img: "images/placeHolderImage.png", 
        food_name: "i", cost: 9, location: {name:"Pepper Canyon", location_id: 9}, allergens: {}, rating: 1.3 },

    { food_id: 9, img: "./images/placeHolderImage.png", 
        food_name: "j", cost: 10, location: {name:"Club Med", location_id: 10}, allergens: {}, rating: 0.2 },

    { food_id: 10, img: "./images/placeHolderImage.png", 
        food_name: "k", cost: 11, location: {name:"Other", location_id: 11}, allergens: {}, rating: 4.9 },

    { food_id: 11, img: "./images/placeHolderImage.png", 
        food_name: "l", cost: 12, location: {name:"Revelle", location_id: 1}, allergens: {}, rating: 2.7 },


];

export const HDHEndpoints: { [key in DiningHalls]: string } = {

    [DiningHalls.sixtyfour]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=64&subLoc=00&locDetID=18&dayNum=0",
    [DiningHalls.cafeventanas]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=18&subLocNum=00&locDetID=8&dayNum=0",
    [DiningHalls.foodworx]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=11&subLocNum=00&locDetID=6&dayNum=0",
    [DiningHalls.ovt]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=05&subLocNum=00&locDetID=4&dayNum=0",
    [DiningHalls.pines]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=01&subLocNum=00&locDetID=1&dayNum=0",
    [DiningHalls.canyonvista]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=24&subLocNum=00&locDetID=11&dayNum=0",
    [DiningHalls.bistro]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=27&subLocNum=00&locDetID=13&dayNum=0",
    [DiningHalls.sixth]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=37&subLocNum=00&locDetID=24&dayNum=0"

};

export const LocationImages: { [key in DiningHalls]: string } = {

    [DiningHalls.sixtyfour]: "https://www.studioearchitects.com/wp-content/uploads/2016/05/UCSD-64-Degrees-33.jpg",
    [DiningHalls.cafeventanas]: "https://live.staticflickr.com/8345/8248473348_3048ef1673_c.jpg",
    [DiningHalls.foodworx]: "https://hdh-web.ucsd.edu/images/Dining/foodworx/facility-Foodworx.jpg",
    [DiningHalls.ovt]: "https://live.staticflickr.com/8480/8249527389_419ca01b6f_c.jpg",
    [DiningHalls.pines]: "https://media.cbs8.com/assets/KFMB/images/b39e1eda-15b0-4aab-903d-30fa4b58fd26/b39e1eda-15b0-4aab-903d-30fa4b58fd26_1140x641.jpeg",
    [DiningHalls.canyonvista]: "https://lgdusa.com/images/gallery/UCSD%20Canyon%20Vista/UCSD_Canyon_Vista_Dining_Hall_Renovation_N35.jpg",
    [DiningHalls.bistro]: "https://live.staticflickr.com/8195/8080265876_c446890366_c.jpg",
    [DiningHalls.sixth]: "https://images.rsmdesign.com/f19b4ab1-6b34-4a8e-826e-18f1b546d0e2.jpg"

};