export interface Review {
    datetime: Date;
    food_id: number;
    img: string;
    food_name: string;
    cost: number;
    location: string;
    rating: number;
    review_text: string;
}

// Mocked Review Item
export const review: Review = {
    datetime: new Date(),             
    food_id: 1,                       
    img: "img.png",                   
    food_name: "Spaghetti",          
    cost: 12.99,                     
    location: "UCSD Cafeteria",     
    rating: 4.5,           
    review_text: "asdfasdfasdfasdfasdf",  
           
};