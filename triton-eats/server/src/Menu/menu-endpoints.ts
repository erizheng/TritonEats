import { getDishes, createDishesServer} from "./menu-utils";
import { Request, Response } from 'express';

export function createDishEndpoints(app: any, dishes: any) {
    // Create a new dish
    app.post("/dishes", (req: Request, res: Response) => {

        createDishesServer(req, res, dishes);

    });

    // Get all dishes
    app.get("/dishes", (req: Request, res: Response) => {

        getDishes(req, res, dishes);

    });

}