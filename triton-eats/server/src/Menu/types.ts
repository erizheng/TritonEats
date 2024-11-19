
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

export enum DiningHalls {

    sixtyfour = "64degrees",
    cafeventanas = "cafeventanas",
    foodworx = "foodworx",
    ovt = "ovt",
    pines = "pines",
    canyonvista = "canyonvista",

}

export interface location {
    name: string;
    dining_hall: DiningHalls;
    location_id: number;
}

