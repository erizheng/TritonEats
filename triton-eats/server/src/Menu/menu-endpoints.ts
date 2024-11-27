import { fetchAllDishes } from "./menu-database";
import { DiningHalls } from "./types";

export async function createDishEndpoints(app: any) {

    let items = await fetchAllDishes();
    
    app.get('/dishes/:diningHall', async (req: any, res: any) => {
        const diningHall = req.params.diningHall;
        if (!Object.values(DiningHalls).includes(diningHall)) {
            res.status(400).send('Invalid dining hall');
            return;
        }
        res.send(items.filter((item) => item.location.dining_hall === diningHall));
    });

    app.get('/dishes', async (req: any, res: any) => {
        res.send(items);
    });

}