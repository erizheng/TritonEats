export interface Review {
    datetime: Date;
    food_id: number;
    img: string;
    food_name: string;
    cost: number;
    location: string;
    rating: number;
    review_text: string;

    recommend: boolean;
    like: boolean; 
    //reviewer_id: number; ---> When we include user accounts, add this to track who reviews what
}