import { dishItem } from "./types";
import { Request, Response } from "express";

export function createDishesServer(req: Request, res: Response, expenses: dishItem[]) {
    const { food_id, img, food_name, cost, location, allergens, rating,description } = req.body;

    if (!food_id || !img || !food_name || !cost || !location || !allergens || !rating || !description) {
        return res.status(400).send({ error: "Missing required fields" });
    }

    const newDish: dishItem = {
        food_id, img, food_name, cost, location, allergens, rating, description,
        numReviews: 0,
        numRecommend: 0,
    };

    expenses.push(newDish);
    res.status(201).send(newDish);
}


export function getDishes(req: Request, res: Response, dishes: dishItem[]) {
    res.status(200).send({ "data": dishes });
}