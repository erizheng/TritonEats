import { getDistance, getAllDistances } from "./location-utils";
import { Coordinates } from "./location-types";

export function createLocationEndpoints(app: any) {
    app.get("/location", (req: any, res: any) => {
        const position: Coordinates = { lat: req.query.lat, lng: req.query.lng };
        const distances = getAllDistances(position);
        res.json(distances);
    });

    app.get("/location/:hall", (req: any, res: any) => {
        const position: Coordinates = { lat: req.query.lat, lng: req.query.lng };
        const distance = getDistance(position, req.params.hall);
        res.json({ distance });
    });
}