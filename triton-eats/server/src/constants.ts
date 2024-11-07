import { DiningHalls } from "./types";

export const HDHEndpoints: { [key in DiningHalls]: string } = {

    [DiningHalls.sixtyfour]: "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/Venue_V3?locId=64&subLoc=00&locDetID=18&dayNum=0",
    [DiningHalls.cafeventanas]: "https://hdh.ucsd.edu/DiningMenus/default.aspx?i=CV",
    [DiningHalls.foodworx]: "https://hdh.ucsd.edu/DiningMenus/default.aspx?i=FW",
    [DiningHalls.ovt]: "https://hdh.ucsd.edu/DiningMenus/default.aspx?i=OV",
    [DiningHalls.pines]: "https://hdh.ucsd.edu/DiningMenus/default.aspx?i=PN",
    [DiningHalls.roots]: "https://hdh.ucsd.edu/DiningMenus/default.aspx?i=RT",

};