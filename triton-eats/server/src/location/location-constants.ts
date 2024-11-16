import { Location } from './location-types';

export const EarthRadius = 6371; // Radius of the earth in km

export enum DiningHall {

    cafeventanas = "Cafe Ventanas",
    sixtyfourdegrees = "64 Degrees",
    bistro = "The Bistro",
    foodworx = "Foodworx",
    oceanviewterrace = "Oceanview Terrace",
    pines = "The Pines",
    sixth = "Sixth College",

}

export const diningHallCoordinates = {
    [DiningHall.cafeventanas]: <Location>{ lat: 32.8860357, lng: -117.2451489 },
    [DiningHall.sixtyfourdegrees]: <Location>{ lat: 32.8747504, lng: -117.244609 },
    [DiningHall.bistro]: <Location>{ lat: 32.8879461, lng: -117.2515962 },
    [DiningHall.foodworx]: <Location>{ lat: 32.8788014, lng: -117.2353099 },
    [DiningHall.oceanviewterrace]: <Location>{ lat: 32.8831082, lng: -117.2453417 },
    [DiningHall.pines]: <Location>{ lat: 32.878786, lng: -117.2473873 },
    [DiningHall.sixth]: <Location>{ lat: 32.8800962, lng: -117.244825 },
};