
export type dishItem = {
    food_id: string;
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
    bistro = "bistro",
    sixth = "sixth"

}

export interface location {
    name: string;
    dining_hall: DiningHalls;
    location_id: number;
}


export interface Review {
    datetime: Date;
    food_id: string;
    img: string;
    food_name: string;
    cost: number;
    location: location;
    rating: number;
    review_text: string;
    recommend: boolean;

    //reviewer_id: number; ---> When we include user accounts, add this to track who reviews what
}

export enum Allergens {

    vegetarian = "Vegetarian",
    vegan = "Vegan",
    dairy = "Contains Dairy",
    soy = "Contains Soy",
    eggs = "Contains Eggs",
    wheat = "Contains Wheat",
    gluten = "Contains Gluten",
    sesame = "Contains Sesame",
    fish = "Contains Fish",
    shellfish = "Contains Shellfish",
    treenuts = "Contains TreeNuts",
    
}