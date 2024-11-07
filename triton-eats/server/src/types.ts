export enum DiningHalls {

    sixtyfour = "64 Degrees",
    cafeventanas = "Cafe Ventanas",
    foodworx = "Foodworx",
    ovt = "Oceanview Terrace",
    pines = "Pines",
    roots = "Roots",

}

export interface MenuItem {
    name: string;
    price: Number;
    description: string;
    diningHall: DiningHalls;
    restaurant: string;
}