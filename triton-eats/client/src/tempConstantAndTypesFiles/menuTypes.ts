
export type dishItem = {
    food_id: number;
    img: string;
    food_name: string;
    cost: number;
    location: location;
    allergens: string[];
    rating: number;
    // reviews: Reviews;
};

export interface location {
    name: string;
    location_id: number;
};

export type FilterChecks = { 
    name: string; 
    checked: boolean;
};