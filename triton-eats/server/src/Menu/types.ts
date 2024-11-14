
export type dishItem = {
    food_id: number;
    img: string;
    food_name: string;
    cost: number;
    location: location;
    allergens: string[];
    rating: number;
    description: string;
    
    numReviews: number;
    numRecommend: number;
};


export interface location {
    name: string;
    location_id: number;
}

