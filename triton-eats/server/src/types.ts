export enum DiningHalls {

    sixtyfour = "64degrees",
    cafeventanas = "cafeventanas",
    foodworx = "foodworx",
    ovt = "ovt",
    pines = "pines",
    canyonvista = "canyonvista",

}

export interface MenuItem {
    name: string;
    price: Number;
    description: string;
    diningHall: DiningHalls;
    restaurant: string;
}