import express from "express";
import { addDishToDB, fetchDishDetails, updateDishDB } from "./dishes";
import { fetchReviews, updateReviewDB } from "./reviews";
import { dishItem } from "../Menu/types";

export async function createDishDetailsEndpoints(app: any) {

    // Fetch the dish with food_id
    app.get("/api/dishes/:dish_id", async (req:any, res: any) => {
        try {
            const dish = await fetchDishDetails(req.params.dish_id);
            res.json(dish);
        } catch (err: unknown) {
                if (err instanceof Error) {
                    res.status(500).send(err.message);
                } else {
                    res.status(500).send("An unknown error occurred.");
                }
        }
    });

    // fetch the reviews associated with the dish with dish_id
    app.get("/api/dishes/:dish_id/reviews", async (req:any, res: any) => {
        try {
            const reviews = await fetchReviews(req.params.dish_id);
            res.json(reviews);
        } catch (err: unknown) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            } else {
                res.status(500).send("An unknown error occurred.");
            }
        }
    });

    // Add a review to the document, and modify the dishItem associated with it
    app.post("/api/dishes/:dish_id/review", async (req:any, res: any) => {
        try {
            const { updatedDish, reviewData } = req.body;

            await updateDishDB(updatedDish);

            await updateReviewDB(reviewData);

            res.status(200).json({ message: "Dish updated and review added!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to update dish or add review" });
        }
    });

    // Add a dish 
    app.post("/api/dishes", async (req: any, res: any) => {
        try {
            const newDish: dishItem = req.body; 
    
            await addDishToDB(newDish);
            res.status(201).send("Dish added successfully!");
        } catch (err) {
            console.error("Error adding dish: ", err);
            res.status(500).send("Error adding dish");
        }
    });
}