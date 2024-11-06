import { getDishes } from "./menu-utils";
import { Request, Response } from 'express';

export function createExpenseEndpoints(app: any, expenses: any) {

    // Get all dishes
    app.get("/dishes", (req: Request, res: Response) => {

        getDishes(req, res, expenses);

    });

}