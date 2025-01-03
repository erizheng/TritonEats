import { Request, Response } from "express";

import { createDishEndpoints } from "./Menu/menu-endpoints";
import { createLocationEndpoints } from "./location/location-endpoints";
import { dishes } from "./Menu/constants";
import './firebaseConfig'; 
import { createDishDetailsEndpoints } from "./dish-details/dish-information-endpoints";
import { populateDatabase } from "./Menu/menu-utils";


const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Root endpoint to get test if the server is running
app.get("/", (req: Request, res: Response) => {
  res.send({ "data": "Hello, TypeScript Express!" });
  res.status(200);
});

// create Endpoints
createDishEndpoints(app);
createLocationEndpoints(app);
createDishDetailsEndpoints(app);