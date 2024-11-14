import { DiningHalls } from "./types";

export const HDHEndpoints: { [key in DiningHalls]: string } = {

    [DiningHalls.sixtyfour]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=64&subLoc=00&locDetID=18&dayNum=0",
    [DiningHalls.cafeventanas]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=18&subLocNum=00&locDetID=8&dayNum=0",
    [DiningHalls.foodworx]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=11&subLocNum=00&locDetID=6&dayNum=0",
    [DiningHalls.ovt]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=05&subLocNum=00&locDetID=4&dayNum=0",
    [DiningHalls.pines]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=01&subLocNum=00&locDetID=1&dayNum=0",
    [DiningHalls.canyonvista]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=24&subLocNum=00&locDetID=11&dayNum=0",

};