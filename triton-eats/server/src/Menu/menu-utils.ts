import { dishItem } from "./types";
import { Request, Response } from "express";

export function getDishes(req: Request, res: Response, dishes: dishItem[]) {
    res.status(200).send({ "data": dishes });
}