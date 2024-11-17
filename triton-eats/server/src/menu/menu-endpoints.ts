import { fetchMenuItems, fetchAllMenuItems } from "./menu-utils";
import { DiningHalls } from "./types";

export async function createMenuEndpoints(app: any) {
    
    app.get('/dishes/:diningHall', async (req: any, res: any) => {
        const diningHall = req.params.diningHall;
        if (!Object.values(DiningHalls).includes(diningHall)) {
            res.status(400).send('Invalid dining hall');
            return;
        }
        res.send(await fetchMenuItems(diningHall));
    });

    app.get('/dishes', async (req: any, res: any) => {
        res.send(await fetchAllMenuItems());
    });

}