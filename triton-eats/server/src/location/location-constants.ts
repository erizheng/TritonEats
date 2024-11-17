import { Coordinates } from './location-types';
import { DiningHalls } from '../Menu/types';

export const EarthRadius = 6371; // Radius of the earth in km

export const diningHallCoordinates: { [key in DiningHalls]: Coordinates } = {

    [DiningHalls.cafeventanas]: <Coordinates>{ lat: 32.8860357, lng: -117.2451489 },
    [DiningHalls.sixtyfour]: <Coordinates>{ lat: 32.8747504, lng: -117.244609 },
    //[DiningHalls.bistro]: <Coordinates>{ lat: 32.8879461, lng: -117.2515962 },
    [DiningHalls.foodworx]: <Coordinates>{ lat: 32.8788014, lng: -117.2353099 },
    [DiningHalls.ovt]: <Coordinates>{ lat: 32.8831082, lng: -117.2453417 },
    [DiningHalls.pines]: <Coordinates>{ lat: 32.878786, lng: -117.2473873 },
    //[DiningHalls.sixth]: <Coordinates>{ lat: 32.8800962, lng: -117.244825 },
    [DiningHalls.canyonvista]: <Coordinates>{ lat: 32.879324, lng: -117.236798 },

};