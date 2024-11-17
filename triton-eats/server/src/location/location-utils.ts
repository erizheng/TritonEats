import { diningHallCoordinates, EarthRadius } from "./location-constants";
import { DiningHalls } from "../Menu/types";
import { Coordinates } from "./location-types";

function getCoords(diningHall: DiningHalls) {
    return diningHallCoordinates[diningHall];
}

function deg2rad(deg: number) {
    return deg * (Math.PI / 180);
}

export function getDistance(position: Coordinates, diningHall: DiningHalls) {
    const coords = getCoords(diningHall);
    let dLat = deg2rad(coords.lat - position.lat);
    let dLng = deg2rad(coords.lng - position.lng);
    // Haversine formula
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(position.lat)) * Math.cos(deg2rad(coords.lat)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EarthRadius * c;
}

export function getAllDistances(position: Coordinates) {
    let distances: { [hall: string]: number } = {};
    for (let hall in diningHallCoordinates) {
        distances[hall] = getDistance(position, hall as DiningHalls);
    }
    return distances;
}