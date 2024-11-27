//import { DiningHalls } from "../types/menuTypes";

export const API_BASE_URL = "http://localhost:8080";

export const dummyCheckList1 = [
    { name: "cafeventanas", checked: true },
    { name: "pines", checked: true },
    { name: "ovt", checked: true },
    { name: "64degrees", checked: true },
    { name: "foodworx", checked: true },
    { name: "canyonvista", checked: true },
 ]
 export const dummyCheckList2 = [
    { name: "Diary", checked: false },
    { name: "Nuts", checked: false },
    { name: "Other", checked: false },
 ]


 export const mockDishes = [{ food_id: '0', img: "images/placeHolderImage.png", 
    food_name: "a", cost: 1, location: {name:"Revelle", dining_hall: 'sixtyfour', location_id: 1}, 
    allergens: [], rating: 4, description: "nada", numReviews: 0, numRecommend: 0},

{ food_id: '1', img: "images/placeHolderImage.png", 
    food_name: "b", cost: 2, location: {name:"Muir", dining_hall: 'pines', location_id: 2},
     allergens: [], rating: 5, description: "nada", numReviews: 0, numRecommend: 0 },

{ food_id: '2', img: "images/placeHolderImage.png", 
    food_name: "c", cost: 3, location: {name:"Marshall", dining_hall: 'ovt', location_id: 3},
     allergens: [], rating: 3, description: "nada", numReviews: 0, numRecommend: 0 },

{ food_id: '3', img: "images/placeHolderImage.png", 
    food_name: "d", cost: 4, location: {name:"Warren", dining_hall: 'canyonvista', location_id: 4},
     allergens: [], rating: 1, description: "nada", numReviews: 0, numRecommend: 0 },

{ food_id: '4', img: "images/placeHolderImage.png", 
    food_name: "e", cost: 5, location: {name:"Eleanor Roosevelt", dining_hall: 'canyonvista', location_id: 5},
     allergens: [], rating: 0, description: "nada", numReviews: 0, numRecommend: 0 },

{ food_id: '5', img: "images/placeHolderImage.png", 
    food_name: "f", cost: 6, location: {name:"Sixth", dining_hall: 'pines', location_id: 6},
     allergens: [], rating: 4.4, description: "nada", numReviews: 0, numRecommend: 0 },

{ food_id: '6', img: "images/placeHolderImage.png", 
    food_name: "g", cost: 7, location: {name:"Seventh", dining_hall: 'cafeventanas', location_id: 7},
     allergens: [], rating: 2, description: "nada", numReviews: 0, numRecommend: 0 },

{ food_id: '7', img: "images/placeHolderImage.png", 
    food_name: "h", cost: 8, location: {name:"Eighth", dining_hall: 'sixtyfour', location_id: 8},
     allergens: [], rating: 3.8, description: "nada", numReviews: 0, numRecommend: 0 },

{ food_id: '8', img: "images/placeHolderImage.png", 
    food_name: "i", cost: 9, location: {name:"Pepper Canyon", dining_hall: 'foodworx', location_id: 9},
     allergens: [], rating: 1.3, description: "nada", numReviews: 0, numRecommend: 0 },

{ food_id: '9', img: "./images/placeHolderImage.png", 
    food_name: "j", cost: 10, location: {name:"Club Med", dining_hall: 'foodworx', location_id: 10},
     allergens: [], rating: 0.2, description: "nada", numReviews: 0, numRecommend: 0 },

{ food_id: "10", img: "./images/placeHolderImage.png", 
    food_name: "k", cost: 11, location: {name:"Other", dining_hall: 'foodworx', location_id: 11},
     allergens: [], rating: 4.9, description: "nada", numReviews: 0, numRecommend: 0 },

{ food_id: '11', img: "./images/placeHolderImage.png", 
    food_name: "l", cost: 12, location: {name:"Revelle", dining_hall: 'sixtyfour', location_id: 1},
     allergens: [], rating: 2.7, description: "nada", numReviews: 0, numRecommend: 0 },];



//  export const mockDishes = [
//     {
//       description: "2 Slices Pork Bacon",
//       img: "/images/placeHolderImage.png",
//       numReviews: 2,
//       allergens: [],
//       numRecommend: 2,
//       food_id: "1",
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       rating: 4,
//       food_name: "Bacon",
//       cost: 3.25
//     },
//     {
//       cost: 1.5,
//       food_name: "Toast",
//       food_id: "10",
//       rating: 5,
//       description: "Your choice of toasted bread",
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       },
//       allergens: [],
//       numRecommend: 0,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       numRecommend: 0,
//       description: "Grilled seasoned kabocha squash drizzled with honey sriracha sauce",
//       food_name: "Honey Sriracha Grilled Kabocha",
//       rating: 5,
//       cost: 3.75,
//       food_id: "100",
//       numReviews: 0,
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "TritonGrill"
//       },
//       img: "/images/placeHolderImage.png",
//       allergens: []
//     },
//     {
//       food_name: "Onion Rings",
//       img: "/images/placeHolderImage.png",
//       food_id: "101",
//       rating: 5,
//       location: {
//         dining_hall: "64degrees",
//         name: "TritonGrill",
//         location_id: 0
//       },
//       description: "Crispy battered fried onion rings",
//       cost: 5,
//       allergens: [],
//       numRecommend: 0,
//       numReviews: 0
//     },
//     {
//       food_name: "Beyond Sausage Roll",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       description: "Vegetarian Beyond Italian sausage, sauteed peppers and onions, and house BBQ sauce on a hoagie roll",
//       allergens: [],
//       cost: 9.75,
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "TritonGrill"
//       },
//       rating: 5,
//       food_id: "102",
//       numRecommend: 0
//     },
//     {
//       allergens: [],
//       numRecommend: 0,
//       numReviews: 0,
//       cost: 9,
//       img: "/images/placeHolderImage.png",
//       description: "Brioche bun with a crispy fried chicken patty, chipotle pesto aioli, swiss cheese and roasted tomato",
//       food_name: "Chipotle Pesto Chicken Sandwich",
//       rating: 5,
//       food_id: "103",
//       location: {
//         dining_hall: "64degrees",
//         name: "TritonGrill",
//         location_id: 0
//       }
//     },
//     {
//       rating: 5,
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "TritonGrill"
//       },
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       description: "Crispy breaded chicken breast with pickles, spicy aioli and tomato on a brioche bun",
//       food_id: "104",
//       numRecommend: 0,
//       cost: 9,
//       allergens: [],
//       food_name: "Crispy Chicken Sandwich"
//     },
//     {
//       description: "Crispy battered fish filets and french fries served with roasted garlic aioli and lemon wedge",
//       rating: 5,
//       allergens: [],
//       food_id: "105",
//       location: {
//         location_id: 0,
//         name: "TritonGrill",
//         dining_hall: "64degrees"
//       },
//       numRecommend: 0,
//       food_name: "Fish and Chips",
//       cost: 9,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0
//     },
//     {
//       description: "Brioche bun with roasted garlic aioli, seasonal grilled fish fillet, savory burger seasoning, orange jalapeno broccoli slaw, and tomato confit",
//       numRecommend: 0,
//       food_name: "Grilled Fish Sandwich",
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       food_id: "106",
//       rating: 5,
//       cost: 12,
//       numReviews: 0,
//       location: {
//         location_id: 0,
//         name: "TritonGrill",
//         dining_hall: "64degrees"
//       }
//     },
//     {
//       description: "Chicken wings tossed in garlic parmesan sauce, served with french fries",
//       food_id: "107",
//       food_name: "Parmesan Garlic Wing Basket",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       cost: 11,
//       rating: 5,
//       allergens: [],
//       numRecommend: 0,
//       location: {
//         dining_hall: "64degrees",
//         name: "TritonGrill",
//         location_id: 0
//       }
//     },
//     {
//       numReviews: 0,
//       food_id: "108",
//       allergens: [],
//       cost: 12.5,
//       numRecommend: 0,
//       description: "Toasted rye bread with a halal smashed beef patty, melted swiss cheese, tangy sauce, and bacon jam",
//       rating: 5,
//       food_name: "Patty Melt",
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "TritonGrill"
//       }
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       food_id: "109",
//       numReviews: 0,
//       cost: 6.5,
//       description: "Hot dog bun with all beef hot dog, pepper jack cheese, brown mustard aioli and sauteed peppers and onions",
//       food_name: "Pepperjack Dog",
//       allergens: [],
//       location: {
//         location_id: 0,
//         name: "TritonGrill",
//         dining_hall: "64degrees"
//       },
//       numRecommend: 0
//     },
//     {
//       numReviews: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       cost: 3.5,
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       food_id: "11",
//       food_name: "Vegan Scramble 'JUST' Eggs",
//       allergens: [],
//       description: "Vegan scrambled 'JUST' eggs",
//       numRecommend: 0
//     },
//     {
//       food_id: "110",
//       location: {
//         name: "TritonGrill",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       food_name: "Plant Based Crispy Chickn Sandwich",
//       numReviews: 0,
//       description: "Crispy breaded beyond chickn with pickles and vegan chipotle aioli on a bun",
//       cost: 9,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       rating: 5
//     },
//     {
//       numReviews: 0,
//       description: "Grilled herb buttered sourdough with pepper jack, provolone, and cheddar cheeses, pickles and garlic aioli",
//       location: {
//         name: "TritonGrill",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       cost: 6,
//       img: "/images/placeHolderImage.png",
//       food_name: "Three Cheese Grilled Cheese",
//       numRecommend: 0,
//       rating: 5,
//       food_id: "111",
//       allergens: []
//     },
//     {
//       food_name: "Triton Cheeseburger",
//       location: {
//         dining_hall: "64degrees",
//         name: "TritonGrill",
//         location_id: 0
//       },
//       numRecommend: 0,
//       description: "Brioche bun with tangy sauce, a smashed halal beef patty, American cheese, lettuce, tomato and pickles",
//       food_id: "112",
//       cost: 9,
//       rating: 5,
//       allergens: [],
//       numReviews: 0,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       allergens: [],
//       location: {
//         name: "TritonGrill",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       cost: 13,
//       img: "/images/placeHolderImage.png",
//       food_id: "113",
//       numRecommend: 0,
//       description: "Brioche bun with tangy sauce, two smashed halal beef patties, two slices of American cheese, lettuce, tomato and pickles",
//       numReviews: 0,
//       food_name: "Triton Double Cheeseburger",
//       rating: 5
//     },
//     {
//       description: "Grilled beef hot dog served on a bun. ",
//       allergens: [],
//       numRecommend: 0,
//       food_id: "114",
//       location: {
//         location_id: 0,
//         name: "TritonGrill",
//         dining_hall: "64degrees"
//       },
//       food_name: "Triton Hot Dog",
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       cost: 5,
//       numReviews: 0
//     },
//     {
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "TritonGrill"
//       },
//       rating: 5,
//       cost: 2.25,
//       allergens: [],
//       food_name: "Chocolate Ice Cream Cake Cone",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_id: "115",
//       numRecommend: 0,
//       description: "Chocolate soft serve ice cream in a small cake cone"
//     },
//     {
//       food_name: "Chocolate Ice Cream Shake",
//       numReviews: 0,
//       description: "Chocolate soft serve ice cream shake",
//       food_id: "116",
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "TritonGrill"
//       },
//       numRecommend: 0,
//       allergens: [],
//       cost: 5,
//       img: "/images/placeHolderImage.png",
//       rating: 5
//     },
//     {
//       cost: 3.5,
//       description: "Chocolate soft serve ice cream in a waffle cone",
//       location: {
//         location_id: 0,
//         name: "TritonGrill",
//         dining_hall: "64degrees"
//       },
//       rating: 5,
//       food_id: "117",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       numRecommend: 0,
//       food_name: "Chocolate Waffle Cone"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_id: "118",
//       cost: 6,
//       allergens: [],
//       description: "Vanilla soft serve blended with caramel, pumpkin spice and pumpkin filling topped with whipped cream and candied walnuts",
//       food_name: "Pumpkin Spice Milkshake",
//       rating: 5,
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "TritonGrill"
//       },
//       numRecommend: 0
//     },
//     {
//       allergens: [],
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       location: {
//         location_id: 0,
//         name: "TritonGrill",
//         dining_hall: "64degrees"
//       },
//       description: "Vanilla soft serve ice cream in a small cake cone",
//       food_id: "119",
//       numRecommend: 0,
//       cost: 2.25,
//       food_name: "Vanilla Ice Cream Cake Cone"
//     },
//     {
//       food_name: "Veggie Sausage",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       description: "Vegan veggie sausage.",
//       allergens: [],
//       rating: 5,
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       food_id: "12",
//       cost: 2,
//       numRecommend: 0
//     },
//     {
//       food_id: "120",
//       description: "Vanilla ice cream shake",
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       food_name: "Vanilla Ice Cream Shake",
//       numReviews: 0,
//       numRecommend: 0,
//       cost: 5,
//       location: {
//         name: "TritonGrill",
//         dining_hall: "64degrees",
//         location_id: 0
//       }
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       food_name: "Vanilla Waffle Cone",
//       description: "Vanilla soft serve ice cream in a waffle cone",
//       numRecommend: 0,
//       location: {
//         dining_hall: "64degrees",
//         name: "TritonGrill",
//         location_id: 0
//       },
//       numReviews: 0,
//       allergens: [],
//       food_id: "121",
//       cost: 3.5,
//       rating: 5
//     },
//     {
//       location: {
//         location_id: 0,
//         name: "TritonGrill",
//         dining_hall: "64degrees"
//       },
//       food_id: "122",
//       rating: 5,
//       food_name: "Beyond Beef Burger",
//       description: "Grilled beef patty.",
//       cost: 2,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       allergens: [],
//       numReviews: 0
//     },
//     {
//       location: {
//         name: "Umi",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       rating: 5,
//       numReviews: 0,
//       allergens: [],
//       description: "Sushi rice topped with albacore, lemongrass ponzu, and green onion. ",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       food_id: "123",
//       cost: 5,
//       food_name: "Albacore Nigiri"
//     },
//     {
//       description: "Sushi rice topped with hamachi, and green onions.",
//       numReviews: 0,
//       allergens: [],
//       numRecommend: 0,
//       food_name: "Hamachi Nigiri",
//       food_id: "124",
//       location: {
//         location_id: 0,
//         name: "Umi",
//         dining_hall: "64degrees"
//       },
//       img: "/images/placeHolderImage.png",
//       cost: 5,
//       rating: 5
//     },
//     {
//       rating: 5,
//       allergens: [],
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_name: "Hamachi Norigami",
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Umi"
//       },
//       food_id: "125",
//       description: "Hamachi sashimi with cucumber and avocado on sushi rice and nori",
//       cost: 6.5
//     },
//     {
//       location: {
//         name: "Umi",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       cost: 5,
//       description: "Sushi rice topped with mango, seasoned with citrus salt, and garnished with micro cilantro.",
//       numReviews: 0,
//       rating: 5,
//       allergens: [],
//       food_id: "126",
//       numRecommend: 0,
//       food_name: "Mango Nigiri",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       numRecommend: 0,
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Umi"
//       },
//       food_name: "Salmon Nigiri",
//       cost: 5,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_id: "127",
//       description: "Sushi rice topped with salmon, and lemongrass ponzu. ",
//       rating: 5,
//       allergens: []
//     },
//     {
//       description: "Salmon sashimi with with cucumber and avocado on sushi rice and nori",
//       rating: 5,
//       allergens: [],
//       cost: 6.5,
//       numRecommend: 0,
//       numReviews: 0,
//       food_name: "Salmon Norigami",
//       location: {
//         dining_hall: "64degrees",
//         name: "Umi",
//         location_id: 0
//       },
//       food_id: "128",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       numRecommend: 0,
//       allergens: [],
//       cost: 6.5,
//       img: "/images/placeHolderImage.png",
//       description: "Togarashi seared tuna with cucumber and avocado on sushi rice and nori",
//       food_name: "Seared Tuna Norigami",
//       rating: 5,
//       location: {
//         location_id: 0,
//         name: "Umi",
//         dining_hall: "64degrees"
//       },
//       numReviews: 0,
//       food_id: "129"
//     },
//     {
//       numReviews: 0,
//       cost: 8.5,
//       allergens: [],
//       food_name: "Bacon Breakfast Burrito",
//       description: "Scrambled eggs, refried beans, tater tots, bacon, pico de gallo, cheddar and jack cheese in a 12\" tortilla.",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       },
//       rating: 5,
//       food_id: "13"
//     },
//     {
//       food_id: "130",
//       description: "Mixed nigri box with 2 piece salmon, 2 piece albacore, and 1 piece mango",
//       rating: 5,
//       food_name: "Umi Mixed Nigiri",
//       numReviews: 0,
//       cost: 8,
//       location: {
//         dining_hall: "64degrees",
//         name: "Umi",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       numRecommend: 0
//     },
//     {
//       cost: 4.5,
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Umi"
//       },
//       numRecommend: 0,
//       allergens: [],
//       description: "Grilled asparagus and roasted shitake mushroom with cucumber and avocado on sushi rice and nori",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_id: "131",
//       rating: 5,
//       food_name: "Veggie Norigami"
//     },
//     {
//       food_name: "Albacore Roll",
//       cost: 9.5,
//       location: {
//         location_id: 0,
//         name: "Umi",
//         dining_hall: "64degrees"
//       },
//       img: "/images/placeHolderImage.png",
//       description: "Albacore mix, pickled carrots, cucumber, and daikon sprouts wrapped in rice and nori topped with sesame seeds",
//       numRecommend: 0,
//       numReviews: 0,
//       rating: 5,
//       food_id: "132",
//       allergens: []
//     },
//     {
//       food_name: "Rainbow Roll",
//       food_id: "133",
//       rating: 5,
//       location: {
//         name: "Umi",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       allergens: [],
//       description: "Krab, cucumber wrapped in rice and nori, topped  with avocado, salmon, seared ahi, hamachi",
//       numRecommend: 0,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       cost: 12
//     },
//     {
//       allergens: [],
//       food_id: "134",
//       rating: 5,
//       description: "Spicy tuna, cucumber, daikon sprouts wrapped in rice and nori, topped with salmon, sliced lemon, micro cilantro, and sesame seeds. ",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       food_name: "Salmon Trail Roll",
//       location: {
//         name: "Umi",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       cost: 14,
//       numRecommend: 0
//     },
//     {
//       food_id: "135",
//       description: "Spicy salmon, cucumber and daikon sprouts wrapped in rice and nori topped in sesame seeds",
//       rating: 5,
//       cost: 9.5,
//       allergens: [],
//       food_name: "Spicy Salmon Roll",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Umi"
//       },
//       numReviews: 0
//     },
//     {
//       description: "Spicy tuna, cucumber, avocado. Topped with micro cilantro, Bistro sauce, and chili crunch oil.",
//       allergens: [],
//       cost: 12.5,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       food_id: "136",
//       numReviews: 0,
//       food_name: "Spicy Tuna Tempura Shrimp Roll",
//       numRecommend: 0,
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Umi"
//       }
//     },
//     {
//       food_name: "Spiked Tuna",
//       img: "/images/placeHolderImage.png",
//       description: "Tempura shrimp, crab meat, cucumber wrapped in rice and nori, topped with seared tuna, avocado, citrus salt, shishito aioli, and crispy onions. ",
//       numReviews: 0,
//       food_id: "137",
//       rating: 5,
//       numRecommend: 0,
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Umi"
//       },
//       cost: 14.5,
//       allergens: []
//     },
//     {
//       location: {
//         name: "Umi",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       numRecommend: 0,
//       cost: 8.5,
//       food_id: "138",
//       img: "/images/placeHolderImage.png",
//       description: "Sweet potato, avocado, roasted shiitake and cucumbers wrapped in rice and nori topped with apricot miso and sesame seeds",
//       food_name: "Sweet Potato Tempura Roll",
//       numReviews: 0,
//       rating: 5,
//       allergens: []
//     },
//     {
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Umi"
//       },
//       allergens: [],
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       description: "Spicy tuna, tempura shrimp wrapped in rice and nori, topped with seared steak, tare sauce, shishito aioli, micro cilantro, and sesame seeds. ",
//       numRecommend: 0,
//       food_name: "Umi Roll",
//       food_id: "139",
//       cost: 12.5,
//       rating: 5
//     },
//     {
//       cost: 8.5,
//       numReviews: 0,
//       rating: 5,
//       food_name: "Bacon Green Chile Burrito",
//       food_id: "14",
//       numRecommend: 0,
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       },
//       description: "Breakfast burrito with bacon, refried beans, scrambled eggs, tater tots, cheddar jack cheese, and green hatch chili salsa.",
//       img: "/images/placeHolderImage.png",
//       allergens: []
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       food_id: "140",
//       cost: 13,
//       food_name: "Ahi Salmon Chirashi",
//       numReviews: 0,
//       rating: 5,
//       description: "Togarashi seared ahi and salmon with rice, furikake seasoning, daikon root, shiso leaf, avocado, cucumber, marinated carrots, and green onions.",
//       location: {
//         location_id: 0,
//         name: "Umi",
//         dining_hall: "64degrees"
//       },
//       numRecommend: 0
//     },
//     {
//       description: "Hamachi and salmon with rice, furikake seasoning, daikon root, shiso leaf, avocado, shishito, and green onions. ",
//       allergens: [],
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Umi"
//       },
//       numRecommend: 0,
//       rating: 5,
//       cost: 13,
//       food_name: "Salmon Belly Hamachi Chirashi",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_id: "141"
//     },
//     {
//       food_id: "142",
//       food_name: "Soba Noodle Salad",
//       cost: 6.5,
//       numRecommend: 0,
//       numReviews: 0,
//       description: "Soba noodles tossed with sliced carrot, shredded red cabbage, grilled asparagus, and orange mirin dashi dressing, garnished with nori and sesame seeds",
//       allergens: [],
//       rating: 5,
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Umi"
//       },
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_name: "Apricot Miso Edamame",
//       rating: 5,
//       description: "Shell on edamame tossed in apricot miso sauce",
//       location: {
//         name: "Umi",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       cost: 3,
//       allergens: [],
//       numRecommend: 0,
//       food_id: "143"
//     },
//     {
//       numReviews: 0,
//       rating: 5,
//       food_name: "Edamame",
//       allergens: [],
//       description: "Steamed edamame seasoned with sea salt.",
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Umi"
//       },
//       numRecommend: 0,
//       cost: 3,
//       food_id: "144"
//     },
//     {
//       rating: 5,
//       food_id: "145",
//       description: "Hot house cucumbers with sweet chili sauce & spicy gochujang",
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         name: "Umi",
//         dining_hall: "64degrees"
//       },
//       allergens: [],
//       food_name: "Kimchi Cucumber",
//       numReviews: 0,
//       cost: 4.5,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       description: "Hot miso soup with tofu and green onions",
//       food_name: "Miso Soup",
//       numReviews: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Umi",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       food_id: "146",
//       numRecommend: 0,
//       cost: 3.5,
//       rating: 5
//     },
//     {
//       allergens: [],
//       cost: 3.5,
//       numRecommend: 0,
//       location: {
//         name: "Web Menu",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       description: "Hong Kong egg tarts of flaky pastry, filled with a smooth, lightly sweetened egg custard",
//       food_name: "Chinese Egg Tart",
//       food_id: "147",
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0
//     },
//     {
//       food_id: "148",
//       food_name: "Sesame Balls",
//       numReviews: 0,
//       cost: 4,
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       location: {
//         name: "Web Menu",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       allergens: [],
//       description: "5 deep fried sesame balls"
//     },
//     {
//       allergens: [],
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       description: "Chicken thigh marinated in a soy and hoisin marinade  sauteed and served with choice of base and finishing sauce",
//       rating: 5,
//       cost: 8,
//       numReviews: 0,
//       location: {
//         name: "Web Menu",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       food_name: "Char Siu Chicken Wok",
//       food_id: "149"
//     },
//     {
//       food_id: "15",
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       },
//       rating: 5,
//       cost: 7,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       food_name: "Bacon Green Chile Tacos",
//       description: "Breakfast tacos with scrambled eggs, bacon, cheddar jack cheese, green hatch chile salsa, and crema.",
//       allergens: [],
//       numReviews: 0
//     },
//     {
//       cost: 7,
//       numReviews: 0,
//       description: "Choice of base and vegetables served with crispy tofu tossed in a spicy sweet Manchurian sauce, finished with green onion",
//       food_name: "Manchurian Tofu Wok",
//       food_id: "150",
//       allergens: [],
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Web Menu"
//       },
//       rating: 5,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       numReviews: 0,
//       food_name: "Orange Chicken Wok",
//       food_id: "151",
//       rating: 5,
//       allergens: [],
//       numRecommend: 0,
//       description: "Crispy orange chile chicken served with choice of base and finishing sauce",
//       cost: 8,
//       location: {
//         dining_hall: "64degrees",
//         name: "Web Menu",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       numReviews: 0,
//       allergens: [],
//       location: {
//         dining_hall: "64degrees",
//         name: "Web Menu",
//         location_id: 0
//       },
//       description: "Choice of base and vegetables served with pepper sauce beef ",
//       img: "/images/placeHolderImage.png",
//       food_id: "152",
//       food_name: "Peppered Beef Wok",
//       rating: 5,
//       cost: 8.5,
//       numRecommend: 0
//     },
//     {
//       description: "Steamed brown rice. ",
//       numRecommend: 0,
//       allergens: [],
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Web Menu"
//       },
//       food_name: "Brown Rice",
//       cost: 3,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_id: "153",
//       rating: 5
//     },
//     {
//       numRecommend: 0,
//       allergens: [],
//       description: "Steamed jasmine rice.",
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Web Menu"
//       },
//       numReviews: 0,
//       cost: 3,
//       rating: 5,
//       food_id: "154",
//       img: "/images/placeHolderImage.png",
//       food_name: "Jasmine Rice"
//     },
//     {
//       numReviews: 0,
//       food_id: "155",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       description: "2 fried chicken potstickers",
//       cost: 3.5,
//       location: {
//         name: "Web Menu",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       numRecommend: 0,
//       food_name: "Chicken Potstickers",
//       rating: 5
//     },
//     {
//       food_id: "156",
//       food_name: "Salt & Pepper Chicken Wings",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       numRecommend: 0,
//       rating: 5,
//       cost: 9.5,
//       location: {
//         location_id: 0,
//         name: "Web Menu",
//         dining_hall: "64degrees"
//       },
//       allergens: [],
//       description: "Chicken wings tossed in salt, pepper, garlic and green onion. "
//     },
//     {
//       food_id: "157",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       food_name: "Steamed Pork Bun",
//       cost: 5.5,
//       numRecommend: 0,
//       location: {
//         name: "Web Menu",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       rating: 5,
//       allergens: [],
//       description: "Steamed BBQ pork bun topped with garlic chili oil and green onion"
//     },
//     {
//       rating: 5,
//       location: {
//         name: "Web Menu",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       cost: 3,
//       numReviews: 0,
//       food_name: "Vegetable Springroll",
//       food_id: "158",
//       description: "2 crispy fried vegetable spring rolls",
//       numRecommend: 0
//     },
//     {
//       food_name: "Pumpkin Baked Penne",
//       allergens: [],
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Al Dente"
//       },
//       numReviews: 0,
//       cost: 8,
//       food_id: "159",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       rating: 5,
//       description: "Baked penne pasta in cream sauce with Italian sausage, pumpkin, bacon, parmesan cheese"
//     },
//     {
//       numReviews: 0,
//       description: "Scrambled eggs, refried beans, tater tots, pico de gallo, cheddar and jack cheese in a 12\" tortilla. ",
//       allergens: [],
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       cost: 6.75,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_id: "16",
//       rating: 5,
//       food_name: "Egg Breakfast Burrito"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       numReviews: 0,
//       allergens: [],
//       food_name: "Elote Pollo Burrito",
//       food_id: "160",
//       cost: 8.5,
//       rating: 5,
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Taqueria"
//       },
//       description: "Burrito with achiote chicken, rice, elote street corn, rice, hot cheetos, crema, and cotija cheese."
//     },
//     {
//       food_id: "161",
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       rating: 5,
//       description: "Breakfast burrito w/ soyrizo potatoes, vegan cheese, Just Eggs, refried beans, pico and sala chile de árbol.",
//       numRecommend: 0,
//       food_name: "Plant Based Soyrizo Burrito",
//       numReviews: 0,
//       cost: 8.5
//     },
//     {
//       rating: 5,
//       cost: 9.5,
//       allergens: [],
//       description: "Tangy soft roasted pork belly, ancho black beans, cilantro rice, pico de gallo, lime-chipotle crema and cotija cheese in a tortilla",
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       numRecommend: 0,
//       numReviews: 0,
//       food_id: "162",
//       food_name: "Pork Belly Al Pastor Burrito",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       food_id: "163",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       rating: 5,
//       allergens: [],
//       description: "Poblano pepper stuffed with a sweet beef and pork minced meat, topped with walnut white sauce served cold and accompanied with a white Mexican rice.",
//       cost: 8,
//       numReviews: 0,
//       food_name: "Chile en Nogada",
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Taqueria"
//       }
//     },
//     {
//       numRecommend: 0,
//       numReviews: 0,
//       food_name: "Quesabirria Tacos",
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Taqueria"
//       },
//       food_id: "164",
//       description: "3 braised beef tacos on corn tortillas with cheese, onion and cilantro, served with a lime wedge and braising broth for dipping",
//       cost: 10,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       rating: 5
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       cost: 8,
//       food_name: "Shrimp a la Diabla Plate",
//       allergens: [],
//       rating: 5,
//       numRecommend: 0,
//       numReviews: 0,
//       food_id: "165",
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Taqueria"
//       },
//       description: "Shrimp sauteed in spicy red chile sauce garnished with cilantro and served with a side of Mexican rice and two tortillas"
//     },
//     {
//       description: "2 Slices Pork Bacon",
//       cost: 3.25,
//       food_id: "166",
//       rating: 5,
//       allergens: [],
//       food_name: "Bacon",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       numRecommend: 0,
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Soul"
//       }
//     },
//     {
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Soul"
//       },
//       img: "/images/placeHolderImage.png",
//       food_id: "167",
//       food_name: "Buttermilk Drop Biscuit",
//       allergens: [],
//       rating: 5,
//       cost: 3,
//       numReviews: 0,
//       numRecommend: 0,
//       description: "House made buttermilk drop biscuit. A staple in the American South."
//     },
//     {
//       description: "Cheesy grits with smoked gouda and cream cheese",
//       rating: 5,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       food_name: "Cheesy Grits",
//       cost: 2.5,
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Soul",
//         location_id: 0
//       },
//       numReviews: 0,
//       food_id: "168",
//       allergens: []
//     },
//     {
//       allergens: [],
//       description: "Mix of fresh seasonal fruits",
//       location: {
//         name: "Soul",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       numReviews: 0,
//       cost: 3.75,
//       food_name: "Fresh Fruit Salad",
//       numRecommend: 0,
//       rating: 5,
//       food_id: "169",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       rating: 5,
//       allergens: [],
//       food_name: "Green Chile Breakfast Burrito",
//       location: {
//         name: "Taqueria",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       food_id: "17",
//       img: "/images/placeHolderImage.png",
//       description: "Breakfast burrito with refried beans, scrambled eggs, tater tots, cheddar jack cheese, and green hatch chili salsa.",
//       cost: 6.75,
//       numReviews: 0,
//       numRecommend: 0
//     },
//     {
//       numReviews: 0,
//       rating: 5,
//       allergens: [],
//       food_name: "Fried Egg",
//       numRecommend: 0,
//       cost: 1.5,
//       location: {
//         name: "Soul",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       food_id: "170",
//       img: "/images/placeHolderImage.png",
//       description: "Whole egg, cooked to order. "
//     },
//     {
//       numReviews: 0,
//       allergens: [],
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Soul",
//         location_id: 0
//       },
//       food_id: "171",
//       rating: 5,
//       cost: 3.75,
//       numRecommend: 0,
//       description: "Crispy fried potato cakes.",
//       img: "/images/placeHolderImage.png",
//       food_name: "Hash Brown Triangles"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       location: {
//         name: "Soul",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       description: "Vegan scrambled 'JUST' eggs",
//       cost: 3.5,
//       numRecommend: 0,
//       numReviews: 0,
//       allergens: [],
//       food_name: "Vegan Scramble 'JUST' Eggs",
//       food_id: "172"
//     },
//     {
//       rating: 5,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       food_id: "173",
//       cost: 2,
//       description: "Vegan veggie sausage.",
//       food_name: "Veggie Sausage",
//       numReviews: 0,
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Soul",
//         location_id: 0
//       }
//     },
//     {
//       food_id: "174",
//       cost: 3,
//       numReviews: 0,
//       rating: 5,
//       food_name: "Jalapeno Cheddar Drop Biscuits",
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Soul",
//         location_id: 0
//       },
//       description: "Our house made Buttermilk Drop Biscuits made even better with the addition of Cheddar Cheese and Jalapeno Peppers",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       allergens: []
//     },
//     {
//       description: "Ground pork, herbs and spices in a natural casing. ",
//       food_id: "175",
//       numRecommend: 0,
//       numReviews: 0,
//       rating: 5,
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Soul"
//       },
//       cost: 2.5,
//       food_name: "Pork Sausage Links",
//       img: "/images/placeHolderImage.png",
//       allergens: []
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       cost: 2.75,
//       description: "Scrambled egg whites ",
//       rating: 5,
//       food_name: "Scrambled Egg Whites",
//       numReviews: 0,
//       numRecommend: 0,
//       food_id: "176",
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Soul"
//       }
//     },
//     {
//       cost: 2.75,
//       location: {
//         name: "Soul",
//         dining_hall: "cafeventanas",
//         location_id: 0
//       },
//       description: "Scrambled Eggs ",
//       rating: 5,
//       food_name: "Scrambled Eggs",
//       numRecommend: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_id: "177"
//     },
//     {
//       food_id: "178",
//       numReviews: 0,
//       numRecommend: 0,
//       rating: 5,
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Soul"
//       },
//       allergens: [],
//       cost: 1.5,
//       description: "Your choice of toasted bread",
//       food_name: "Toast",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       food_id: "179",
//       numReviews: 0,
//       allergens: [],
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Soul"
//       },
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       cost: 6,
//       description: "Southern andouille hash, served with two fried eggs and dressed with creole aioli.",
//       food_name: "Andouille Hash & Eggs"
//     },
//     {
//       allergens: [],
//       food_id: "18",
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       description: "Breakfast tacos with scrambled egg, cheddar jack cheese, mushroom corn mix, crema, and cilantro.",
//       numRecommend: 0,
//       cost: 6,
//       rating: 5,
//       food_name: "Mushroom Breakfast Tacos"
//     },
//     {
//       numReviews: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Soul"
//       },
//       rating: 5,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       description: "House made beignets, fried and topped with powdered sugar",
//       allergens: [],
//       cost: 4,
//       food_id: "180",
//       food_name: "Beignet"
//     },
//     {
//       rating: 5,
//       food_id: "181",
//       location: {
//         location_id: 0,
//         name: "Soul",
//         dining_hall: "cafeventanas"
//       },
//       food_name: "Belgian Waffle",
//       allergens: [],
//       cost: 6,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       description: "Made to order Belgium waffle",
//       numRecommend: 0
//     },
//     {
//       food_id: "182",
//       numRecommend: 0,
//       rating: 5,
//       food_name: "Cafe Breakfast Combo",
//       cost: 8.5,
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Soul",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       numReviews: 0,
//       description: "2 eggs cooked your way with potatoes, choice of meat, and toast",
//       allergens: []
//     },
//     {
//       food_name: "Chicken & Waffle",
//       rating: 5,
//       cost: 9.5,
//       description: "Fresh made Belgian waffle with fried chicken fritters",
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Soul"
//       },
//       numRecommend: 0,
//       allergens: [],
//       food_id: "183",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0
//     },
//     {
//       food_name: "Country Fried Steak",
//       description: "Tenderized steak breaded and fried. Served with peppered poblano gravy, eggs, and hash browns",
//       food_id: "184",
//       numRecommend: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Soul",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       allergens: [],
//       numReviews: 0,
//       cost: 11
//     },
//     {
//       food_id: "185",
//       allergens: [],
//       cost: 10,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       description: "Our in house fried chicken topped with andouille sausage gravy served with 2 fried eggs",
//       numReviews: 0,
//       rating: 5,
//       location: {
//         location_id: 0,
//         name: "Soul",
//         dining_hall: "cafeventanas"
//       },
//       food_name: "Fried Chicken & Gravy Plate"
//     },
//     {
//       description: "Pan seared cornmeal mush slices and eggs covered in Tennessee gravy.",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       food_id: "186",
//       cost: 6,
//       numRecommend: 0,
//       rating: 5,
//       food_name: "Fried Cornmeal Plate",
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Soul"
//       }
//     },
//     {
//       description: "Cheesy grits topped with 2 over easy fried eggs",
//       rating: 5,
//       food_name: "Grits & Eggs",
//       allergens: [],
//       cost: 8.5,
//       food_id: "187",
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         name: "Soul",
//         dining_hall: "cafeventanas"
//       },
//       numReviews: 0,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       numRecommend: 0,
//       food_id: "188",
//       allergens: [],
//       food_name: "Pecan Plantain Pancakes",
//       description: "Plantain pancake topped with spiced butter and candied pecans.",
//       img: "/images/placeHolderImage.png",
//       cost: 7,
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Soul"
//       },
//       numReviews: 0,
//       rating: 5
//     },
//     {
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Soul"
//       },
//       description: "Breakfast burrito with southern red beans, scrambled eggs, cheddar cheese, sauteed peppers and onions, and creole aioli",
//       cost: 10,
//       allergens: [],
//       food_name: "Red Bean Breakfast Burrito",
//       img: "/images/placeHolderImage.png",
//       food_id: "189",
//       numRecommend: 0,
//       numReviews: 0,
//       rating: 5
//     },
//     {
//       food_id: "19",
//       food_name: "Plant Based Breakfast Burrito",
//       rating: 5,
//       numReviews: 0,
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       },
//       img: "/images/placeHolderImage.png",
//       cost: 8.5,
//       description: "JUST vegan egg with potatoes, refried beans, vegan cheese, cilantro, pico de gallo and vegan garlic aioli on a tortilla",
//       allergens: []
//     },
//     {
//       allergens: [],
//       food_id: "190",
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       location: {
//         name: "Soul",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       description: "Breakfast burrito with scrambled eggs, ham, cheese, hashbrown peppers and onion, and andouille gravy",
//       numReviews: 0,
//       numRecommend: 0,
//       cost: 10,
//       food_name: "Tennessee Burrito"
//     },
//     {
//       food_id: "191",
//       description: "Fresh buttermilk biscuit, filled with bacon, a fried egg, and American cheese. Served with a side of your choice.",
//       rating: 5,
//       cost: 8.5,
//       numRecommend: 0,
//       location: {
//         name: "Soul",
//         dining_hall: "cafeventanas",
//         location_id: 0
//       },
//       food_name: "Bacon Biscuit Sandwich",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       numReviews: 0
//     },
//     {
//       numRecommend: 0,
//       description: "Fresh buttermilk biscuit, filled with a fried egg, and American cheese. Served with a side of your choice.",
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Soul"
//       },
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       rating: 5,
//       numReviews: 0,
//       food_name: "Egg & Cheese Biscuit Sandwich",
//       food_id: "192",
//       cost: 6
//     },
//     {
//       allergens: [],
//       rating: 5,
//       food_id: "193",
//       numRecommend: 0,
//       cost: 8.75,
//       numReviews: 0,
//       description: "Hawaiian bun with triton sauce topped with a fried chicken fritter, a fried egg, and American cheese. Served with a side of your choice.",
//       img: "/images/placeHolderImage.png",
//       food_name: "Fried Chicken Breakfast Sandwich",
//       location: {
//         location_id: 0,
//         name: "Soul",
//         dining_hall: "cafeventanas"
//       }
//     },
//     {
//       cost: 7.75,
//       food_name: "King Triton Breakfast Sandwich",
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Soul"
//       },
//       description: "Hawaiian bun with Fried egg, fried hashbrown triangle, american cheese and our signature triton sauce served with choice of side",
//       numRecommend: 0,
//       rating: 5,
//       allergens: [],
//       numReviews: 0,
//       food_id: "194"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Soul",
//         dining_hall: "cafeventanas",
//         location_id: 0
//       },
//       food_id: "195",
//       numReviews: 0,
//       description: "Fresh buttermilk biscuit, filled with a turkey sausage patty, a fried egg, and American cheese. Served with a side of your choice. \u003CBR\u003E",
//       cost: 8,
//       rating: 5,
//       food_name: "Turkey Sausage Biscuit Sandwich",
//       numRecommend: 0,
//       allergens: []
//     },
//     {
//       numReviews: 0,
//       numRecommend: 0,
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Soul"
//       },
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       food_id: "196",
//       rating: 5,
//       food_name: "Veggie Sausage Biscuit Sandwich",
//       description: "Fresh jalapeno buttermilk biscuit, cut in half and filled with veggie sausage, just eggs, and spinach served with a side of your choice",
//       cost: 8.5
//     },
//     {
//       cost: 8,
//       food_name: "Akara Fritter Bowl",
//       food_id: "197",
//       description: "Fried black eyed pea fritters seasoned with onions, garlic, and habanero peppers. Served over rice with east Africa slaw, crushed avocado, and harissa sauce. \u003CBR\u003E\u003CBR\u003E",
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Journey"
//       },
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       rating: 5,
//       allergens: [],
//       numRecommend: 0
//     },
//     {
//       rating: 5,
//       food_id: "198",
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Journey"
//       },
//       img: "/images/placeHolderImage.png",
//       food_name: "Beef Kofta Fries",
//       description: "Beef Kofta on top of fired potato wedges topped with crushed avocado, and cilantro drizzled with piri piri sauce, piri piri aioli, and African fish taco sauce.",
//       cost: 12,
//       numReviews: 0,
//       numRecommend: 0,
//       allergens: []
//     },
//     {
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Journey"
//       },
//       description: "Seasoned beef skewers served with roasted carrots and jollof rice. ",
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       cost: 10.5,
//       food_id: "199",
//       numReviews: 0,
//       numRecommend: 0,
//       food_name: "Beef Suya Plate"
//     },
//     {
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       description: "Mix of fresh seasonal fruits",
//       cost: 3.75,
//       food_name: "Fresh Fruit Salad",
//       numReviews: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       food_id: "2",
//       rating: 5,
//       numRecommend: 0
//     },
//     {
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       allergens: [],
//       rating: 5,
//       numReviews: 0,
//       numRecommend: 0,
//       food_name: "Sausage Breakfast Burrito",
//       description: "Scrambled eggs, refried beans, tater tots, pork sausage, pico de gallo, cheddar and jack cheese in a 12\" tortilla.",
//       food_id: "20",
//       img: "/images/placeHolderImage.png",
//       cost: 8.5
//     },
//     {
//       cost: 10.5,
//       food_id: "200",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       description: "Chicken suya, rice, cabbage slaw, crushed avocado, cilantro, and a lime wedge drizzled with a harissa sauce.",
//       location: {
//         location_id: 0,
//         name: "Journey",
//         dining_hall: "cafeventanas"
//       },
//       rating: 5,
//       food_name: "Chicken Suya Bowl",
//       numReviews: 0,
//       numRecommend: 0
//     },
//     {
//       allergens: [],
//       location: {
//         name: "Journey",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       cost: 10.5,
//       numReviews: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_id: "201",
//       food_name: "Chicken Suya Fries",
//       description: "Chicken suya on top of fried potato wedges, cabbage slaw, crushed avocado, and cilantro; covered in a harissa aioli and African fish taco sauce"
//     },
//     {
//       food_id: "202",
//       rating: 5,
//       description: "Stewed chicken tajin with sauteed vegetables in a tomato sauce served with rice",
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Journey"
//       },
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       food_name: "Chicken Tajin Plate",
//       cost: 9,
//       numRecommend: 0,
//       allergens: []
//     },
//     {
//       cost: 8,
//       numReviews: 0,
//       description: "Seasoned baked wings tossed in kati kati tomato sauce served with a side of plantains and topped with cilantro and fresh lime juice",
//       allergens: [],
//       numRecommend: 0,
//       food_id: "203",
//       rating: 5,
//       food_name: "Kati Kati Wings",
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Journey",
//         location_id: 0
//       }
//     },
//     {
//       allergens: [],
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       food_id: "204",
//       food_name: "Kenyan Curry Plate",
//       cost: 8,
//       description: "Carrots, sweet potatoes, green beans, broccoli, bell peppers and garbanzo beans in coconut milk & lemon grass broth and served with roasted cauliflower and jollof rice. ",
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Journey"
//       },
//       numRecommend: 0
//     },
//     {
//       food_name: "Nigerian Chicken Shawarma Wrap",
//       rating: 5,
//       food_id: "205",
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       cost: 6.5,
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Journey",
//         location_id: 0
//       },
//       description: "Nigerian chicken shawarma, shredded lettuce, tomatoes, red onion and nigerian shawarma sauce rolled in African flatbread",
//       numReviews: 0,
//       numRecommend: 0
//     },
//     {
//       allergens: [],
//       food_name: "Piri Piri Shrimp Chapati Wrap",
//       location: {
//         location_id: 0,
//         name: "Journey",
//         dining_hall: "cafeventanas"
//       },
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       numRecommend: 0,
//       numReviews: 0,
//       description: "Piri piri shrimp, turmeric rice, and east African cabbage slaw rolled in African flatbread",
//       food_id: "206",
//       cost: 7
//     },
//     {
//       description: "Black eyed peas, green onions, red bell pepper, tomatoes, cucumber, habanero peppers, parsley, salt and black pepper tossed in turmeric lime vinaigrette",
//       cost: 5,
//       rating: 5,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Journey"
//       },
//       food_id: "207",
//       numRecommend: 0,
//       numReviews: 0,
//       food_name: "Black Eyed Pea Salad"
//     },
//     {
//       cost: 3.5,
//       food_id: "208",
//       food_name: "Butternut Squash & Kale",
//       description: "Sauteed diced butternut squash, pepitas, kale and spinach",
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       allergens: [],
//       numReviews: 0,
//       numRecommend: 0,
//       location: {
//         name: "Journey",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       }
//     },
//     {
//       cost: 2,
//       numRecommend: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         name: "Journey",
//         dining_hall: "cafeventanas"
//       },
//       food_name: "Chapati Flat Bread",
//       description: "A staple North & Central African flat bread made fresh every day in our bakery  ",
//       food_id: "209",
//       rating: 5,
//       numReviews: 0
//     },
//     {
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_name: "Sausage Green Chile Burrito",
//       description: "Breakfast burrito with sausage, refried beans, scrambled eggs, tater tots, cheddar jack cheese, and green hatch chili salsa.",
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       cost: 8.5,
//       numRecommend: 0,
//       rating: 5,
//       food_id: "21"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       cost: 3.5,
//       description: "A tangy and moderately spicy East African slaw with red cabbage and cilantro",
//       numRecommend: 0,
//       numReviews: 0,
//       food_id: "210",
//       rating: 5,
//       food_name: "East Africa Cabbage Slaw",
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Journey"
//       },
//       allergens: []
//     },
//     {
//       food_name: "Kilamanjaro Salad",
//       location: {
//         name: "Journey",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       cost: 6,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       description: "An East African salad with a blend of Spring Mix lettuce, Avocados, Cherry Tomatoes, Cucumbers, Black-Eyed Peas and Plantain Chips. Tossed with Benne dressing",
//       numRecommend: 0,
//       rating: 5,
//       food_id: "211",
//       allergens: []
//     },
//     {
//       food_id: "212",
//       rating: 5,
//       numReviews: 0,
//       numRecommend: 0,
//       food_name: "Plantain Bread",
//       description: "A Sweet & Savory Central African treat similar to a traditional banana bread. ",
//       cost: 3,
//       allergens: [],
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Journey"
//       },
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Journey"
//       },
//       numRecommend: 0,
//       food_name: "Turmeric Rice",
//       rating: 5,
//       allergens: [],
//       numReviews: 0,
//       cost: 3,
//       description: "Turmeric seasoned rice",
//       img: "/images/placeHolderImage.png",
//       food_id: "213"
//     },
//     {
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Kaldi"
//       },
//       allergens: [],
//       numReviews: 0,
//       food_name: "Chana Masala Kathi Roll",
//       img: "/images/placeHolderImage.png",
//       food_id: "214",
//       numRecommend: 0,
//       rating: 5,
//       cost: 8.5,
//       description: "Chapati bread with cashew and garlic chutney, chana masala chickpeas, tandoori slaw, cilantro chutney and tamarind chutney"
//     },
//     {
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Kaldi",
//         location_id: 0
//       },
//       food_name: "Chicken Biryani Plate",
//       numRecommend: 0,
//       rating: 5,
//       food_id: "215",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       allergens: [],
//       description: "Chicken simmered in yogurt and biryani spices, topped with a cilantro mint mixture and steamed rice then baked in the oven served with basmati rice and lentils and naan",
//       cost: 10.25
//     },
//     {
//       numRecommend: 0,
//       allergens: [],
//       rating: 5,
//       cost: 9.25,
//       numReviews: 0,
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Kaldi",
//         location_id: 0
//       },
//       description: "Paneer in a tomato curry sauce, cashews, aromatic spices and cream served with basmati rice and lentils and naan\u003CBR\u003E",
//       img: "/images/placeHolderImage.png",
//       food_name: "Paneer Makhani Plate",
//       food_id: "216"
//     },
//     {
//       allergens: [],
//       numReviews: 0,
//       food_name: "Papdi Chaat",
//       food_id: "217",
//       numRecommend: 0,
//       description: "Fried potatoes, fried spiced dough, garbanzo beans, crispy bhel sev, yogurt, tamarind and green chutneys and garnished with sambar masala spice",
//       cost: 10,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Kaldi",
//         location_id: 0
//       }
//     },
//     {
//       cost: 11.5,
//       img: "/images/placeHolderImage.png",
//       description: "Naan topped with cashew and garlic chutney, shredded lettuce, sliced tomatoes, tandoori shrimp, red onions and mango chutney",
//       allergens: [],
//       numReviews: 0,
//       numRecommend: 0,
//       rating: 5,
//       food_name: "Shrimp Loaded Naan",
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Kaldi"
//       },
//       food_id: "218"
//     },
//     {
//       allergens: [],
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       description: "Chapati bread with cashew and garlic chutney, tandoori chicken, tandoori slaw and mango chutney",
//       numReviews: 0,
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Kaldi"
//       },
//       cost: 10.5,
//       rating: 5,
//       food_name: "Tandoor Chicken Kathi Roll",
//       food_id: "219"
//     },
//     {
//       description: "Scrambled eggs topped with black bean puree, lime crema and cilantro & onion served with a side of beans and tortilla chips",
//       food_name: "Huevos Veracruzanos",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       },
//       rating: 5,
//       numReviews: 0,
//       food_id: "22",
//       allergens: [],
//       cost: 8
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       cost: 9,
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Kaldi",
//         location_id: 0
//       },
//       description: "House Tandoor chicken with basmati rice and fresh baked naan bread",
//       food_name: "Tandoor Chicken Plate",
//       food_id: "220",
//       rating: 5,
//       allergens: [],
//       numReviews: 0
//     },
//     {
//       allergens: [],
//       description: "Fried vegetable samosa served with chutney of your choice",
//       cost: 4,
//       rating: 5,
//       numRecommend: 0,
//       food_name: "Vegetable Samosas",
//       food_id: "221",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Kaldi"
//       }
//     },
//     {
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Kaldi",
//         location_id: 0
//       },
//       cost: 3,
//       rating: 5,
//       allergens: [],
//       description: "2 breaded fried potato patty with peas, ginger, garlic, onion and spices ",
//       numRecommend: 0,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       food_id: "222",
//       food_name: "Aloo Tikki"
//     },
//     {
//       numRecommend: 0,
//       description: "Steamed basmati rice",
//       numReviews: 0,
//       food_id: "223",
//       food_name: "Basmati Rice",
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       location: {
//         name: "Kaldi",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       cost: 3
//     },
//     {
//       rating: 5,
//       food_name: "Black Dal Maharashtra",
//       numReviews: 0,
//       allergens: [],
//       numRecommend: 0,
//       cost: 3,
//       img: "/images/placeHolderImage.png",
//       description: "Black lentils are simmered with kidney beans & tomatoes along with ginger, garlic, corriander, curry powder and methi spice then finished with butter, cream and cilantro.",
//       food_id: "224",
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Kaldi",
//         location_id: 0
//       }
//     },
//     {
//       food_id: "225",
//       description: "Indian style flat bread made fresh in our tandoor ovens, then glazed with butter and garnished with parsley ",
//       numRecommend: 0,
//       numReviews: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       food_name: "Butter Naan",
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Kaldi"
//       },
//       rating: 5,
//       cost: 3
//     },
//     {
//       numReviews: 0,
//       food_name: "Chana Masala Side",
//       cost: 3,
//       description: "Chickpeas that are simmered with onions, cumin, ginger, garlic, garam masala and curry chili powder",
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       numRecommend: 0,
//       food_id: "226",
//       allergens: [],
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Kaldi"
//       }
//     },
//     {
//       numReviews: 0,
//       allergens: [],
//       description: "Indian style flat bread made fresh in our tandoor ovens, then glazed with butter and roasted garlic garnished with parsley",
//       food_id: "227",
//       img: "/images/placeHolderImage.png",
//       food_name: "Garlic Naan",
//       cost: 3,
//       rating: 5,
//       location: {
//         name: "Kaldi",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       numRecommend: 0
//     },
//     {
//       numRecommend: 0,
//       cost: 6,
//       food_name: "Kachumber Salad",
//       food_id: "228",
//       allergens: [],
//       location: {
//         name: "Kaldi",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       description: "Romaine lettuce, cucumber, tomato, red onion, jalapeno and mint tossed in chaat masala dressing",
//       rating: 5
//     },
//     {
//       numReviews: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Kaldi"
//       },
//       food_name: "Naan Plain",
//       rating: 5,
//       food_id: "229",
//       description: "Indian style flat bread made fresh in our tandoor ovens",
//       cost: 2,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       allergens: []
//     },
//     {
//       numRecommend: 0,
//       description: "Fried Tortillas tossed in warmed salsa topped with soyrizo spinach, lime crema, sliced red onions, chopped cilantro and a sunny side up egg served with a side of beans and a fried serrano",
//       cost: 8,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       rating: 5,
//       food_id: "23",
//       food_name: "Soyrizo Ranchero Chilaquiles",
//       numReviews: 0,
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       }
//     },
//     {
//       numRecommend: 0,
//       location: {
//         name: "Kaldi",
//         dining_hall: "cafeventanas",
//         location_id: 0
//       },
//       rating: 5,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       food_name: "Spicy Naan",
//       cost: 3,
//       description: "Indian style flat bread made fresh in our tandoor ovens, then topped with minced serrano peppers and garam masala seasoning",
//       allergens: [],
//       food_id: "230"
//     },
//     {
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       description: "Deep fried balls of dough soaked in rose flavored syrup\u003CBR\u003E",
//       numReviews: 0,
//       location: {
//         name: "Kaldi",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       numRecommend: 0,
//       food_name: "Gulab",
//       cost: 5,
//       food_id: "231",
//       allergens: []
//     },
//     {
//       food_name: "BBQ Jerk Chicken Sandwich",
//       cost: 10.5,
//       allergens: [],
//       food_id: "232",
//       location: {
//         location_id: 0,
//         name: "Vibe",
//         dining_hall: "cafeventanas"
//       },
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       rating: 5,
//       description: "Jerk chicken thigh with pepperjack cheese, caribbean mango slaw, and jerk BBQ sauce on a bun served with jerked sweet potato fries"
//     },
//     {
//       rating: 5,
//       description: "Spring mix, red onions, diced fresno pepper, fresh pineapple, mini peppers and jerk chicken tossed in lemon orange vinaigrette garnished with sliced almonds",
//       img: "/images/placeHolderImage.png",
//       food_id: "233",
//       food_name: "Calypso Chicken Salad",
//       numRecommend: 0,
//       numReviews: 0,
//       location: {
//         name: "Vibe",
//         dining_hall: "cafeventanas",
//         location_id: 0
//       },
//       allergens: [],
//       cost: 10
//     },
//     {
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       cost: 9.5,
//       numReviews: 0,
//       description: "Coconut fried chicken served with a side of Caribbean mango slaw and moros rice",
//       food_name: "Coconut Fried Chicken Plate",
//       numRecommend: 0,
//       location: {
//         name: "Vibe",
//         dining_hall: "cafeventanas",
//         location_id: 0
//       },
//       food_id: "234",
//       allergens: []
//     },
//     {
//       numReviews: 0,
//       allergens: [],
//       food_name: "Jerk Chicken Pasta",
//       description: "Linguini noodles with chicken thigh, bell peppers, red onion and jerk BBQ sauce garnished with cilantro",
//       food_id: "235",
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       cost: 9,
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Vibe",
//         location_id: 0
//       },
//       numRecommend: 0
//     },
//     {
//       food_id: "236",
//       location: {
//         location_id: 0,
//         name: "Vibe",
//         dining_hall: "cafeventanas"
//       },
//       food_name: "Jerk Chicken Plate",
//       cost: 9.5,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       rating: 5,
//       allergens: [],
//       description: "Marinated and oven roasted Chicken leg quarter seasoned with a homemade Jerk Spice and served with moros, a rice and beans mix, and Caribbean slaw.",
//       numRecommend: 0
//     },
//     {
//       food_name: "Panamanian Mojo Veggie Pasta",
//       numReviews: 0,
//       description: "Linguini with vegetables, and creamy Pananmenian mojo sauce.",
//       rating: 5,
//       cost: 8.5,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       location: {
//         name: "Vibe",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       allergens: [],
//       food_id: "237"
//     },
//     {
//       numRecommend: 0,
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Vibe",
//         location_id: 0
//       },
//       description: "Braised pork with tomato, cabbage, and marinated onion on an 8\" roll spread with mayo and zesty Mojo Panama sauce served with sweet potato jerk fries",
//       food_name: "Panamanian Pork Mojo Sandwich",
//       rating: 5,
//       numReviews: 0,
//       food_id: "238",
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       cost: 11
//     },
//     {
//       location: {
//         name: "Vibe",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       numReviews: 0,
//       description: "Crispy chicken wings marinated in jerk marinade, tossed in rasta sauce and garnished with cilantro and Caribbean jerk seasoning",
//       cost: 12,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       food_name: "Rasta Wings",
//       allergens: [],
//       food_id: "239",
//       rating: 5
//     },
//     {
//       cost: 8.5,
//       food_name: "Cafe Breakfast Combo",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       numRecommend: 0,
//       description: "2 eggs cooked your way with potatoes, choice of meat, and toast",
//       food_id: "24",
//       allergens: [],
//       location: {
//         name: "TritonGrill",
//         dining_hall: "64degrees",
//         location_id: 0
//       }
//     },
//     {
//       location: {
//         name: "Vibe",
//         dining_hall: "cafeventanas",
//         location_id: 0
//       },
//       description: "Jamaican bread pudding topped with sweet cherry sauce and powdered sugar",
//       food_name: "Caribbean Cherry Bread Pudding",
//       rating: 5,
//       numReviews: 0,
//       food_id: "240",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       cost: 5,
//       allergens: []
//     },
//     {
//       description: "Shredded red cabbage, carrot, and diced mango tossed with lime juice",
//       food_name: "Caribbean Mango Slaw",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_id: "241",
//       cost: 3.75,
//       allergens: [],
//       numReviews: 0,
//       rating: 5,
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Vibe",
//         location_id: 0
//       }
//     },
//     {
//       food_id: "242",
//       cost: 3.75,
//       numRecommend: 0,
//       allergens: [],
//       description: "Sweet potato fries tossed in house Jerk spice",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       rating: 5,
//       food_name: "Jerked Sweet Potato Fries",
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Vibe",
//         location_id: 0
//       }
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       allergens: [],
//       numRecommend: 0,
//       cost: 3,
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Vibe"
//       },
//       description: "A vegan red rice dish composed of Kidney Beans and Green Olives seasoned with our own Sazon spice blend.",
//       food_id: "243",
//       food_name: "Moros (Red Bean & Rice)",
//       numReviews: 0
//     },
//     {
//       numReviews: 0,
//       description: "Hand pie filled with argentinian spiced ground beef, vegetables and chimichurri.",
//       food_name: "Argentinian Beef Handpie",
//       img: "/images/placeHolderImage.png",
//       food_id: "244",
//       rating: 5,
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "HaPi"
//       },
//       allergens: [],
//       cost: 4.5,
//       numRecommend: 0
//     },
//     {
//       allergens: [],
//       rating: 5,
//       numRecommend: 0,
//       description: "Hand pie with ham, cheese, apple and bechamel sauce.",
//       food_name: "Ham & Cheese Handpie",
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "HaPi"
//       },
//       cost: 4,
//       numReviews: 0,
//       food_id: "245"
//     },
//     {
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       food_name: "Moroccan Chickpea Handpie",
//       description: "Handpie with Moroccan spiced chickpeas, onions and cilantro",
//       location: {
//         name: "HaPi",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       allergens: [],
//       numReviews: 0,
//       numRecommend: 0,
//       food_id: "246",
//       cost: 4
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         name: "HaPi",
//         dining_hall: "cafeventanas"
//       },
//       numRecommend: 0,
//       food_name: "Pollo Guisado Hand Pie",
//       cost: 4.5,
//       rating: 5,
//       numReviews: 0,
//       description: "House made hand pie stuffed with a spicy Caribbean style shredded chicken, then fried to perfection.",
//       food_id: "247",
//       allergens: []
//     },
//     {
//       location: {
//         dining_hall: "cafeventanas",
//         name: "HaPi",
//         location_id: 0
//       },
//       food_id: "248",
//       description: "Handpie filled with swiss chard, roasted pears, parmesan cheese, and ricotta stuffing topped with pepitas.",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       cost: 4.5,
//       allergens: [],
//       numReviews: 0,
//       rating: 5,
//       food_name: "Swiss Chard Pear Ricotta Handpie"
//     },
//     {
//       description: "Housemade dough stuffed with African spiced chicken filling",
//       food_id: "249",
//       location: {
//         location_id: 0,
//         name: "HaPi",
//         dining_hall: "cafeventanas"
//       },
//       food_name: "Tumeric Chicken Hand Pie",
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       cost: 4,
//       rating: 5,
//       numRecommend: 0
//     },
//     {
//       description: "2 eggs your way with 2 buttermilk pancakes and your choice of meat",
//       rating: 4,
//       food_id: "25",
//       numReviews: 1,
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "TritonGrill"
//       },
//       allergens: [],
//       numRecommend: 1,
//       cost: 8,
//       food_name: "Triton Breakfast Combo"
//     },
//     {
//       allergens: [],
//       cost: 4,
//       numReviews: 0,
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "HaPi"
//       },
//       food_name: "Apple Turnover Hand Pie",
//       numRecommend: 0,
//       food_id: "250",
//       description: "House made hand held apple pie ",
//       img: "/images/placeHolderImage.png",
//       rating: 5
//     },
//     {
//       food_id: "251",
//       food_name: "Caramel Plantain Hand Pie",
//       allergens: [],
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       cost: 4,
//       description: "Dessert handpie filled with plantains in caramel spiced with cinnamon and clove",
//       rating: 5,
//       location: {
//         name: "HaPi",
//         dining_hall: "cafeventanas",
//         location_id: 0
//       }
//     },
//     {
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       allergens: [],
//       location: {
//         location_id: 0,
//         name: "HaPi",
//         dining_hall: "cafeventanas"
//       },
//       numRecommend: 0,
//       food_id: "252",
//       cost: 4,
//       description: "Dessert handpie filled with chocolate and strawberry cream.",
//       food_name: "Chocolate Strawberry Handpie"
//     },
//     {
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       food_id: "253",
//       description: "Crispy fried breaded chicken breast with pickles, spicy aioli, and tomato on a brioche bun served with your choice of side",
//       food_name: "Crispy Chicken Sandwich",
//       numRecommend: 0,
//       numReviews: 0,
//       allergens: [],
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Soul",
//         location_id: 0
//       },
//       cost: 9.5
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       numReviews: 0,
//       description: "Fried Potatoes Wedges topped with an andouille sausage gravy, shredded cheese, and green onions. ",
//       cost: 7,
//       food_name: "Fries with Andouille Sausage Gravy",
//       rating: 5,
//       food_id: "254",
//       allergens: [],
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Soul"
//       }
//     },
//     {
//       numRecommend: 0,
//       food_name: "Pimento Cheeseburger",
//       description: "Smashed halal beef patty with pickled tomato, arugula, and crispy onions served on a brioche bun with pimento cheese spread",
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Soul"
//       },
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       allergens: [],
//       cost: 10.5,
//       food_id: "255",
//       numReviews: 0
//     },
//     {
//       food_name: "Plant Based Crispy Chickn Sandwich",
//       numReviews: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Soul"
//       },
//       rating: 5,
//       description: "Crispy breaded beyond chickn with pickles and vegan chipotle aioli on a bun",
//       allergens: [],
//       food_id: "256",
//       img: "/images/placeHolderImage.png",
//       cost: 9,
//       numRecommend: 0
//     },
//     {
//       food_name: "Cajun Popcorn Shrimp Basket",
//       allergens: [],
//       description: "Cajun dusted fried popcorn shrimp served with potato wedges, southern slaw and old bay aioli",
//       cost: 11,
//       food_id: "257",
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Soul",
//         location_id: 0
//       },
//       numRecommend: 0,
//       numReviews: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       food_name: "Chicken Tender Basket",
//       location: {
//         dining_hall: "cafeventanas",
//         name: "Soul",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_id: "258",
//       numReviews: 0,
//       cost: 9.75,
//       description: "Crispy fried chicken tenders with potato wedges, southern slaw and house made hot sauce",
//       allergens: [],
//       rating: 5
//     },
//     {
//       food_id: "259",
//       food_name: "Cornmeal Shrimp Basket",
//       allergens: [],
//       cost: 10.5,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       location: {
//         name: "Soul",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       rating: 5,
//       description: "Fried southern shrimp topped with pickled onion, served with potato wedges, cajun slaw, Old Bay aioli, and a lemon wedge.",
//       numRecommend: 0
//     },
//     {
//       food_id: "26",
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "TritonGrill"
//       },
//       numRecommend: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       cost: 8.5,
//       description: "Hawaiian bun with Fried egg, Bacon, fried hashbrown triangle, american cheese and our signature triton sauce Served with a choice of side.",
//       numReviews: 0,
//       food_name: "King Triton Bacon Sandwich"
//     },
//     {
//       food_id: "260",
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Soul"
//       },
//       description: "Spicy-smoky Nashville style grilled chicken breast served with potato wedges and Southern style slaw.",
//       food_name: "Nashville Grilled Chicken Basket",
//       rating: 5,
//       allergens: [],
//       cost: 10.5,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0
//     },
//     {
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Soul"
//       },
//       food_name: "Southern Chicken Chop Salad",
//       rating: 5,
//       description: "Romaine lettuce, spring mix, roasted butternut squash, hardboiled egg, pecans, shredded cheddar cheese, candied bacon and blackened chicken tossed in red pepper jelly vinaigrette",
//       cost: 11.5,
//       numRecommend: 0,
//       numReviews: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       food_id: "261"
//     },
//     {
//       rating: 5,
//       cost: 9.5,
//       numReviews: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Soul"
//       },
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_name: "Alabama Crispy Chicken Sandwich",
//       allergens: [],
//       description: "Crispy breaded spicy chicken breast served with Alabama white sauce, green tomatoes, and slaw on a brioche bun.",
//       food_id: "262"
//     },
//     {
//       food_id: "263",
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       numReviews: 0,
//       description: "Smashed beef patty with pimento spread, fried green tomato, house pepper jelly and arugula on a brioche bun",
//       cost: 9.5,
//       allergens: [],
//       food_name: "Fried Green Tomato Burger",
//       location: {
//         location_id: 0,
//         name: "Soul",
//         dining_hall: "cafeventanas"
//       },
//       numRecommend: 0
//     },
//     {
//       location: {
//         name: "Soul",
//         dining_hall: "cafeventanas",
//         location_id: 0
//       },
//       food_id: "264",
//       rating: 5,
//       allergens: [],
//       numRecommend: 0,
//       food_name: "Fried Green Tomato Sandwich",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       cost: 7.5,
//       description: "Fried Green Tomato slices with a spicy Pepper Jelly and a Pimento Cheese Spread served on a King's Hawaiian bun and your choice of side."
//     },
//     {
//       cost: 10.5,
//       rating: 5,
//       description: "House made pulled pork, Sweet Baby Ray's BBQ sauce, southern slaw and creole aioli on a brioche bun",
//       food_name: "Pulled Pork Sandwich",
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Soul",
//         dining_hall: "cafeventanas",
//         location_id: 0
//       },
//       food_id: "265",
//       numRecommend: 0,
//       numReviews: 0,
//       allergens: []
//     },
//     {
//       cost: 4.75,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       food_name: "Banana Pudding",
//       allergens: [],
//       location: {
//         name: "Soul",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       food_id: "266",
//       numRecommend: 0,
//       numReviews: 0,
//       description: "Banana pudding with vanilla wafers"
//     },
//     {
//       numRecommend: 0,
//       allergens: [],
//       rating: 5,
//       cost: 3.75,
//       img: "/images/placeHolderImage.png",
//       food_name: "Collard Greens w/ Bacon",
//       description: "Collard greens and bacon slow simmered with seasoning and vinegoar",
//       food_id: "267",
//       location: {
//         name: "Soul",
//         dining_hall: "cafeventanas",
//         location_id: 0
//       },
//       numReviews: 0
//     },
//     {
//       allergens: [],
//       location: {
//         name: "Soul",
//         location_id: 0,
//         dining_hall: "cafeventanas"
//       },
//       numReviews: 0,
//       food_name: "David's Double Chocolate Chip Cookie",
//       cost: 2.5,
//       rating: 5,
//       description: "David's Double Chocolate Chip Cookie",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       food_id: "268"
//     },
//     {
//       cost: 2.5,
//       allergens: [],
//       description: "David's Oatmeal Raisin Cookie",
//       location: {
//         name: "Soul",
//         dining_hall: "cafeventanas",
//         location_id: 0
//       },
//       numReviews: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       food_id: "269",
//       food_name: "David's Oatmeal Raisin Cookie",
//       numRecommend: 0
//     },
//     {
//       food_id: "27",
//       numRecommend: 0,
//       description: "Hawaiian bun with Fried egg, fried hashbrown triangle, american cheese and our signature triton sauce served with choice of side",
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "TritonGrill"
//       },
//       allergens: [],
//       food_name: "King Triton Breakfast Sandwich",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       cost: 7,
//       rating: 5
//     },
//     {
//       rating: 5,
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Soul"
//       },
//       allergens: [],
//       food_name: "Fried Potato Wedges",
//       food_id: "270",
//       cost: 3.75,
//       numReviews: 0,
//       description: "Fried seasoned potato wedges",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0
//     },
//     {
//       food_name: "Grilled Walnut Acorn Squash",
//       cost: 3.5,
//       location: {
//         location_id: 0,
//         name: "Soul",
//         dining_hall: "cafeventanas"
//       },
//       food_id: "271",
//       rating: 5,
//       description: "Grilled acorn squash drizzled in walnut dressing and topped with pomegranate and pumpkin seeds",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       numRecommend: 0,
//       allergens: []
//     },
//     {
//       numRecommend: 0,
//       cost: 3.75,
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Soul"
//       },
//       food_id: "272",
//       rating: 5,
//       food_name: "Mac and Cheese",
//       numReviews: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       description: "Cavatappi Pasta, tossed in a house made Smoked Gouda Queso sauce, Cheddar, & Pepper Jack Cheeses baked together until golden brown"
//     },
//     {
//       allergens: [],
//       rating: 5,
//       cost: 5,
//       numReviews: 0,
//       food_name: "Roasted Root Vegetables",
//       food_id: "273",
//       description: "Roasted seasoned beets, carrots, sweet potatoes, turnips and garbanzo beans topped with a drizzle of remoulade sauce",
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         name: "Soul",
//         dining_hall: "cafeventanas"
//       },
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       numReviews: 0,
//       location: {
//         dining_hall: "cafeventanas",
//         location_id: 0,
//         name: "Soul"
//       },
//       food_name: "Skillet Cornbread",
//       allergens: [],
//       food_id: "274",
//       cost: 3,
//       description: "Our house baked Cornbread with the addition of Pancetta, Whole Kernel Corn and chopped Jalapeno Peppers",
//       rating: 5,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       description: "Cabbage and carrot slaw dressed with a house made pepper jelly ",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       location: {
//         location_id: 0,
//         dining_hall: "cafeventanas",
//         name: "Soul"
//       },
//       cost: 3.75,
//       numReviews: 0,
//       food_id: "275",
//       allergens: [],
//       food_name: "Southern Slaw"
//     },
//     {
//       description: "Steel cut oats with pumpkin and fall spices. Topped with homemade granola. ",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "foodworx",
//         location_id: 0,
//         name: "Web Daily Specials"
//       },
//       rating: 5,
//       food_name: "Pumpkin Overnight Oats",
//       allergens: [],
//       numReviews: 0,
//       cost: 5.5,
//       food_id: "276"
//     },
//     {
//       rating: 5,
//       numReviews: 0,
//       allergens: [],
//       cost: 2.5,
//       description: "Refried pinto beans",
//       img: "/images/placeHolderImage.png",
//       food_id: "277",
//       numRecommend: 0,
//       food_name: "Refried Beans",
//       location: {
//         location_id: 0,
//         dining_hall: "foodworx",
//         name: "Web Daily Specials"
//       }
//     },
//     {
//       cost: 3.75,
//       numRecommend: 0,
//       food_name: "Tater Tots",
//       location: {
//         location_id: 0,
//         name: "Web Daily Specials",
//         dining_hall: "foodworx"
//       },
//       numReviews: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       food_id: "278",
//       description: "Crispy potato barrels.",
//       rating: 5
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       numReviews: 0,
//       numRecommend: 0,
//       food_name: "Turkey Sausage Patty",
//       description: "Roasted turkey sausage patty. ",
//       cost: 2,
//       food_id: "279",
//       allergens: [],
//       location: {
//         dining_hall: "foodworx",
//         location_id: 0,
//         name: "Web Daily Specials"
//       }
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       cost: 8.5,
//       numReviews: 0,
//       description: "Hawaiian bun with Fried egg, Turkey sausage patty, fried hashbrown triangle, american cheese and our signature triton sauce Served with a choice of side.",
//       food_name: "Sausage King Triton Sandwich",
//       allergens: [],
//       rating: 5,
//       numRecommend: 0,
//       food_id: "28",
//       location: {
//         location_id: 0,
//         name: "TritonGrill",
//         dining_hall: "64degrees"
//       }
//     },
//     {
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         name: "Web Daily Specials",
//         dining_hall: "foodworx"
//       },
//       food_id: "280",
//       numReviews: 0,
//       description: "Vegan veggie sausage.",
//       cost: 2,
//       food_name: "Veggie Sausage",
//       rating: 5
//     },
//     {
//       food_id: "281",
//       location: {
//         name: "Web Daily Specials",
//         dining_hall: "foodworx",
//         location_id: 0
//       },
//       allergens: [],
//       numReviews: 0,
//       cost: 8.5,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_name: "Bacon Breakfast Burrito",
//       rating: 5,
//       description: "Scrambled eggs, bacon, refried beans, tater tots, pico de gallo, cheddar and jack cheese on a choice of tortilla."
//     },
//     {
//       food_id: "282",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       numRecommend: 0,
//       food_name: "Bacon Egg & Cheese Bagel",
//       location: {
//         name: "Web Daily Specials",
//         dining_hall: "foodworx",
//         location_id: 0
//       },
//       cost: 7.75,
//       rating: 5,
//       description: "Toasted plain bagel sandwich with bacon, scrambled eggs, and melted cheddar cheese",
//       allergens: []
//     },
//     {
//       cost: 7,
//       food_id: "283",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       description: "Scrambled eggs, bacon, tater tots, pico de gallo, cheddar and pepper jack cheese.",
//       food_name: "Bacon Egg Bowl",
//       location: {
//         name: "Web Daily Specials",
//         dining_hall: "foodworx",
//         location_id: 0
//       },
//       numReviews: 0,
//       allergens: [],
//       rating: 5
//     },
//     {
//       allergens: [],
//       food_name: "Breakfast Burrito",
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_id: "284",
//       numReviews: 0,
//       cost: 6.75,
//       description: "Scrambled eggs, refried beans, tater tots, pico de gallo, cheddar and jack cheese on a choice of tortilla.",
//       location: {
//         name: "Web Daily Specials",
//         dining_hall: "foodworx",
//         location_id: 0
//       }
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       food_id: "285",
//       numReviews: 0,
//       description: "Toasted plain bagel sandwich with scrambled eggs and melted cheddar cheese",
//       allergens: [],
//       rating: 5,
//       location: {
//         dining_hall: "foodworx",
//         location_id: 0,
//         name: "Web Daily Specials"
//       },
//       cost: 6.5,
//       numRecommend: 0,
//       food_name: "Egg & Cheese Bagel"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       food_name: "Egg Bowl",
//       rating: 5,
//       numRecommend: 0,
//       description: "Scrambled eggs, tater tots, pico de gallo, cheddar and pepper jack cheese.",
//       allergens: [],
//       cost: 5.5,
//       food_id: "286",
//       location: {
//         location_id: 0,
//         dining_hall: "foodworx",
//         name: "Web Daily Specials"
//       },
//       numReviews: 0
//     },
//     {
//       rating: 5,
//       cost: 8.5,
//       description: "Scrambled eggs, beans, turkey sausage, tater tots and cheese wrapped on a choice of tortilla.",
//       food_id: "287",
//       allergens: [],
//       location: {
//         name: "Web Daily Specials",
//         location_id: 0,
//         dining_hall: "foodworx"
//       },
//       numRecommend: 0,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       food_name: "Sausage Breakfast Burrito"
//     },
//     {
//       description: "Toasted plain bagel sandwich with turkey sausage, scrambled eggs, and melted cheddar cheese",
//       cost: 7.75,
//       allergens: [],
//       location: {
//         dining_hall: "foodworx",
//         location_id: 0,
//         name: "Web Daily Specials"
//       },
//       rating: 5,
//       numRecommend: 0,
//       food_id: "288",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       food_name: "Sausage Egg & Cheese Bagel"
//     },
//     {
//       location: {
//         location_id: 0,
//         name: "Web Daily Specials",
//         dining_hall: "foodworx"
//       },
//       cost: 7,
//       numRecommend: 0,
//       food_name: "Sausage Egg Bowl",
//       allergens: [],
//       description: "Scrambled eggs, turkey sausage, tater tots, pico de gallo, cheddar and pepper jack cheese.",
//       food_id: "289",
//       numReviews: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       cost: 8.5,
//       food_id: "29",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         name: "TritonGrill",
//         dining_hall: "64degrees"
//       },
//       rating: 5,
//       numReviews: 0,
//       description: "Hawaiian bun with Fried egg, veggie sausage patty, fried hashbrown triangle, american cheese and our signature triton sauce. Served with a choice of side.",
//       allergens: [],
//       food_name: "Veggie Sausage King Triton sandwich"
//     },
//     {
//       numReviews: 0,
//       cost: 7.75,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         name: "Web Daily Specials",
//         dining_hall: "foodworx"
//       },
//       food_id: "290",
//       food_name: "Veg Sausage Egg & Cheese Bagel",
//       description: "Toasted plain bagel sandwich with veggie sausage, scrambled eggs, and melted cheddar cheese",
//       rating: 5
//     },
//     {
//       allergens: [],
//       food_id: "291",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       food_name: "Veggie Sausage Breakfast Burrito",
//       description: "Scrambled eggs, veggie sausage, refried beans, tater tots, pico de gallo, cheddar and jack on a choice of tortilla.",
//       numReviews: 0,
//       location: {
//         dining_hall: "foodworx",
//         name: "Web Daily Specials",
//         location_id: 0
//       },
//       cost: 8.5,
//       rating: 5
//     },
//     {
//       food_name: "Veggie Sausage Egg Bowl",
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       description: "Scrambled eggs, veggie sausage, tater tots, pico de gallo, cheddar and pepper jack cheese.\u003CBR\u003E",
//       cost: 7,
//       numReviews: 0,
//       numRecommend: 0,
//       food_id: "292",
//       location: {
//         name: "Web Daily Specials",
//         location_id: 0,
//         dining_hall: "foodworx"
//       },
//       rating: 5
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       cost: 9.5,
//       food_name: "Sliced Ham",
//       numReviews: 0,
//       location: {
//         name: "Web Daily Specials",
//         dining_hall: "foodworx",
//         location_id: 0
//       },
//       food_id: "293",
//       numRecommend: 0,
//       description: "Sliced honey smoked ham",
//       rating: 5,
//       allergens: []
//     },
//     {
//       numRecommend: 0,
//       cost: 9.5,
//       location: {
//         dining_hall: "foodworx",
//         location_id: 0,
//         name: "Web Daily Specials"
//       },
//       food_id: "294",
//       food_name: "Sliced Turkey",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       description: "sliced turkey breast",
//       rating: 5,
//       allergens: []
//     },
//     {
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       food_id: "295",
//       rating: 5,
//       location: {
//         location_id: 0,
//         dining_hall: "foodworx",
//         name: "Web Daily Specials"
//       },
//       numRecommend: 0,
//       cost: 11,
//       numReviews: 0,
//       description: "Yellowfin tuna served over your choice of base with edamame, cucumber, red onion, avocado, green onion, nori, sesame seeds, and poke sauce.",
//       food_name: "Ahi Poke Bowl"
//     },
//     {
//       location: {
//         name: "Web Daily Specials",
//         location_id: 0,
//         dining_hall: "foodworx"
//       },
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       food_name: "BYO Salad",
//       food_id: "296",
//       rating: 5,
//       description: "Build your salad with your choice of greens, topping, and dressing. Also, you can add your choice of protein.",
//       cost: 7.75,
//       numReviews: 0
//     },
//     {
//       description: "Romaine and spring greens with tomato, egg, bacon, bleu cheese, avocado, and ranch dressing",
//       location: {
//         dining_hall: "foodworx",
//         name: "Web Daily Specials",
//         location_id: 0
//       },
//       food_id: "297",
//       food_name: "Chicken Chop Salad",
//       cost: 10.5,
//       numRecommend: 0,
//       numReviews: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       allergens: []
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       allergens: [],
//       location: {
//         location_id: 0,
//         dining_hall: "foodworx",
//         name: "Web Daily Specials"
//       },
//       food_name: "FW Fall Harvest Salad",
//       description: "Fall salad with pear, cranberries, watermelon radish, spiced pecans, goat cheese, and grapes.",
//       cost: 8.5,
//       rating: 5,
//       numRecommend: 0,
//       food_id: "298"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       numReviews: 0,
//       description: "Choice of base with tofu, red onion, red bell pepper, cherry tomato, avocado, cucumber, mango, green onion, nori, and lava sauce",
//       numRecommend: 0,
//       food_id: "299",
//       cost: 8,
//       location: {
//         location_id: 0,
//         dining_hall: "foodworx",
//         name: "Web Daily Specials"
//       },
//       food_name: "Lava Tofu Poke Bowl",
//       allergens: []
//     },
//     {
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Taqueria"
//       },
//       allergens: [],
//       numRecommend: 0,
//       description: "Whole egg, cooked to order. ",
//       cost: 1.5,
//       food_id: "3",
//       rating: 5,
//       food_name: "Fried Egg",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "TritonGrill"
//       },
//       rating: 5,
//       food_id: "30",
//       description: "Toasted wheat bread with avocado, tomato, feta cheese and cilantro",
//       food_name: "Avocado Toast",
//       cost: 5.75,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       allergens: [],
//       numReviews: 0
//     },
//     {
//       rating: 5,
//       description: "Salmon served over your choice of base with cucumber, carrots, green onions, wonton strips, and ponzu sauce. ",
//       numReviews: 0,
//       food_name: "Salmon Poke Bowl",
//       food_id: "300",
//       allergens: [],
//       numRecommend: 0,
//       cost: 11,
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         dining_hall: "foodworx",
//         name: "Web Daily Specials"
//       }
//     },
//     {
//       food_name: "Triton Caesar Salad",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       description: "Romaine lettuce with parmesan cheese, tomatoes, croutons, and sunflower seeds tossed in caesar dressing ",
//       allergens: [],
//       rating: 5,
//       location: {
//         dining_hall: "foodworx",
//         location_id: 0,
//         name: "Web Daily Specials"
//       },
//       numReviews: 0,
//       cost: 7.75,
//       food_id: "301"
//     },
//     {
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       description: "Flatbread, BBQ sauce, chicken breast, mozzarella, red onion, cilantro",
//       food_id: "302",
//       location: {
//         location_id: 0,
//         dining_hall: "foodworx",
//         name: "Web Daily Specials"
//       },
//       numReviews: 0,
//       cost: 8,
//       allergens: [],
//       rating: 5,
//       food_name: "BBQ Chicken Pizza"
//     },
//     {
//       numRecommend: 0,
//       numReviews: 0,
//       food_id: "303",
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Web Daily Specials",
//         location_id: 0,
//         dining_hall: "foodworx"
//       },
//       description: "Marinara sauce, mozzarella and permesan cheese. ",
//       food_name: "Cheese Pizza",
//       cost: 7,
//       allergens: [],
//       rating: 5
//     },
//     {
//       description: "Flatbread, roast beef, black pepper mayo, cheddar cheese, caramelized onions, tomato, iceberg lettuce.",
//       img: "/images/placeHolderImage.png",
//       food_id: "304",
//       cost: 9.75,
//       allergens: [],
//       numReviews: 0,
//       location: {
//         location_id: 0,
//         name: "Web Daily Specials",
//         dining_hall: "foodworx"
//       },
//       numRecommend: 0,
//       food_name: "City Slicker Sandwich",
//       rating: 5
//     },
//     {
//       rating: 5,
//       description: "Grilled eggplant sandiwch, Amoroso roll, sundried tomato-spinach spread, yellow squash, fresh mozzarella, green leaf and pickled fennel.\u003CBR\u003E",
//       numReviews: 0,
//       allergens: [],
//       location: {
//         dining_hall: "foodworx",
//         name: "Web Daily Specials",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       cost: 9,
//       food_id: "305",
//       food_name: "Grilled Eggplant Sandwich"
//     },
//     {
//       numRecommend: 0,
//       numReviews: 0,
//       rating: 5,
//       location: {
//         dining_hall: "foodworx",
//         location_id: 0,
//         name: "Web Daily Specials"
//       },
//       allergens: [],
//       food_id: "306",
//       food_name: "Italian Panini Sub",
//       description: "Toasted sandwich with turkey, ham, salami, provolone, lettuce, and tomato on an 8\" roll with a dijonaise spread",
//       img: "/images/placeHolderImage.png",
//       cost: 8.5
//     },
//     {
//       allergens: [],
//       location: {
//         dining_hall: "foodworx",
//         location_id: 0,
//         name: "Web Daily Specials"
//       },
//       description: "Personal size pizza with tomato sauce, mozzarella cheese, pepperoni, italian sausage, ham",
//       food_id: "307",
//       cost: 8.5,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_name: "Meat Lover's Personal Pizza",
//       numReviews: 0,
//       rating: 5
//     },
//     {
//       rating: 5,
//       allergens: [],
//       food_id: "308",
//       description: "Marinara sauce, pepperoni, mozzarella and parmesan cheese.",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_name: "Pepperoni Pizza",
//       cost: 8,
//       location: {
//         location_id: 0,
//         name: "Web Daily Specials",
//         dining_hall: "foodworx"
//       },
//       numReviews: 0
//     },
//     {
//       numReviews: 0,
//       cost: 8,
//       location: {
//         location_id: 0,
//         name: "Web Daily Specials",
//         dining_hall: "foodworx"
//       },
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       food_id: "309",
//       food_name: "Personal Veggie Pizza",
//       numRecommend: 0,
//       description: "Marinara sauce, mozzarella and parmesan cheese, mushrooms, red bell pepper, and yellow onions. "
//     },
//     {
//       rating: 5,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       allergens: [],
//       description: "Buttermilk pancakes",
//       food_id: "31",
//       food_name: "Buttermilk Pancakes",
//       cost: 6,
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "TritonGrill"
//       }
//     },
//     {
//       location: {
//         location_id: 0,
//         dining_hall: "foodworx",
//         name: "Web Daily Specials"
//       },
//       rating: 5,
//       numRecommend: 0,
//       food_id: "310",
//       numReviews: 0,
//       cost: 9.5,
//       allergens: [],
//       food_name: "Pesto Turkey Sandwich",
//       description: "Sliced turkey breast, pesto aioli, cheddar cheese, bacon, and arugula on flatbread",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       food_name: "Santa Fe Chicken Sandwich",
//       rating: 5,
//       numReviews: 0,
//       food_id: "311",
//       description: "Flatbread, deli chicken breast, chipotle aioli, red onions, tomato, pepper jack cheese. ",
//       location: {
//         name: "Web Daily Specials",
//         location_id: 0,
//         dining_hall: "foodworx"
//       },
//       numRecommend: 0,
//       allergens: [],
//       cost: 9.5
//     },
//     {
//       rating: 5,
//       cost: 4.75,
//       description: "Creamy soup with tomato, roasted red peppers, gouda cheese, herbs and spices.",
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "foodworx",
//         name: "Web Daily Specials",
//         location_id: 0
//       },
//       allergens: [],
//       numReviews: 0,
//       food_id: "312",
//       food_name: "Tomato Red Pepper Gouda Bisque",
//       numRecommend: 0
//     },
//     {
//       food_id: "313",
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       food_name: "Blackened Steak Plate",
//       numReviews: 0,
//       location: {
//         dining_hall: "foodworx",
//         name: "Web Daily Specials",
//         location_id: 0
//       },
//       rating: 5,
//       numRecommend: 0,
//       description: "Flame grilled blackened steak served with a side of grilled vegetables and rice",
//       cost: 12
//     },
//     {
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "foodworx",
//         name: "Web Daily Specials",
//         location_id: 0
//       },
//       description: "Flame grilled salmon served with a side of grilled vegetables, and rice.",
//       cost: 14,
//       allergens: [],
//       numRecommend: 0,
//       numReviews: 0,
//       food_id: "314",
//       food_name: "Grilled Salmon Plate"
//     },
//     {
//       numRecommend: 0,
//       rating: 5,
//       food_id: "315",
//       allergens: [],
//       cost: 10,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       description: "Grilled Mediterranean vegetable kebab with orange sauce served over farro tabbouleh with honey aleppo sauce",
//       food_name: "Mediterranean Veggie Kebab Plate",
//       location: {
//         dining_hall: "foodworx",
//         location_id: 0,
//         name: "Web Daily Specials"
//       }
//     },
//     {
//       description: "Grilled Mediterranean vegetables with orange sauce.",
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       numRecommend: 0,
//       numReviews: 0,
//       food_id: "316",
//       cost: 5,
//       location: {
//         dining_hall: "foodworx",
//         name: "Web Daily Specials",
//         location_id: 0
//       },
//       food_name: "Mediterranean Veggie Kebab",
//       allergens: []
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       description: "Everything bagel, smoked salmon, cream cheese, capers, tomato and red onion",
//       food_name: "Bagel Bar with Smoked Salmon",
//       cost: 9.75,
//       location: {
//         location_id: 0,
//         name: "Counter Culture",
//         dining_hall: "ovt"
//       },
//       numReviews: 0,
//       food_id: "317",
//       rating: 5,
//       allergens: [],
//       numRecommend: 0
//     },
//     {
//       location: {
//         dining_hall: "ovt",
//         location_id: 0,
//         name: "Counter Culture"
//       },
//       food_id: "318",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       numReviews: 0,
//       food_name: "Breakfast BLT Bagel",
//       description: "Plain bagel, egg, smoked bacon, sliced tomato, shredded lettuce & cream cheese",
//       numRecommend: 0,
//       cost: 8.5,
//       rating: 5
//     },
//     {
//       allergens: [],
//       numRecommend: 0,
//       food_name: "Continental Breakfast Bagel",
//       numReviews: 0,
//       description: "Egg, turkey sausage patty, plain cream cheese served on a plain bagel with a side of maple syrup",
//       img: "/images/placeHolderImage.png",
//       food_id: "319",
//       cost: 8.5,
//       rating: 5,
//       location: {
//         dining_hall: "ovt",
//         name: "Counter Culture",
//         location_id: 0
//       }
//     },
//     {
//       description: "Grilled custard battered Challah french toast with a sprinkle of powdered sugar",
//       cost: 6,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "TritonGrill"
//       },
//       food_name: "French Toast",
//       numReviews: 0,
//       allergens: [],
//       food_id: "32",
//       rating: 5
//     },
//     {
//       food_name: "Farmhouse Breakfast Bagel",
//       numRecommend: 0,
//       numReviews: 0,
//       food_id: "320",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       description: "Egg, turkey sausage patty, bacon, and cream cheese served on an everything bagel",
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Counter Culture"
//       },
//       cost: 9.5,
//       rating: 5
//     },
//     {
//       location: {
//         location_id: 0,
//         name: "Counter Culture",
//         dining_hall: "ovt"
//       },
//       rating: 5,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_id: "321",
//       description: "Egg quiche bite on pastry dough with ham, jalapeno, cheddar jack cheeses, and green onion",
//       cost: 5.5,
//       allergens: [],
//       food_name: "Jalapeno Ham Egg Bite"
//     },
//     {
//       rating: 5,
//       cost: 9,
//       numReviews: 0,
//       description: "Toasted bagel, baby spinach, sliced tomato, avocado, JUST egg & tofu cream cheese",
//       food_name: "Veggie Avocado Bagel",
//       location: {
//         name: "Counter Culture",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       numRecommend: 0,
//       allergens: [],
//       food_id: "322",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       numRecommend: 0,
//       numReviews: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         name: "Counter Culture",
//         dining_hall: "ovt"
//       },
//       cost: 4,
//       food_name: "Chocolate Chip Cannoli",
//       food_id: "323",
//       allergens: [],
//       description: "Cannoli shell filled with chocolate ricotta filling with chocolate chips"
//     },
//     {
//       allergens: [],
//       description: "David's Gourmet Chocolate Chunk Cookie",
//       numReviews: 0,
//       food_name: "Chocolate Chunk Cookie",
//       img: "/images/placeHolderImage.png",
//       food_id: "324",
//       location: {
//         dining_hall: "ovt",
//         name: "Counter Culture",
//         location_id: 0
//       },
//       cost: 2.5,
//       numRecommend: 0,
//       rating: 5
//     },
//     {
//       food_id: "325",
//       food_name: "Coconut Chocolate Macaroons",
//       cost: 3.5,
//       location: {
//         dining_hall: "ovt",
//         name: "Counter Culture",
//         location_id: 0
//       },
//       numRecommend: 0,
//       allergens: [],
//       rating: 5,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       description: "2 sweet coconut macaroons with chocolate ganache coating"
//     },
//     {
//       cost: 3,
//       numReviews: 0,
//       food_id: "326",
//       rating: 5,
//       food_name: "Hershey's Decadent Red Velvet Cookies",
//       description: "Hershey's Decadent Red Velvet Cookies",
//       numRecommend: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Counter Culture",
//         location_id: 0,
//         dining_hall: "ovt"
//       }
//     },
//     {
//       food_name: "Lemon Fruit Tart",
//       food_id: "327",
//       img: "/images/placeHolderImage.png",
//       cost: 3.5,
//       numRecommend: 0,
//       allergens: [],
//       description: "Pastry shell filled with lemon curd butter cream and topped with fresh berries",
//       location: {
//         location_id: 0,
//         name: "Counter Culture",
//         dining_hall: "ovt"
//       },
//       rating: 5,
//       numReviews: 0
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       numReviews: 0,
//       description: "House baked pumpkin cupcake with cream cheese buttercream frosting",
//       food_name: "Pumpkin Bread Cupcake",
//       food_id: "328",
//       cost: 3.5,
//       numRecommend: 0,
//       allergens: [],
//       location: {
//         name: "Counter Culture",
//         location_id: 0,
//         dining_hall: "ovt"
//       }
//     },
//     {
//       description: "Chocolate cupcake with salted caramel buttercream frosting",
//       food_name: "Salted Caramel Chocolate Cupcake",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       cost: 3.5,
//       food_id: "329",
//       location: {
//         dining_hall: "ovt",
//         name: "Counter Culture",
//         location_id: 0
//       },
//       rating: 5,
//       numRecommend: 0,
//       allergens: []
//     },
//     {
//       description: "Cinnamon swirl bread baked with egg custard and cream and topped with syrup",
//       allergens: [],
//       cost: 3.5,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "TritonGrill"
//       },
//       numRecommend: 0,
//       food_name: "French Toast Casserole",
//       rating: 5,
//       food_id: "33"
//     },
//     {
//       rating: 5,
//       food_id: "330",
//       food_name: "Acai Bowl",
//       cost: 10.5,
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Counter Culture"
//       },
//       description: "Acai sorbet with strawberry, mango, banana, blueberry, coconut and granola",
//       numRecommend: 0,
//       numReviews: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       cost: 10,
//       rating: 5,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       food_id: "331",
//       allergens: [],
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Counter Culture"
//       },
//       description: "Acai sorbet topped with peaches, strawberries, banana, granola and almonds",
//       numRecommend: 0,
//       food_name: "Peach Dream Power Bowl"
//     },
//     {
//       numRecommend: 0,
//       allergens: [],
//       food_name: "Acai Smoothie",
//       numReviews: 0,
//       description: "Acai sorbet blended with orange juice, banana, strawberry, and blueberry",
//       food_id: "332",
//       cost: 8,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Counter Culture"
//       }
//     },
//     {
//       allergens: [],
//       food_name: "Apple Kale Smoothie",
//       rating: 5,
//       numReviews: 0,
//       cost: 6.75,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         name: "Counter Culture",
//         dining_hall: "ovt"
//       },
//       description: "Yogurt based smoothie blended with coconut milk, banana, apple, spinach, and kale",
//       food_id: "333"
//     },
//     {
//       numRecommend: 0,
//       rating: 5,
//       numReviews: 0,
//       food_name: "Pineapple Mango Smoothie",
//       cost: 6.75,
//       allergens: [],
//       food_id: "334",
//       location: {
//         name: "Counter Culture",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       description: "Fruit smoothie made with pineapple, banana, and mango.",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       allergens: [],
//       food_name: "Strawberry Banana",
//       description: "Yogurt based smoothie blended with strawberries, bananas and coconut milk.",
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Counter Culture"
//       },
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_id: "335",
//       rating: 5,
//       cost: 7
//     },
//     {
//       numReviews: 0,
//       numRecommend: 0,
//       food_name: "BLT Bagel",
//       allergens: [],
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       food_id: "336",
//       cost: 9,
//       description: "Bacon, lettuce, tomato, jalapeno cream cheese served on an everything bagel. ",
//       location: {
//         name: "Counter Culture",
//         dining_hall: "ovt",
//         location_id: 0
//       }
//     },
//     {
//       cost: 3,
//       numReviews: 0,
//       numRecommend: 0,
//       location: {
//         dining_hall: "ovt",
//         name: "Scholars Italian",
//         location_id: 0
//       },
//       rating: 5,
//       allergens: [],
//       description: "Romaine and arugula greens with tomato, marinated artichokes, parmesan cheese and creamy caesar dressing",
//       food_name: "Half OV Caesar Salad",
//       food_id: "337",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       food_name: "OV Side Salad",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       numReviews: 0,
//       description: "House garden salad with spring mix, tomatoes, cucumbers, carrots and jalapeno ranch dressing",
//       rating: 5,
//       cost: 3,
//       food_id: "338",
//       location: {
//         name: "Scholars Italian",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       numRecommend: 0
//     },
//     {
//       numReviews: 0,
//       allergens: [],
//       food_id: "339",
//       cost: 8.5,
//       food_name: "Spaghetti & Turkey Meatballs",
//       location: {
//         name: "Scholars Italian",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       description: "Spaghetti pasta tossed with marinara sauce and turkey meatballs laayered on top, served with focaccia bread",
//       rating: 5
//     },
//     {
//       numReviews: 0,
//       location: {
//         name: "TritonGrill",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       numRecommend: 0,
//       food_id: "34",
//       allergens: [],
//       cost: 7,
//       description: "French toast with pumpkin spiced whipped cream cheese, topped with oat strussel and toasted pecan pieces ",
//       food_name: "French Toast w/ Pumpkin Cream Cheese",
//       img: "/images/placeHolderImage.png",
//       rating: 5
//     },
//     {
//       location: {
//         name: "Scholars Italian",
//         location_id: 0,
//         dining_hall: "ovt"
//       },
//       numRecommend: 0,
//       allergens: [],
//       numReviews: 0,
//       cost: 7,
//       food_name: "Spaghetti Marinara",
//       rating: 5,
//       food_id: "340",
//       description: "Spaghetti with marinara sauce and cheese",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       food_name: "Classic Red Top Detroit Pizza",
//       numReviews: 0,
//       location: {
//         name: "Scholars Italian",
//         location_id: 0,
//         dining_hall: "ovt"
//       },
//       description: "House made Detroit pizza dough topped with Monterey Jack cheese, baked then topped with house made marinara and garnished with parmesan basil",
//       food_id: "341",
//       rating: 5,
//       numRecommend: 0,
//       cost: 6.25,
//       allergens: [],
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       food_id: "342",
//       allergens: [],
//       numRecommend: 0,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       description: "House made Detroit pizza dough topped with monterey jack, mozzarella cheeses, pepperoni, then baked and topped with marinara sauce and garnished with parmesan and basil",
//       location: {
//         name: "Scholars Italian",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       rating: 5,
//       cost: 7.25,
//       food_name: "Old World Pepperoni Detroit Pizza"
//     },
//     {
//       rating: 5,
//       numRecommend: 0,
//       cost: 7.25,
//       food_name: "Veggie Pesto Detroit Pizza",
//       description: "Detroit style pizza with pesto sauce topped with a blend of cheese, onion, sweet mini peppers, olives, mushrooms and artichoke",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       food_id: "343",
//       location: {
//         name: "Scholars Italian",
//         location_id: 0,
//         dining_hall: "ovt"
//       },
//       allergens: []
//     },
//     {
//       location: {
//         name: "Scholars Italian",
//         location_id: 0,
//         dining_hall: "ovt"
//       },
//       allergens: [],
//       cost: 3,
//       numRecommend: 0,
//       food_name: "Blackened Chicken Thigh",
//       description: "Spice crusted seared chicken thigh.",
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       numReviews: 0,
//       food_id: "344"
//     },
//     {
//       food_name: "Fall Cobb salad",
//       cost: 10.5,
//       img: "/images/placeHolderImage.png",
//       description: "Romaine & spring mix lettuces tossed with roasted butternut squash, hard boiled egg, blackened chicken, diced granny smith apples, chopped bacon crumbled feta cheese and buttermilk ranch dressing, topped with pepita seeds",
//       location: {
//         dining_hall: "ovt",
//         location_id: 0,
//         name: "Scholars Italian"
//       },
//       numReviews: 0,
//       rating: 5,
//       allergens: [],
//       numRecommend: 0,
//       food_id: "345"
//     },
//     {
//       allergens: [],
//       location: {
//         name: "Scholars Italian",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       cost: 8,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       rating: 5,
//       food_name: "Fall OV Chopped Salad",
//       description: "Mixed greens and broccoli slaw with apple, roasted butternut squash, almonds, grape tomato, hard boiled egg, and feta cheese with green goddess dressing.",
//       food_id: "346",
//       numRecommend: 0
//     },
//     {
//       location: {
//         name: "Scholars Italian",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       description: "Romaine and arugula greens with tomato, marinated artichokes, parmesan cheese and creamy caesar dressing",
//       numReviews: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       cost: 7,
//       allergens: [],
//       food_name: "OV Caesar Salad",
//       food_id: "347",
//       numRecommend: 0
//     },
//     {
//       description: "House garden salad with mix greens, tomatoes, cucumbers, carrots and jalapeno ranch dressing",
//       numRecommend: 0,
//       rating: 5,
//       location: {
//         name: "Scholars Italian",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       allergens: [],
//       numReviews: 0,
//       cost: 7,
//       food_name: "OV Green Salad",
//       img: "/images/placeHolderImage.png",
//       food_id: "348"
//     },
//     {
//       location: {
//         name: "Scholars Italian",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       food_id: "349",
//       numRecommend: 0,
//       rating: 5,
//       food_name: "Focaccia Caprese Sandwich",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       cost: 10,
//       description: "Home made foccacia with basil pesto, sliced tomatoes, mozzarella, basil, and arugula. ",
//       numReviews: 0
//     },
//     {
//       food_name: "Plant Based Bulgogi Fried Rice",
//       food_id: "35",
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "64degrees",
//         name: "TritonGrill",
//         location_id: 0
//       },
//       numRecommend: 0,
//       rating: 5,
//       cost: 7.5,
//       allergens: [],
//       description: "Stir fried jasmine rice with plant based bulgogi, topped with green onion and crunchy garlic chili oil",
//       numReviews: 0
//     },
//     {
//       rating: 5,
//       food_name: "Philly Cheesesteak Sandwich",
//       img: "/images/placeHolderImage.png",
//       food_id: "350",
//       location: {
//         name: "Scholars Italian",
//         location_id: 0,
//         dining_hall: "ovt"
//       },
//       numReviews: 0,
//       allergens: [],
//       cost: 10,
//       numRecommend: 0,
//       description: "Toasted hoagie roll with roasted Italian beef, caramelized onions, roasted mini peppers and cheese sauce"
//     },
//     {
//       description: "Turkey meatballs, spicy marinara, mozzarella and parmesan cheeses on a deli roll",
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       cost: 10,
//       allergens: [],
//       food_id: "351",
//       numReviews: 0,
//       food_name: "Turkey Meatball Sub Sandwich",
//       location: {
//         name: "Scholars Italian",
//         location_id: 0,
//         dining_hall: "ovt"
//       }
//     },
//     {
//       description: "Artisanal dough topped with garlic spread, blackened chicken, sliced tomatoes, scallions, crumbled bacon then baked and topped with ranch dressing",
//       location: {
//         dining_hall: "ovt",
//         location_id: 0,
//         name: "Scholars Pizza"
//       },
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_name: "Cali Chicken Bacon Ranch Pizza",
//       rating: 5,
//       numReviews: 0,
//       food_id: "352",
//       cost: 10.25,
//       allergens: []
//     },
//     {
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Scholars Pizza"
//       },
//       rating: 5,
//       description: "Oven fired dough brushed with garlic butter and topped with mozzarella cheese",
//       food_name: "Cheesy Garlic Bread",
//       cost: 4.5,
//       numRecommend: 0,
//       food_id: "353",
//       allergens: []
//     },
//     {
//       food_name: "Chicken Pesto Pizza",
//       cost: 10.25,
//       location: {
//         dining_hall: "ovt",
//         location_id: 0,
//         name: "Scholars Pizza"
//       },
//       food_id: "354",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       rating: 5,
//       allergens: [],
//       description: "Tender blackened chicken with mozzarella cheese, tomato, onion, and basil pesto sauce",
//       numRecommend: 0
//     },
//     {
//       allergens: [],
//       rating: 5,
//       location: {
//         dining_hall: "ovt",
//         name: "Scholars Pizza",
//         location_id: 0
//       },
//       cost: 10.25,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_id: "355",
//       numRecommend: 0,
//       description: "Artisan dough topped with mozzarella, roasted mushrooms, garlic sauce, red chili flakes, and baby arugula.",
//       food_name: "Garlic Wild Mushroom Pizza"
//     },
//     {
//       cost: 10.25,
//       food_id: "356",
//       description: "Napoletana house made artisanal dough with California grown tomato sauce, with fresh basil, fresh mozzarella and a frisee arugula garnish",
//       rating: 5,
//       numRecommend: 0,
//       allergens: [],
//       location: {
//         location_id: 0,
//         name: "Scholars Pizza",
//         dining_hall: "ovt"
//       },
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_name: "Margherita Pizza"
//     },
//     {
//       food_id: "357",
//       rating: 5,
//       cost: 10.25,
//       food_name: "Pepperoni Pizza",
//       numRecommend: 0,
//       location: {
//         dining_hall: "ovt",
//         name: "Scholars Pizza",
//         location_id: 0
//       },
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       description: "Napoletana house made artisanal dough with California tomato sauce, topped with mozzarella cheese and pepperoni"
//     },
//     {
//       food_name: "Roasted Butternut Ricotta Pizza",
//       food_id: "358",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       location: {
//         dining_hall: "ovt",
//         name: "Scholars Pizza",
//         location_id: 0
//       },
//       description: "Artisan dough topped with mozzarella, roasted butternut squash, caramelized onions, herb ricotta cheese, balsamic drizzle, and dried cranberries.",
//       numReviews: 0,
//       cost: 10.25,
//       allergens: []
//     },
//     {
//       food_id: "359",
//       description: "Napoletana house made artisanal dough with a spicy arrabbiata sauce and topped with mozzarella & parmesan cheese, italian sausage, blackened chicken and pepperoni",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       cost: 10.5,
//       numRecommend: 0,
//       food_name: "Spicy Meat Lovers",
//       allergens: [],
//       rating: 5,
//       location: {
//         location_id: 0,
//         name: "Scholars Pizza",
//         dining_hall: "ovt"
//       }
//     },
//     {
//       description: "Stir-fried jasmine rice with diced spam and egg",
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       numRecommend: 0,
//       location: {
//         dining_hall: "64degrees",
//         name: "TritonGrill",
//         location_id: 0
//       },
//       numReviews: 0,
//       food_name: "Spam Fried Rice w/ Egg",
//       food_id: "36",
//       cost: 7.5,
//       allergens: []
//     },
//     {
//       food_name: "The 4.0 BYO",
//       img: "/images/placeHolderImage.png",
//       description: "Napoletana house made artisanal dough, choice of sauce, mozzarella cheese, and up to 4 toppings.",
//       food_id: "360",
//       location: {
//         dining_hall: "ovt",
//         location_id: 0,
//         name: "Scholars Pizza"
//       },
//       numReviews: 0,
//       cost: 11.75,
//       allergens: [],
//       rating: 5,
//       numRecommend: 0
//     },
//     {
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Scholars Pizza",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       description: "Napoletana house made artisanal dough with a spicy arrabbiata sauce, topped with mozzarella cheese",
//       rating: 5,
//       numRecommend: 0,
//       food_name: "Undergrad Cheese Pizza",
//       cost: 8.75,
//       numReviews: 0,
//       food_id: "361"
//     },
//     {
//       allergens: [],
//       food_id: "362",
//       food_name: "Spinach Mushroom Linguini",
//       rating: 5,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       cost: 8,
//       numRecommend: 0,
//       location: {
//         dining_hall: "ovt",
//         location_id: 0,
//         name: "Scholars Italian"
//       },
//       description: "Linguinni pasta with a buttery porcini mushroom sauce, spinach, roasted butternut squash, and roasted mushrooms, served with basil parmesan cheese, pepitas, and focaccia bread."
//     },
//     {
//       description: "Beef kofta with lemon saffron rice, shepards salad, tabbouleh, pita, hummus, and choice of sauce",
//       food_id: "363",
//       numReviews: 0,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Spice"
//       },
//       rating: 5,
//       cost: 12,
//       food_name: "Beef Kofta Medi Plate"
//     },
//     {
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Spice"
//       },
//       food_name: "Chicken, Shawarma Medi Plate",
//       allergens: [],
//       numRecommend: 0,
//       description: "Chicken Shawarma with rice, shepherd's salad, tabbouleh, pita, tzatziki and choice of hummus",
//       cost: 13,
//       food_id: "364",
//       numReviews: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Spice",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       food_name: "Crispy Tofu Medi Plate",
//       food_id: "365",
//       numRecommend: 0,
//       numReviews: 0,
//       cost: 10,
//       description: "Crispy curry tofu with rice, shepherds salad, tabbouleh, pita, tzatziki, hummus and choice of sauce",
//       rating: 5,
//       allergens: []
//     },
//     {
//       numReviews: 0,
//       description: "Falafel with lemon saffron rice, shepard's salad, tabbouleh, pita, tzatziki and choice of hummus",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       location: {
//         name: "Spice",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       numRecommend: 0,
//       cost: 11,
//       food_name: "Falafel Medi Plate",
//       food_id: "366",
//       rating: 5
//     },
//     {
//       rating: 5,
//       numRecommend: 0,
//       numReviews: 0,
//       food_name: "Medi Plate",
//       allergens: [],
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Spice"
//       },
//       img: "/images/placeHolderImage.png",
//       cost: 12,
//       description: "Chicken Shawarma with lemon saffron rice, shepard's salad, tabbouleh, pita, tzatziki and choice of hummus",
//       food_id: "367"
//     },
//     {
//       rating: 5,
//       food_name: "Salmon Medi Plate",
//       description: "Mediterranean salmon with lemon saffron rice, shepard's salad, tabbouleh, pita, tzatziki and choice of hummus",
//       allergens: [],
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       cost: 14,
//       numReviews: 0,
//       location: {
//         name: "Spice",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       food_id: "368"
//     },
//     {
//       food_name: "Signature Rotisserie Chicken Plate",
//       cost: 13.75,
//       rating: 5,
//       location: {
//         name: "Spice",
//         location_id: 0,
//         dining_hall: "ovt"
//       },
//       description: "Spiced slow roasted quarter chicken served with choice of starch, harissa vegetables and pita triangles",
//       food_id: "369",
//       numRecommend: 0,
//       numReviews: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       allergens: [],
//       numReviews: 0,
//       numRecommend: 0,
//       location: {
//         dining_hall: "64degrees",
//         name: "Al Dente",
//         location_id: 0
//       },
//       rating: 5,
//       description: "Cooked chicken marinated in oil with garlic, salt and pepper.",
//       img: "/images/placeHolderImage.png",
//       food_id: "37",
//       food_name: "Grilled Chicken Breast",
//       cost: 1
//     },
//     {
//       food_name: "Vegetable Freekeh Risotto",
//       numRecommend: 0,
//       numReviews: 0,
//       allergens: [],
//       rating: 5,
//       cost: 8,
//       description: "Creamy freekeh coconut milk risotto with roasted harissa vegetables",
//       food_id: "370",
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Spice"
//       },
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       description: "A pita bread is layered with beef kofta kebab, shredded lettuce, shepards salad and crumbled feta, then rolled and wrapped in wax paper",
//       food_id: "371",
//       numRecommend: 0,
//       allergens: [],
//       cost: 10,
//       numReviews: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         name: "Spice",
//         dining_hall: "ovt"
//       },
//       food_name: "Beef Kofta Kebab Pita"
//     },
//     {
//       numReviews: 0,
//       numRecommend: 0,
//       food_id: "372",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       cost: 9.75,
//       location: {
//         dining_hall: "ovt",
//         name: "Spice",
//         location_id: 0
//       },
//       description: "Chicken shawarma with pickled shepard's salad, lettuce, tofeta and tzatziki",
//       food_name: "Chicken Shawarma Pita",
//       rating: 5
//     },
//     {
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Spice",
//         location_id: 0,
//         dining_hall: "ovt"
//       },
//       food_name: "Crispy Tofu Pita",
//       cost: 8,
//       allergens: [],
//       numReviews: 0,
//       numRecommend: 0,
//       food_id: "373",
//       description: "A pita is layered with roasted garlic hummus spread, crispy curry tofu, shredded lettuce and shepards salad, then rolled and wrapped in wax paper"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       food_id: "374",
//       cost: 9,
//       numRecommend: 0,
//       numReviews: 0,
//       rating: 5,
//       description: "Layered on pita bread is, shredded lettuce, OV's falafel, shepards salad topped with crumbled tofu feta, rolled and wrapped in wax paper",
//       food_name: "Falafel Pita",
//       allergens: [],
//       location: {
//         location_id: 0,
//         name: "Spice",
//         dining_hall: "ovt"
//       }
//     },
//     {
//       numReviews: 0,
//       food_id: "375",
//       numRecommend: 0,
//       food_name: "Falafel with a side of sauce",
//       location: {
//         location_id: 0,
//         name: "Spice",
//         dining_hall: "ovt"
//       },
//       description: "Falafel with sauce.",
//       rating: 5,
//       cost: 6,
//       img: "/images/placeHolderImage.png",
//       allergens: []
//     },
//     {
//       rating: 5,
//       allergens: [],
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Spice"
//       },
//       food_id: "376",
//       numReviews: 0,
//       description: "Seasoned steak fries fried and drizzled in toum garlic sauce",
//       numRecommend: 0,
//       food_name: "Garlic Fries",
//       img: "/images/placeHolderImage.png",
//       cost: 3.75
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "ovt",
//         location_id: 0,
//         name: "Spice"
//       },
//       food_name: "Hummus & Pita",
//       food_id: "377",
//       description: "Grilled pita bread and red pepper hummus",
//       allergens: [],
//       numReviews: 0,
//       cost: 3,
//       numRecommend: 0,
//       rating: 5
//     },
//     {
//       description: "Pickled onion, jalapeno, carrot, cabbage, and radish",
//       numRecommend: 0,
//       rating: 5,
//       cost: 3.75,
//       location: {
//         location_id: 0,
//         name: "Spice",
//         dining_hall: "ovt"
//       },
//       numReviews: 0,
//       allergens: [],
//       food_name: "Pickled Cabbage Escabeche",
//       food_id: "378",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       food_id: "379",
//       allergens: [],
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       cost: 3,
//       rating: 5,
//       numReviews: 0,
//       food_name: "Pita",
//       location: {
//         name: "Spice",
//         location_id: 0,
//         dining_hall: "ovt"
//       },
//       description: "Grilled pita bread triangles"
//     },
//     {
//       food_name: "Caesar Side Salad",
//       description: "Baby kale tossed with blistered tomatoes and bell peppers, edamame, parmesan crisps, roasted chickpeas, and jalapeno caesar dressing",
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Al Dente"
//       },
//       cost: 5,
//       allergens: [],
//       numRecommend: 0,
//       rating: 5,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       food_id: "38"
//     },
//     {
//       numRecommend: 0,
//       food_name: "Shepard's Salad",
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         name: "Spice",
//         dining_hall: "ovt"
//       },
//       food_id: "380",
//       allergens: [],
//       cost: 3,
//       numReviews: 0,
//       rating: 5,
//       description: "Fresh cucumber, tomato, and red onion in a red wine vinaigrette"
//     },
//     {
//       cost: 3,
//       description: "Steamed basmati rice",
//       location: {
//         name: "Spice",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       rating: 5,
//       food_name: "Basmati Rice",
//       numRecommend: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_id: "381"
//     },
//     {
//       description: "Parsley and bulgur wheat salad with carrot, celery, red onion, vinegar and spices.",
//       numRecommend: 0,
//       cost: 3,
//       location: {
//         dining_hall: "ovt",
//         location_id: 0,
//         name: "Spice"
//       },
//       food_id: "382",
//       img: "/images/placeHolderImage.png",
//       food_name: "Bulgur Tabbouleh",
//       numReviews: 0,
//       rating: 5,
//       allergens: []
//     },
//     {
//       food_id: "383",
//       location: {
//         name: "Spice",
//         location_id: 0,
//         dining_hall: "ovt"
//       },
//       cost: 12,
//       rating: 5,
//       food_name: "Beef Kofta Garlic Fries",
//       numRecommend: 0,
//       allergens: [],
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       description: "Garlic Steak Fries topped with beef kofta, israeli chick pea salad, and tzatziki sauce."
//     },
//     {
//       cost: 12,
//       description: "Romaine lettuce and spring mix with beef shawarma, cucumbers, tomatoes, red onion, kalamata olive, lemons, pepperoncini, tofeta and lemon-tarragon vinaigrette.",
//       allergens: [],
//       numRecommend: 0,
//       food_id: "384",
//       food_name: "Beef Kofta Greek Salad",
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "ovt",
//         location_id: 0,
//         name: "Spice"
//       },
//       rating: 5,
//       numReviews: 0
//     },
//     {
//       description: "Beef Shawarma served over lemon saffron rice, with roasted harissa vegetables, pickled onions, tzatziki and pita",
//       rating: 5,
//       numReviews: 0,
//       food_id: "385",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Spice",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       cost: 11,
//       allergens: [],
//       food_name: "Beef Mazza Bowl"
//     },
//     {
//       location: {
//         dining_hall: "ovt",
//         location_id: 0,
//         name: "Spice"
//       },
//       numReviews: 0,
//       food_id: "386",
//       cost: 11,
//       numRecommend: 0,
//       description: "Chicken Shawarma served over lemon saffron rice, with roasted harissa vegetables, shepard's salad, tzatziki and pita.",
//       food_name: "Chicken Mazza Bowl",
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       rating: 5
//     },
//     {
//       allergens: [],
//       cost: 13.75,
//       food_name: "Chicken Shawarma Garlic Fries",
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "ovt",
//         name: "Spice",
//         location_id: 0
//       },
//       description: "Garlic Steak Fries topped with shawarma chicken, israeli chick pea salad, and tzatziki sauce.",
//       numReviews: 0,
//       numRecommend: 0,
//       food_id: "387",
//       rating: 5
//     },
//     {
//       description: "Romaine lettuce and spring mix with chicken shawarma cucumbers, tomatoes, red onion, kalamata olive, lemons, pepperoncini, tofeta and lemon-tarragon vinaigrette.",
//       img: "/images/placeHolderImage.png",
//       food_id: "388",
//       rating: 5,
//       cost: 12,
//       location: {
//         name: "Spice",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       numReviews: 0,
//       allergens: [],
//       numRecommend: 0,
//       food_name: "Chicken Shawarma Greek Salad"
//     },
//     {
//       food_name: "Falafel Garlic Fries",
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Spice"
//       },
//       numRecommend: 0,
//       cost: 11,
//       food_id: "389",
//       numReviews: 0,
//       allergens: [],
//       rating: 5,
//       description: "Garlic Steak Fries topped with falafel, israeli chick pea salad, and tzatziki sauce.",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       numRecommend: 0,
//       food_name: "Garlic Bread",
//       numReviews: 0,
//       food_id: "39",
//       cost: 3,
//       description: "Toasted baguette with garlic butter, italian seasoning, and parmesan cheese",
//       allergens: [],
//       location: {
//         name: "Al Dente",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       img: "/images/placeHolderImage.png",
//       rating: 5
//     },
//     {
//       cost: 10,
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Spice"
//       },
//       rating: 5,
//       food_id: "390",
//       food_name: "Falafel Greek Salad",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       allergens: [],
//       description: "Romaine lettuce and spring mix with falafel, cucumbers, tomatoes, red onion, kalamata olive, lemons, pepperoncini, tofeta and lemon-tarragon vinaigrette."
//     },
//     {
//       allergens: [],
//       rating: 5,
//       description: "Romaine lettuce and spring mix with cucumbers, tomatoes, red onion, kalamata olive, lemons, pepperoncini, tofeta and lemon-tarragon vinaigrette.",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_name: "Greek Salad",
//       numReviews: 0,
//       cost: 7,
//       food_id: "391",
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Spice"
//       }
//     },
//     {
//       description: "Romaine lettuce and spring mix with salmon, cucumbers, tomatoes, red onion, kalamata olive, lemons, pepperoncini, tofeta and lemon-tarragon vinaigrette.",
//       rating: 5,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       location: {
//         location_id: 0,
//         dining_hall: "ovt",
//         name: "Spice"
//       },
//       numReviews: 0,
//       cost: 12.5,
//       food_name: "Salmon Greek Salad",
//       food_id: "392"
//     },
//     {
//       allergens: [],
//       numRecommend: 0,
//       food_name: "Salmon Mazza Bowl",
//       rating: 5,
//       cost: 13.5,
//       food_id: "393",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       location: {
//         name: "Spice",
//         dining_hall: "ovt",
//         location_id: 0
//       },
//       description: "Grilled Mediteranean salmon served over lemon saffron rice, with roasted harissa vegetables, shepard's salad, tzatziki and pita."
//     },
//     {
//       description: "Garlic Steak Fries topped with crispy tofu, israeli chick pea salad, and tzatziki sauce.",
//       rating: 5,
//       location: {
//         dining_hall: "ovt",
//         name: "Spice",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       cost: 8.5,
//       allergens: [],
//       food_name: "Crispy Tofu Garlic Fries",
//       numRecommend: 0,
//       food_id: "394",
//       numReviews: 0
//     },
//     {
//       numReviews: 0,
//       food_name: "Crispy Tofu Greek Salad",
//       rating: 5,
//       cost: 9,
//       img: "/images/placeHolderImage.png",
//       food_id: "395",
//       description: "Romaine lettuce and spring mix with chicken shawarma cucumbers, tomatoes, red onion, kalamata olive, lemons, pepperoncini, tofeta and lemon-tarragon vinaigrette.",
//       numRecommend: 0,
//       allergens: [],
//       location: {
//         dining_hall: "ovt",
//         name: "Spice",
//         location_id: 0
//       }
//     },
//     {
//       food_name: "Crispy Tofu Mazza Bowl",
//       description: "Layered in a bowl over lemon saffron rice, crisy curry tofu, roasted harissa vegetables, shepards salad and served with pita triangles",
//       numRecommend: 0,
//       cost: 10.5,
//       food_id: "396",
//       rating: 5,
//       numReviews: 0,
//       location: {
//         location_id: 0,
//         name: "Spice",
//         dining_hall: "ovt"
//       },
//       img: "/images/placeHolderImage.png",
//       allergens: []
//     },
//     {
//       rating: 5,
//       cost: 10.25,
//       numRecommend: 0,
//       numReviews: 0,
//       food_name: "Acai Bowl CV",
//       food_id: "397",
//       location: {
//         name: "Fresh",
//         dining_hall: "canyonvista",
//         location_id: 0
//       },
//       description: "Acai sorbet with strawberry, mango, banana, blueberry, coconut and granola",
//       img: "/images/placeHolderImage.png",
//       allergens: []
//     },
//     {
//       numRecommend: 0,
//       cost: 6.75,
//       img: "/images/placeHolderImage.png",
//       food_name: "BYO Parfait CV",
//       numReviews: 0,
//       rating: 5,
//       food_id: "398",
//       allergens: [],
//       location: {
//         location_id: 0,
//         name: "Fresh",
//         dining_hall: "canyonvista"
//       },
//       description: "Plain Greek yogurt served with your preference of 4 toppings."
//     },
//     {
//       numRecommend: 0,
//       food_id: "399",
//       description: "Hot steel cut oats with your choice of toppings ",
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "canyonvista",
//         location_id: 0,
//         name: "Fresh"
//       },
//       cost: 3.5,
//       food_name: "Steel Cut Oatmeal",
//       allergens: [],
//       rating: 5,
//       numReviews: 0
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       cost: 3.75,
//       numRecommend: 0,
//       description: "Diced potatoes with garlic, onion, peppers, onion, and herbs",
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       },
//       food_name: "House Potatoes",
//       allergens: [],
//       food_id: "4",
//       numReviews: 0
//     },
//     {
//       numRecommend: 0,
//       food_name: "Blistered Tomato Fettuccini Alfredo",
//       description: "Fettuccini, spinach and cherry tomato cooked in alfredo sauce topped with shredded parmesan",
//       numReviews: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       cost: 9,
//       food_id: "40",
//       allergens: [],
//       location: {
//         name: "Al Dente",
//         location_id: 0,
//         dining_hall: "64degrees"
//       }
//     },
//     {
//       rating: 5,
//       description: "Scrambled eggs, chicken sausage, tater tots, black beans, pico de gallo and cheddar jack cheese wrapped in a wheat tortilla\u003CBR\u003E",
//       food_name: "Chicken Sausage Breakfast Burrito",
//       cost: 8.5,
//       food_id: "400",
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "canyonvista",
//         name: "Fusion Grill",
//         location_id: 0
//       },
//       numRecommend: 0,
//       numReviews: 0,
//       allergens: []
//     },
//     {
//       food_name: "Chicken Sausage King Triton Breakfast Sandwich",
//       description: "Hawaiian roll with fried egg, cheddar cheese, chicken sausage, hashbrown triangle and sauce. Serve with a choice of side",
//       rating: 5,
//       allergens: [],
//       numRecommend: 0,
//       cost: 9.5,
//       numReviews: 0,
//       food_id: "401",
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Fusion Grill",
//         dining_hall: "canyonvista",
//         location_id: 0
//       }
//     },
//     {
//       food_name: "Egg Breakfast Burrito",
//       food_id: "402",
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       numReviews: 0,
//       location: {
//         name: "Fusion Grill",
//         location_id: 0,
//         dining_hall: "canyonvista"
//       },
//       cost: 6.75,
//       description: "Scrambled eggs, tater tots, black beans, pico de gallo and cheddar jack cheese wrapped in a wheat tortilla",
//       allergens: []
//     },
//     {
//       description: "Fried egg with cheddar cheese on Hawaiian Roll. Serve with a choice of side\u003CBR\u003E",
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Fusion Grill"
//       },
//       food_id: "403",
//       numReviews: 0,
//       numRecommend: 0,
//       food_name: "King Triton Breakfast Sandwich",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       rating: 5,
//       cost: 7.75
//     },
//     {
//       food_name: "Plant Based Breakfast Burrito",
//       numReviews: 0,
//       food_id: "404",
//       numRecommend: 0,
//       rating: 5,
//       cost: 8.5,
//       location: {
//         name: "Fusion Grill",
//         location_id: 0,
//         dining_hall: "canyonvista"
//       },
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       description: "JUST vegan egg with potatoes, refried beans, vegan cheese, cilantro, pico de gallo and vegan garlic aioli on a tortilla"
//     },
//     {
//       numReviews: 0,
//       food_name: "Spinach Soyrizo Breakfast Burrito",
//       description: "Scrambled eggs, aztec black beans, tater tots, sauteed spinach & soyrizo, pico de gallo, cheddar jack cheese in a tortilla",
//       food_id: "405",
//       cost: 8.5,
//       numRecommend: 0,
//       rating: 5,
//       location: {
//         name: "Fusion Grill",
//         dining_hall: "canyonvista",
//         location_id: 0
//       },
//       allergens: [],
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       food_name: "Veggie Sausage King Triton Breakfast Sandwich",
//       cost: 9.5,
//       numRecommend: 0,
//       food_id: "406",
//       description: "Veggie sausage patty, an over-easy egg and American cheese on grilled hawaiian bread. Serve with a choice of side",
//       numReviews: 0,
//       location: {
//         name: "Fusion Grill",
//         location_id: 0,
//         dining_hall: "canyonvista"
//       },
//       rating: 5,
//       allergens: []
//     },
//     {
//       food_id: "407",
//       numReviews: 0,
//       food_name: "Chicken Sausage (1)",
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Fusion Grill"
//       },
//       rating: 5,
//       allergens: [],
//       cost: 3,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       description: "Ground chicken sausage seasoned with herbs and spices"
//     },
//     {
//       location: {
//         location_id: 0,
//         name: "Fusion Grill",
//         dining_hall: "canyonvista"
//       },
//       description: "Mix of fresh seasonal fruits",
//       rating: 5,
//       food_name: "Fresh Fruit Salad",
//       food_id: "408",
//       numRecommend: 0,
//       cost: 3.75,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       numReviews: 0
//     },
//     {
//       rating: 5,
//       location: {
//         dining_hall: "canyonvista",
//         location_id: 0,
//         name: "Fusion Grill"
//       },
//       cost: 1.5,
//       description: "Whole egg, cooked to order. ",
//       img: "/images/placeHolderImage.png",
//       food_name: "Fried Egg",
//       food_id: "409",
//       numRecommend: 0,
//       allergens: [],
//       numReviews: 0
//     },
//     {
//       numReviews: 0,
//       description: "Farfalle pasta cooked with onions, broccoli, zucchini, and topped with an arrabbiata sauce and parmesan cheese.",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       cost: 9,
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Al Dente"
//       },
//       rating: 5,
//       food_name: "Farfalle Arrabbiata Primavera",
//       food_id: "41",
//       numRecommend: 0
//     },
//     {
//       rating: 5,
//       description: "Crispy fried potato cakes.",
//       food_id: "410",
//       numReviews: 0,
//       food_name: "Hash Brown Triangles",
//       allergens: [],
//       cost: 3.75,
//       location: {
//         name: "Fusion Grill",
//         dining_hall: "canyonvista",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0
//     },
//     {
//       allergens: [],
//       location: {
//         dining_hall: "canyonvista",
//         location_id: 0,
//         name: "Fusion Grill"
//       },
//       food_name: "Scrambled Egg Whites",
//       food_id: "411",
//       description: "Scrambled egg whites ",
//       img: "/images/placeHolderImage.png",
//       cost: 2.75,
//       numReviews: 0,
//       numRecommend: 0,
//       rating: 5
//     },
//     {
//       food_id: "412",
//       cost: 2.75,
//       img: "/images/placeHolderImage.png",
//       food_name: "Scrambled Eggs",
//       location: {
//         name: "Fusion Grill",
//         location_id: 0,
//         dining_hall: "canyonvista"
//       },
//       numReviews: 0,
//       allergens: [],
//       description: "Scrambled Eggs ",
//       numRecommend: 0,
//       rating: 5
//     },
//     {
//       numReviews: 0,
//       food_id: "413",
//       allergens: [],
//       numRecommend: 0,
//       description: "soyrizo potatoes with onions, peppers, and spinach",
//       cost: 4,
//       rating: 5,
//       food_name: "Soyrizo Breakfast Hash",
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Fusion Grill"
//       },
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       location: {
//         name: "Fusion Grill",
//         location_id: 0,
//         dining_hall: "canyonvista"
//       },
//       rating: 5,
//       food_id: "414",
//       food_name: "Tater Tots",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       description: "Crispy fried potato barrels.",
//       numRecommend: 0,
//       numReviews: 0,
//       cost: 3.75
//     },
//     {
//       location: {
//         dining_hall: "canyonvista",
//         name: "Fusion Grill",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       food_id: "415",
//       rating: 5,
//       numRecommend: 0,
//       food_name: "Toast",
//       numReviews: 0,
//       description: "Your choice of toasted bread",
//       allergens: [],
//       cost: 1.5
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       description: "Vegan veggie sausage.",
//       location: {
//         dining_hall: "canyonvista",
//         location_id: 0,
//         name: "Fusion Grill"
//       },
//       food_name: "Veggie Sausage",
//       food_id: "416",
//       cost: 2,
//       numRecommend: 0,
//       allergens: [],
//       numReviews: 0,
//       rating: 5
//     },
//     {
//       allergens: [],
//       food_name: "Avocado Toast",
//       numRecommend: 0,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         name: "Fusion Grill",
//         dining_hall: "canyonvista"
//       },
//       rating: 5,
//       food_id: "417",
//       description: "Grilled Hoagie roll with avocado, tomato, feta cheese, and a pepita gremolata",
//       cost: 5.75
//     },
//     {
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Fusion Grill"
//       },
//       rating: 5,
//       numReviews: 0,
//       food_id: "418",
//       numRecommend: 0,
//       allergens: [],
//       cost: 6,
//       img: "/images/placeHolderImage.png",
//       description: "Buttermilk pancakes",
//       food_name: "Buttermilk Pancakes"
//     },
//     {
//       cost: 5.5,
//       food_id: "419",
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Fusion Grill",
//         dining_hall: "canyonvista",
//         location_id: 0
//       },
//       numRecommend: 0,
//       food_name: "Caprese Avocado Toast",
//       rating: 5,
//       description: "Toasted whole wheat bread with a seasoned avocado spread topped with charred grape tomatoes, mozzarella cheese, and basil",
//       allergens: [],
//       numReviews: 0
//     },
//     {
//       numRecommend: 0,
//       cost: 10,
//       food_name: "Spinach Pesto Rotini",
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Al Dente"
//       },
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       numReviews: 0,
//       food_id: "42",
//       allergens: [],
//       description: "Rotini pasta served with fresh spinach pesto, green peas, sundried tomatoes, parmesan cheese and basil."
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Fusion Grill"
//       },
//       description: "Fried rice served with egg, home made smash patty, and spicy crunchy chili oil.",
//       numReviews: 0,
//       numRecommend: 0,
//       food_name: "Chile Garlic Beef Fried Rice",
//       allergens: [],
//       food_id: "420",
//       cost: 7
//     },
//     {
//       location: {
//         dining_hall: "canyonvista",
//         name: "Fusion Grill",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       allergens: [],
//       cost: 6,
//       numRecommend: 0,
//       description: "Grilled custard battered Challah french toast with a sprinkle of powdered sugar",
//       food_id: "421",
//       rating: 5,
//       food_name: "French Toast"
//     },
//     {
//       cost: 6,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       numReviews: 0,
//       numRecommend: 0,
//       rating: 5,
//       food_id: "422",
//       food_name: "Soyrizo Hash Fried Rice",
//       description: "Fried rice served with egg, home made soyrizo and veggies hash, and spicy crunchy chili oil.",
//       location: {
//         dining_hall: "canyonvista",
//         location_id: 0,
//         name: "Fusion Grill"
//       }
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Fusion Grill"
//       },
//       food_name: "Sweet Potato Pancake",
//       description: "2 house made sweet potato pancakes, topped with cinnamon apples and orange ginger butter",
//       cost: 7,
//       food_id: "423",
//       numReviews: 0,
//       allergens: [],
//       rating: 5
//     },
//     {
//       rating: 5,
//       allergens: [],
//       food_id: "424",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       description: "choose your own base, protein, toppings and sauce ",
//       cost: 11.75,
//       food_name: "BYO Poke Bowl CV",
//       location: {
//         dining_hall: "canyonvista",
//         location_id: 0,
//         name: "Fresh"
//       },
//       numReviews: 0
//     },
//     {
//       description: "Wheat bread loaf filled with achiote chicken salad, avocado, pickled red onion, sliced jalapeno, sliced radish, and achiote ailoi",
//       location: {
//         name: "Fresh",
//         dining_hall: "canyonvista",
//         location_id: 0
//       },
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       food_name: "Achiote Chicken Salad Sandwich",
//       food_id: "425",
//       cost: 10,
//       allergens: [],
//       numReviews: 0,
//       numRecommend: 0
//     },
//     {
//       numRecommend: 0,
//       description: "Croissant with veganaise aioli spread, green leaf lettuce, apple tuna salad, and pickled fresno peppers",
//       food_id: "426",
//       cost: 9.5,
//       location: {
//         name: "Fresh",
//         dining_hall: "canyonvista",
//         location_id: 0
//       },
//       allergens: [],
//       food_name: "Apple Tuna Salad Sandwich",
//       numReviews: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       food_name: "Avo BeetLT Sandwich",
//       description: "Whheat bread loaf with veganaise aioli spread, roasted beets, green leaf lettuce, avocado, and sliced tomato",
//       numRecommend: 0,
//       food_id: "427",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       cost: 7.5,
//       numReviews: 0,
//       location: {
//         dining_hall: "canyonvista",
//         name: "Fresh",
//         location_id: 0
//       },
//       rating: 5
//     },
//     {
//       food_name: "Fall Roasted Vegetable Salad",
//       allergens: [],
//       numReviews: 0,
//       location: {
//         dining_hall: "canyonvista",
//         name: "Fresh",
//         location_id: 0
//       },
//       food_id: "428",
//       description: "Italian salad blend greens tossed with roasted fall vegetables, feta cheese, and Canyon Vista house vinaigrette, garnished with parsley, crunchy chickpeas, and pita bread",
//       cost: 9,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       rating: 5
//     },
//     {
//       food_name: "Five Spice Tofu Salad",
//       location: {
//         location_id: 0,
//         name: "Fresh",
//         dining_hall: "canyonvista"
//       },
//       img: "/images/placeHolderImage.png",
//       description: "Roasted tofu seasoned with Chinese five spice tossed with red onion, carrot, cucumber, celery and a sesame soy sauce dressing garnished with cilantro and sesame seeds",
//       food_id: "429",
//       numRecommend: 0,
//       cost: 7.5,
//       allergens: [],
//       rating: 5,
//       numReviews: 0
//     },
//     {
//       numReviews: 0,
//       allergens: [],
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Market 64"
//       },
//       food_id: "43",
//       rating: 5,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       description: "Brioche bun with creamy horseradish, roast beef, cheddar cheese, baby arugula, roasted red bell pepper and caramelized onions",
//       cost: 10.5,
//       food_name: "Roast Beef Cheddar Roll"
//     },
//     {
//       allergens: [],
//       description: "Tuscan black kale, romaine lettuce, shredded parmesan cheese, tomatoes, Caesar dressing, house croutons",
//       numRecommend: 0,
//       location: {
//         name: "Fresh",
//         location_id: 0,
//         dining_hall: "canyonvista"
//       },
//       food_name: "Kale Caesar Salad",
//       numReviews: 0,
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       cost: 7.75,
//       food_id: "430"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       description: "Fresh mix of bulgur wheat grains, Italian greens, mint, Middle Eastern style dressing, dried cherries, almonds, pomegranate seeds, chickpeas and lemon slices.",
//       food_name: "Mediterranean Bulgur Grain Salad",
//       cost: 8,
//       allergens: [],
//       location: {
//         dining_hall: "canyonvista",
//         location_id: 0,
//         name: "Fresh"
//       },
//       rating: 5,
//       food_id: "431",
//       numReviews: 0,
//       numRecommend: 0
//     },
//     {
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       numReviews: 0,
//       food_id: "432",
//       food_name: "Power House Salad",
//       location: {
//         location_id: 0,
//         name: "Fresh",
//         dining_hall: "canyonvista"
//       },
//       allergens: [],
//       description: "Romaine Lettuce, spinach, cauliflower, broccoli, zucchini, chickpeas, roasted butternut squash, red onions, balsamic vinaigrette",
//       cost: 7.5
//     },
//     {
//       cost: 11.5,
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Fresh",
//         location_id: 0,
//         dining_hall: "canyonvista"
//       },
//       rating: 5,
//       food_name: "Salmon Chop Salad",
//       allergens: [],
//       numReviews: 0,
//       numRecommend: 0,
//       food_id: "433",
//       description: "Chopped romaine lettuce, tomatoes, white corn, cucumber, hardboiled egg, red onion and salmon tossed in buttermilk ranch dressing"
//     },
//     {
//       rating: 5,
//       description: "Rich green soup with chicken, and hominy topped with cabbage, diced onion cilantro, and shredded radish",
//       location: {
//         location_id: 0,
//         name: "Fresh",
//         dining_hall: "canyonvista"
//       },
//       cost: 4.75,
//       food_name: "Chicken Pozole Verde",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_id: "434",
//       allergens: []
//     },
//     {
//       food_name: "Baja Smash Burger",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       numRecommend: 0,
//       food_id: "435",
//       rating: 5,
//       allergens: [],
//       location: {
//         name: "Fusion Grill",
//         dining_hall: "canyonvista",
//         location_id: 0
//       },
//       cost: 9.5,
//       description: "Smash patty of your choice with soyrizo avocado, pico, achiote aioli and provolone cheese on a bun"
//     },
//     {
//       numRecommend: 0,
//       description: "Grilled smash patty of your choice, fried egg, cheddar cheese and hash brown on a bun",
//       location: {
//         dining_hall: "canyonvista",
//         name: "Fusion Grill",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       food_id: "436",
//       numReviews: 0,
//       allergens: [],
//       food_name: "Breakfast Smashburger",
//       rating: 5,
//       cost: 8
//     },
//     {
//       numRecommend: 0,
//       description: "Ground chicken with garlic, onion, cilantro, red pepper, eggs, bread crumbs and salt formed into a burger patty",
//       rating: 5,
//       location: {
//         name: "Fusion Grill",
//         dining_hall: "canyonvista",
//         location_id: 0
//       },
//       food_id: "437",
//       food_name: "Chicken Smash Patty",
//       cost: 2,
//       allergens: [],
//       numReviews: 0,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       food_name: "CV Double Smash Burger",
//       cost: 12,
//       numRecommend: 0,
//       food_id: "438",
//       allergens: [],
//       numReviews: 0,
//       rating: 5,
//       description: "Our take on super charged double smash burger with Cheddar cheese, caramelized onions, and pickled sweet bell peppers.",
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "canyonvista",
//         location_id: 0,
//         name: "Fusion Grill"
//       }
//     },
//     {
//       description: "House made quinoa plant based burger patty with caramelized onions, sweet peppers, and CV aioli on a bun",
//       food_id: "439",
//       allergens: [],
//       numReviews: 0,
//       location: {
//         dining_hall: "canyonvista",
//         location_id: 0,
//         name: "Fusion Grill"
//       },
//       numRecommend: 0,
//       cost: 7.5,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       food_name: "CV Plant Based Burger"
//     },
//     {
//       location: {
//         dining_hall: "64degrees",
//         name: "Market 64",
//         location_id: 0
//       },
//       food_name: "Roasted Tomato Caprese Sandwich",
//       description: "Hoagie roll with spinach pesto, roasted garlic tomato confit, baby arugula, marinated cucumber and fresh mozzarella",
//       food_id: "44",
//       numRecommend: 0,
//       allergens: [],
//       rating: 5,
//       numReviews: 0,
//       cost: 9.5,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       description: "Our take on super charged smash burger with Cheddar cheese, caramelized onions, and pickled sweet bell peppers.",
//       numReviews: 0,
//       allergens: [],
//       location: {
//         location_id: 0,
//         name: "Fusion Grill",
//         dining_hall: "canyonvista"
//       },
//       cost: 7.5,
//       food_name: "CV Single Smash Burger",
//       food_id: "440"
//     },
//     {
//       food_name: "Korean BBQ Smash Burger",
//       cost: 8,
//       allergens: [],
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Fusion Grill"
//       },
//       rating: 5,
//       description: "Smash burger with your choice of patty seasoned with Korean spices, served with pickled onion, kimchi slaw and Korean BBQ sauce",
//       numReviews: 0,
//       food_id: "441",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       description: "Toasted buttered sourdough with melted swiss and cheddar cheese, caramelized onions, Canyon Vista aioli, and a smash patty of your choice",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_name: "Smashed Patty Melt",
//       numReviews: 0,
//       food_id: "442",
//       cost: 8,
//       allergens: [],
//       location: {
//         location_id: 0,
//         name: "Fusion Grill",
//         dining_hall: "canyonvista"
//       },
//       rating: 5
//     },
//     {
//       rating: 5,
//       allergens: [],
//       numRecommend: 0,
//       food_id: "443",
//       img: "/images/placeHolderImage.png",
//       description: "Spicy chicken sandwich with pickled sweet peppers and pickled fresh cucumbers on a soft bun",
//       cost: 9,
//       numReviews: 0,
//       location: {
//         dining_hall: "canyonvista",
//         name: "Fusion Grill",
//         location_id: 0
//       },
//       food_name: "Spicy Chile Chicken Sandwich"
//     },
//     {
//       numReviews: 0,
//       food_id: "444",
//       allergens: [],
//       location: {
//         name: "Fusion Grill",
//         dining_hall: "canyonvista",
//         location_id: 0
//       },
//       cost: 6,
//       img: "/images/placeHolderImage.png",
//       description: "3 cheese blend of cheddar, swiss, and provolone melted in between grilled buttered sourdough bread",
//       rating: 5,
//       numRecommend: 0,
//       food_name: "Three Cheese Grilled Cheese"
//     },
//     {
//       description: "Crispy breaded halal chicken tenders",
//       numReviews: 0,
//       location: {
//         location_id: 0,
//         name: "Fusion Grill",
//         dining_hall: "canyonvista"
//       },
//       food_name: "Chicken Tenders",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       cost: 6.75,
//       allergens: [],
//       rating: 5,
//       food_id: "445"
//     },
//     {
//       numRecommend: 0,
//       food_name: "Crispy Chicken Sandwich",
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Fusion Grill",
//         location_id: 0,
//         dining_hall: "canyonvista"
//       },
//       rating: 5,
//       allergens: [],
//       numReviews: 0,
//       food_id: "446",
//       cost: 9,
//       description: "Crispy chicken fritter sandwich with pickled cucumber ribbons and achiote aioli."
//     },
//     {
//       food_name: "French Fries",
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Fusion Grill",
//         location_id: 0,
//         dining_hall: "canyonvista"
//       },
//       food_id: "447",
//       cost: 3.5,
//       rating: 5,
//       numRecommend: 0,
//       numReviews: 0,
//       allergens: [],
//       description: "Seasoned crispy fried potato batons."
//     },
//     {
//       numRecommend: 0,
//       food_name: "Honey Sriracha Grilled Butternut",
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       numReviews: 0,
//       food_id: "448",
//       cost: 3.75,
//       description: "Grilled seasoned butternut squash drizzled with honey sriracha sauce",
//       location: {
//         dining_hall: "canyonvista",
//         name: "Fusion Grill",
//         location_id: 0
//       }
//     },
//     {
//       numReviews: 0,
//       allergens: [],
//       rating: 5,
//       food_name: "Loaded Cheeseburger Fries",
//       description: "Loaded fries topped with a cheesy smash beef patty, jalapeno, pickled sweet peppers, avocado spread, achiote aioli and green onion.",
//       food_id: "449",
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Fusion Grill"
//       },
//       cost: 10.5,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Market 64"
//       },
//       numRecommend: 0,
//       rating: 5,
//       food_name: "Spanish Tuna Salad Sandwich",
//       numReviews: 0,
//       food_id: "45",
//       description: "Rye bread with mayo, tuna salad marinated in tomato sauce, garlic, onions and bell peppers, hard boiled egg and pickle chips",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       cost: 9.5
//     },
//     {
//       allergens: [],
//       food_id: "450",
//       rating: 5,
//       description: "Loaded fries topped with a cheesy smash chicken patty, jalapeno, pickled onion, avocado spread, jalapeno cilantro aioli and green onion.",
//       img: "/images/placeHolderImage.png",
//       cost: 12,
//       location: {
//         location_id: 0,
//         name: "Fusion Grill",
//         dining_hall: "canyonvista"
//       },
//       numRecommend: 0,
//       food_name: "Loaded Chicken Fries",
//       numReviews: 0
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_name: "Plant Based Loaded Fries",
//       location: {
//         location_id: 0,
//         name: "Fusion Grill",
//         dining_hall: "canyonvista"
//       },
//       cost: 8.5,
//       rating: 5,
//       food_id: "451",
//       allergens: [],
//       numRecommend: 0,
//       description: "Loaded fries topped with a cheesy smash quinoa patty, jalapeno, pickled onion, avocado spread, jalapeno cilantro aioli and green onion."
//     },
//     {
//       rating: 5,
//       cost: 13,
//       location: {
//         location_id: 0,
//         name: "Fusion Grill",
//         dining_hall: "canyonvista"
//       },
//       food_name: "Soy Balsamic Wings Basket",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       food_id: "452",
//       numReviews: 0,
//       allergens: [],
//       description: "Fried chicken wings tossed in soy balsamic glaze and topped with feta cheese. Served with french fries and a side of ranch."
//     },
//     {
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       cost: 13,
//       food_name: "Sweet Chili Lemongrass Wings Basket",
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Fusion Grill"
//       },
//       rating: 5,
//       numRecommend: 0,
//       description: "Fried chicken wings tossed in lemongrass sweet chili sauce. Served with french fries and a side of ranch.",
//       numReviews: 0,
//       food_id: "453"
//     },
//     {
//       allergens: [],
//       food_name: "Tropical Crispy Chicken Sandwich",
//       cost: 9,
//       numRecommend: 0,
//       numReviews: 0,
//       location: {
//         dining_hall: "canyonvista",
//         location_id: 0,
//         name: "Fusion Grill"
//       },
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       description: "Crispy chicken fritter sandwich with grilled pineapple, cheese, habanero slaw, Triton sauce, and soy balsamic glaze.",
//       food_id: "454"
//     },
//     {
//       food_name: "Jasmine Rice",
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Fusion Grill"
//       },
//       numRecommend: 0,
//       allergens: [],
//       cost: 3,
//       food_id: "455",
//       description: "Steamed jasmine rice.",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       rating: 5
//     },
//     {
//       numReviews: 0,
//       numRecommend: 0,
//       food_id: "456",
//       food_name: "Beef Bowl",
//       location: {
//         dining_hall: "canyonvista",
//         name: "Three Sixty",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       cost: 10.5,
//       allergens: [],
//       rating: 5,
//       description: "Build your own Mongolian bowl with beef, choice of base, vegetables, and sauce"
//     },
//     {
//       cost: 10,
//       numReviews: 0,
//       numRecommend: 0,
//       food_id: "457",
//       description: "Build your own Mongolian bowl with chicken, choice of base, vegetables, and sauce",
//       food_name: "Chicken Bowl",
//       location: {
//         dining_hall: "canyonvista",
//         location_id: 0,
//         name: "Three Sixty"
//       },
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       rating: 5
//     },
//     {
//       food_name: "Tofu Bowl",
//       description: "Build your own Mongolian bowl with seared tofu, base, vegetables, and sauce",
//       rating: 5,
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Three Sixty"
//       },
//       food_id: "458",
//       cost: 9,
//       allergens: [],
//       numReviews: 0,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       description: "Build your own Mongolian bowl with base, vegetables, and sauce",
//       allergens: [],
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_name: "Vegetable Bowl",
//       location: {
//         dining_hall: "canyonvista",
//         name: "Three Sixty",
//         location_id: 0
//       },
//       cost: 8,
//       rating: 5,
//       food_id: "459"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       rating: 5,
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Market 64"
//       },
//       numReviews: 0,
//       description: "Roasted turkey with cornbread stuffing, cranberry, mayo, and arugula on a hoagie roll",
//       food_id: "46",
//       food_name: "Turkey Cranberry Roll",
//       allergens: [],
//       cost: 10.5
//     },
//     {
//       numReviews: 0,
//       cost: 4.5,
//       rating: 5,
//       location: {
//         location_id: 0,
//         name: "Three Sixty",
//         dining_hall: "canyonvista"
//       },
//       food_name: "Lemongrass Shrimp",
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       description: "Lemongrass marinated shrimp. ",
//       food_id: "460",
//       numRecommend: 0
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       allergens: [],
//       food_id: "461",
//       food_name: "Beef & Broccoli Bowl",
//       cost: 9.5,
//       location: {
//         dining_hall: "canyonvista",
//         name: "Three Sixty",
//         location_id: 0
//       },
//       numRecommend: 0,
//       description: "Beef and broccoli with red onions, red bell peppers, and a teriyaki oyster sauce served over jasmine rice",
//       rating: 5
//     },
//     {
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       food_id: "462",
//       food_name: "Orange Chicken Bowl",
//       rating: 5,
//       location: {
//         location_id: 0,
//         name: "Three Sixty",
//         dining_hall: "canyonvista"
//       },
//       numRecommend: 0,
//       description: "Crispy orange chile chicken served steamed rice and green onion",
//       cost: 8,
//       numReviews: 0
//     },
//     {
//       allergens: [],
//       numRecommend: 0,
//       cost: 8.5,
//       rating: 5,
//       food_id: "463",
//       food_name: "Plant Based Bulgogi Bowl",
//       numReviews: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Three Sixty"
//       },
//       description: "Plant based bulgogi steak sauteed with vegetables and dragon sauce, served over rice",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       rating: 5,
//       food_id: "464",
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         name: "Earl’s Coffee House",
//         dining_hall: "canyonvista"
//       },
//       allergens: [],
//       cost: 3,
//       description: "Sweet basmati kheer topped with an apple date caramel and garnished with toasted coconut flakes",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       food_name: "Apple Date Kheer"
//     },
//     {
//       cost: 10,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       food_id: "465",
//       description: "Chicken tenders tossed with chili crunch and topped with green onions, served with a side of fries",
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Fresh"
//       },
//       rating: 5,
//       food_name: "Chili Crunch Tender Basket",
//       numRecommend: 0,
//       allergens: []
//     },
//     {
//       numReviews: 0,
//       food_id: "466",
//       cost: 8,
//       rating: 5,
//       description: "Grilled halal beef patty with steamed rice, fried egg and vegan mushroom gravy",
//       allergens: [],
//       food_name: "Loco Moco Plate",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "canyonvista",
//         name: "Fresh"
//       }
//     },
//     {
//       numReviews: 0,
//       numRecommend: 0,
//       food_id: "467",
//       allergens: [],
//       food_name: "Roast Veggie Grilled Cheese",
//       cost: 8,
//       location: {
//         location_id: 0,
//         name: "Fresh",
//         dining_hall: "canyonvista"
//       },
//       description: "Grilled cheese sandwich loaded with roasted veggies, tomato jam, Provolone cheese, and Cheddar cheese on sourdough bread.",
//       img: "/images/placeHolderImage.png",
//       rating: 5
//     },
//     {
//       description: "Butter chicken served over biryani rice and tandoori stew garnished with cilantro served with naan",
//       numRecommend: 0,
//       location: {
//         name: "Fusion Grill",
//         dining_hall: "canyonvista",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       cost: 9,
//       allergens: [],
//       food_name: "Butter Chicken Plate",
//       numReviews: 0,
//       food_id: "468",
//       rating: 5
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       numReviews: 0,
//       description: "Paneer masala served over biryani rice and tandoori stew garnished with cilantro served with naan",
//       location: {
//         name: "Fusion Grill",
//         location_id: 0,
//         dining_hall: "canyonvista"
//       },
//       allergens: [],
//       food_id: "469",
//       rating: 5,
//       food_name: "Paneer Masala Plate",
//       cost: 9
//     },
//     {
//       location: {
//         dining_hall: "64degrees",
//         name: "Market 64",
//         location_id: 0
//       },
//       numReviews: 0,
//       description: "Spring mix tossed with blistered tomatoes and bell peppers, sliced cucumbers, sliced carrots, sliced radish, and sage herb dressing",
//       rating: 5,
//       cost: 3,
//       allergens: [],
//       food_id: "47",
//       img: "/images/placeHolderImage.png",
//       food_name: "Fall Side Salad",
//       numRecommend: 0
//     },
//     {
//       allergens: [],
//       rating: 5,
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         name: "Fusion Grill",
//         dining_hall: "canyonvista"
//       },
//       food_name: "Salmon Vindaloo Plate",
//       cost: 14,
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       description: "Salmon vindaloo served over biryani rice and tandoori stew garnished with cilantro and served with naan",
//       food_id: "470"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       food_name: "Biryani Rice",
//       description: "Seasoned basmati rice fluffed with raisins",
//       rating: 5,
//       cost: 3,
//       numReviews: 0,
//       location: {
//         location_id: 0,
//         name: "Fusion Grill",
//         dining_hall: "canyonvista"
//       },
//       numRecommend: 0,
//       food_id: "471"
//     },
//     {
//       location: {
//         location_id: 0,
//         name: "Fusion Grill",
//         dining_hall: "canyonvista"
//       },
//       food_id: "472",
//       food_name: "Grilled Naan",
//       numReviews: 0,
//       description: "Grilled naan bread",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       rating: 5,
//       allergens: [],
//       cost: 3
//     },
//     {
//       food_name: "Tandoori Slaw",
//       cost: 3.75,
//       location: {
//         dining_hall: "canyonvista",
//         name: "Fusion Grill",
//         location_id: 0
//       },
//       numReviews: 0,
//       allergens: [],
//       description: "Napa cabbage and shredded carrots tossed in citrus vinaigrette",
//       numRecommend: 0,
//       food_id: "473",
//       img: "/images/placeHolderImage.png",
//       rating: 5
//     },
//     {
//       allergens: [],
//       cost: 3.75,
//       numRecommend: 0,
//       food_name: "Tandoori Stewed Vegetables",
//       numReviews: 0,
//       food_id: "474",
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "canyonvista",
//         location_id: 0,
//         name: "Fusion Grill"
//       },
//       rating: 5,
//       description: "Vegetables stewed in a spiced yogurt sauce"
//     },
//     {
//       rating: 5,
//       description: "Naan bread with red pepper hummus spread and topped with chicken, vegetables, and slaw ",
//       img: "/images/placeHolderImage.png",
//       cost: 8,
//       allergens: [],
//       location: {
//         dining_hall: "canyonvista",
//         location_id: 0,
//         name: "Three Sixty"
//       },
//       numReviews: 0,
//       food_id: "475",
//       food_name: "Tandoori Chicken Flatbread",
//       numRecommend: 0
//     },
//     {
//       allergens: [],
//       location: {
//         location_id: 0,
//         name: "Three Sixty",
//         dining_hall: "canyonvista"
//       },
//       numReviews: 0,
//       food_id: "476",
//       food_name: "Tandoori Shrimp Flatbread\n",
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       description: "Toasted naan with red pepper hummus and marinated shrimp topped with slaw",
//       cost: 8,
//       rating: 5
//     },
//     {
//       cost: 8.5,
//       numReviews: 0,
//       location: {
//         name: "Taqueria",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       allergens: [],
//       description: "Breakfast burrito w/ soyrizo potatoes, vegan cheese, Just Eggs, refried beans, pico and sala chile de árbol.",
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       food_id: "477",
//       numRecommend: 0,
//       food_name: "Plant Based Soyrizo Burrito"
//     },
//     {
//       food_name: "64 Fall Salad",
//       food_id: "48",
//       numRecommend: 0,
//       allergens: [],
//       numReviews: 0,
//       cost: 7.5,
//       rating: 5,
//       location: {
//         location_id: 0,
//         name: "Market 64",
//         dining_hall: "64degrees"
//       },
//       img: "/images/placeHolderImage.png",
//       description: "Spring mix, tomato and blistered bell pepper mix, sliced cucumbers, blanched green beans, shredded carrots, broccoli slaw and sage & herb dressing topped with shredded parmesan"
//     },
//     {
//       cost: 10.5,
//       food_id: "49",
//       description: "Baby kale, tomato and blistered bell pepper blend, edamame, parmesan crisps, roasted chickpeas and jalapeno cilantro caesar dressing",
//       rating: 5,
//       numRecommend: 0,
//       numReviews: 0,
//       location: {
//         name: "Market 64",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       img: "/images/placeHolderImage.png",
//       food_name: "Anti Caesar Salad",
//       allergens: []
//     },
//     {
//       cost: 2,
//       allergens: [],
//       food_id: "5",
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Taqueria"
//       },
//       food_name: "Pork Sausage Links",
//       rating: 5,
//       numRecommend: 0,
//       description: "Ground pork, herbs and spices in a natural casing. ",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0
//     },
//     {
//       allergens: [],
//       food_name: "Chicken Chop Salad",
//       numReviews: 0,
//       description: "Romaine lettuce, hardboiled eggs, spiced candied bacon, roasted corn, tarragon chicken, roasted kabocha squash and jalapeno cilantro ranch topped with avocado and goat cheese",
//       food_id: "50",
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Market 64"
//       },
//       cost: 10.5,
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0
//     },
//     {
//       rating: 5,
//       numRecommend: 0,
//       location: {
//         name: "Market 64",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       allergens: [],
//       food_id: "51",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       food_name: "Fall Root & Grain Salad",
//       cost: 8,
//       description: "Quinoa, arugula, spinach, roasted beets, roasted brussel sprouts, goat cheese, chopped walnuts and balsamic vinaigrette"
//     },
//     {
//       numReviews: 0,
//       numRecommend: 0,
//       cost: 9,
//       food_name: "Roasted Squash Salad",
//       food_id: "52",
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       allergens: [],
//       location: {
//         dining_hall: "64degrees",
//         name: "Market 64",
//         location_id: 0
//       },
//       description: "Baby kale, quinoa, spiced butternut squash, bosc pear, roasted beets and beet dressing topped with roasted carrots and tomato and blistered bell pepper mix"
//     },
//     {
//       rating: 5,
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Market 64"
//       },
//       food_id: "53",
//       img: "/images/placeHolderImage.png",
//       food_name: "Southwest Grain Bowl",
//       cost: 7.5,
//       description: "Quinoa, baby kale, black beans, corn and pepper blend, roasted carrots, pickled onions, cherry tomatoes, queso fresco, pepitas and charred scallion cilantro dressing",
//       allergens: [],
//       numRecommend: 0,
//       numReviews: 0
//     },
//     {
//       allergens: [],
//       description: "Spring mix, sliced pear, red grapes, celery, roasted carrots, feta cheese and pomegranate vinaigrette topped with pomegranate seeds, craisins and spicy mayo",
//       img: "/images/placeHolderImage.png",
//       food_id: "54",
//       cost: 8,
//       numReviews: 0,
//       numRecommend: 0,
//       food_name: "Waldo Salad",
//       location: {
//         name: "Market 64",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       rating: 5
//     },
//     {
//       cost: 4.75,
//       description: "Rich red soup with chicken, chiles, and hominy topped with cabbage, diced onion cilantro, and shredded radish",
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       numRecommend: 0,
//       food_name: "Chicken Pozole Rojo Plate",
//       allergens: [],
//       location: {
//         dining_hall: "64degrees",
//         name: "Market 64",
//         location_id: 0
//       },
//       numReviews: 0,
//       food_id: "55"
//     },
//     {
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       description: "Marinated pork al pastro over rice and pinto beans with lettuce, pico de gallo, cotija cheese, onion and cilantro",
//       food_name: "Al Pastor Pork Bowl",
//       numRecommend: 0,
//       numReviews: 0,
//       cost: 9.5,
//       food_id: "56",
//       allergens: [],
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       }
//     },
//     {
//       allergens: [],
//       numRecommend: 0,
//       description: "Shredded beef birria over Spanish rice and pinto beans with lettuce, pico de gallo, chipotle-lime crema, and cotija cheese",
//       numReviews: 0,
//       rating: 5,
//       cost: 9.5,
//       img: "/images/placeHolderImage.png",
//       food_id: "57",
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       },
//       food_name: "Birria Bowl"
//     },
//     {
//       description: "Fried tortilla chips topped with shredded beef birria, spicy jalapeno cheese sauce, pinto beans, chipotle-lime crema, pico de gallo, guacamole, and cotija cheese",
//       img: "/images/placeHolderImage.png",
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       allergens: [],
//       food_name: "Birria Nachos",
//       food_id: "58",
//       numRecommend: 0,
//       cost: 11,
//       rating: 5,
//       numReviews: 0
//     },
//     {
//       food_id: "59",
//       rating: 5,
//       cost: 7,
//       img: "/images/placeHolderImage.png",
//       description: "Cheese nachos with refried beans, jalapeno cheese sauce, chipotle lime crema, pico de gallo, guacamole, and cotija cheese served over crispy tortilla chips",
//       allergens: [],
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Taqueria"
//       },
//       numReviews: 0,
//       food_name: "Cheese Nacho",
//       numRecommend: 0
//     },
//     {
//       allergens: [],
//       numReviews: 0,
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Taqueria"
//       },
//       food_name: "Scrambled Egg Whites",
//       numRecommend: 0,
//       cost: 2.75,
//       description: "Scrambled egg whites ",
//       img: "/images/placeHolderImage.png",
//       food_id: "6",
//       rating: 5
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       food_id: "60",
//       location: {
//         name: "Taqueria",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       cost: 7.5,
//       description: "Mushroom carnitas over rice and beans with lettuce, pico de gallo, and chipotle lime crema.",
//       allergens: [],
//       numReviews: 0,
//       food_name: "Mushroom Carnitas Bowl",
//       numRecommend: 0
//     },
//     {
//       food_name: "Mushroom Carnitas Nacho",
//       description: "Mushroom carnitas, refried beans, jalapeno cheese sauce, chipotle aioli, pico de gallo, and guacamole served over crispy tortilla chips",
//       food_id: "61",
//       numReviews: 0,
//       numRecommend: 0,
//       allergens: [],
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Taqueria"
//       },
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       cost: 9
//     },
//     {
//       numRecommend: 0,
//       cost: 9.5,
//       allergens: [],
//       food_id: "62",
//       img: "/images/placeHolderImage.png",
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Taqueria"
//       },
//       numReviews: 0,
//       food_name: "Pollo Asado Bowl",
//       description: "Pollo asado over Spanish rice and topped with smoky Peruvian beans, shredded lettuce, pico de gallo, and chipotle lime crema",
//       rating: 5
//     },
//     {
//       numReviews: 0,
//       rating: 5,
//       food_name: "Pollo Asado Nachos",
//       img: "/images/placeHolderImage.png",
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       },
//       allergens: [],
//       cost: 10,
//       description: "Pollo Asado, refried beans, jalapeno cheese sauce, chipotle aioli, pico de gallo, and guacamole served over crispy tortilla chips",
//       numRecommend: 0,
//       food_id: "63"
//     },
//     {
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Taqueria"
//       },
//       numReviews: 0,
//       rating: 5,
//       food_id: "64",
//       food_name: "Pork al Pastor Nachos",
//       description: "Nachos with jalapeno cheese, refried beans, pork al pastor, chipotle aioli, pico de gallo, guacamole, and cotija cheese",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       cost: 11
//     },
//     {
//       allergens: [],
//       food_name: "Al Pastor Pork Burrito",
//       numRecommend: 0,
//       description: "Marinated pork al pastor, rice, pinto beans, lettuce, pico de gallo, and cotija cheese in a tortilla",
//       numReviews: 0,
//       img: "/images/placeHolderImage.png",
//       cost: 9.5,
//       food_id: "65",
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       rating: 5
//     },
//     {
//       allergens: [],
//       numRecommend: 0,
//       food_id: "66",
//       numReviews: 0,
//       cost: 11,
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       },
//       rating: 5,
//       img: "/images/placeHolderImage.png",
//       food_name: "Baja Fish Burrito",
//       description: "Crispy battered fish with green cabbage, pico de gallo, beans, Spanish rice, salsa verde in a tortilla"
//     },
//     {
//       cost: 9.5,
//       food_name: "Birria Burrito",
//       numRecommend: 0,
//       allergens: [],
//       description: "Shredded beef birria, pinto beans, Spanish rice, lettuce, pico de gallo, and cotija cheese in a 12\" tortilla",
//       rating: 5,
//       food_id: "67",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       location: {
//         name: "Taqueria",
//         location_id: 0,
//         dining_hall: "64degrees"
//       }
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       numRecommend: 0,
//       description: "Grilled tortilla with shredded quesadilla cheese and shredded beef birria served with lettuce and guacamole",
//       rating: 5,
//       food_name: "Birria Quesadilla",
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       },
//       food_id: "68",
//       allergens: [],
//       cost: 10
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       food_id: "69",
//       numRecommend: 0,
//       description: "Grilled tortilla with melted queso quesadilla cheese served with lettuce and guacamole",
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       },
//       allergens: [],
//       rating: 5,
//       cost: 5.5,
//       food_name: "Cheese Quesadilla"
//     },
//     {
//       food_id: "7",
//       location: {
//         name: "Taqueria",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       img: "/images/placeHolderImage.png",
//       cost: 2.75,
//       allergens: [],
//       numReviews: 0,
//       numRecommend: 0,
//       food_name: "Scrambled Eggs",
//       description: "Scrambled Eggs ",
//       rating: 5
//     },
//     {
//       description: "Mushroom carnitas, rice, smoky beans, lettuce, pico de gallo, in a tortilla.",
//       numRecommend: 0,
//       numReviews: 0,
//       allergens: [],
//       food_name: "Mushroom Asada Burrito",
//       food_id: "70",
//       rating: 5,
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Taqueria"
//       },
//       img: "/images/placeHolderImage.png",
//       cost: 8.5
//     },
//     {
//       numRecommend: 0,
//       rating: 5,
//       numReviews: 0,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       description: "Grilled tortilla with seasoned sauteed mushrooms and shredded queso quesadilla cheese served with lettuce and guacamole",
//       cost: 7.5,
//       food_name: "Mushroom Asada Quesadilla",
//       food_id: "71",
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       }
//     },
//     {
//       allergens: [],
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       food_name: "Pollo Asado Burrito",
//       description: "Grilled chicken Mexico City style, Peruvian smoky beans, cilantro rice, pico de gallo, lime-chipotle crema in a 12\" flour tortilla",
//       food_id: "72",
//       cost: 9.5,
//       numReviews: 0,
//       rating: 5,
//       numRecommend: 0
//     },
//     {
//       food_id: "73",
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       description: "Grilled tortilla with Tangy Pollo Adobado, and shredded queso quesadilla cheese served with lettuce and guacamole",
//       food_name: "Pollo Asado Quesadilla",
//       allergens: [],
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Taqueria"
//       },
//       numReviews: 0,
//       cost: 9.5
//     },
//     {
//       cost: 9.5,
//       rating: 5,
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       numReviews: 0,
//       food_name: "Pork al Pastor Quesadilla",
//       food_id: "74",
//       description: "Pork al Pastor, shredded quesadilla cheesein a crunchy flour tortilla served with lettuce and guacamole",
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       }
//     },
//     {
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Taqueria"
//       },
//       description: "Peruvian smoky refried beans and shredded cheddar/jack cheese wrapped in a 12\" flour tortilla.",
//       food_name: "Smoky Beans and Cheese Burrito",
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       numRecommend: 0,
//       food_id: "75",
//       rating: 5,
//       cost: 6.5,
//       numReviews: 0
//     },
//     {
//       food_id: "76",
//       description: "Crispy fried corn tortillas with salsa roja and salsa verde.",
//       cost: 3.5,
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       numRecommend: 0,
//       food_name: "Chips & Salsa",
//       allergens: [],
//       location: {
//         name: "Taqueria",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       rating: 5
//     },
//     {
//       allergens: [],
//       food_name: "Chocoflan Cake",
//       food_id: "77",
//       numReviews: 0,
//       cost: 2.75,
//       img: "/images/placeHolderImage.png",
//       description: "Chocolate cake layered with flan custard and caramel sauce and topped with a cherry",
//       rating: 5,
//       numRecommend: 0,
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "Taqueria"
//       }
//     },
//     {
//       numReviews: 0,
//       allergens: [],
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       cost: 1.5,
//       description: "Mashed avocado, tomatoes, onions, cilantro, jalapeno peppers, lime juice, and salt.",
//       food_name: "Guacamole",
//       food_id: "78",
//       numRecommend: 0
//     },
//     {
//       numReviews: 0,
//       allergens: [],
//       numRecommend: 0,
//       food_id: "79",
//       food_name: "Spanish Rice",
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       },
//       rating: 5,
//       cost: 2.5,
//       img: "/images/placeHolderImage.png",
//       description: "Traditional Spanish Rice"
//     },
//     {
//       cost: 3.5,
//       numReviews: 0,
//       description: "Hot steel cut oats with your choice of toppings ",
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Taqueria"
//       },
//       rating: 5,
//       allergens: [],
//       food_name: "Steel Cut Oatmeal",
//       img: "/images/placeHolderImage.png",
//       food_id: "8"
//     },
//     {
//       food_name: "Taqueria Beans",
//       cost: 2.5,
//       rating: 5,
//       description: "Pinto beans stewed with onion, jalapeno, tomato, soyrizo, and spices",
//       numRecommend: 0,
//       food_id: "80",
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       allergens: []
//     },
//     {
//       numRecommend: 0,
//       cost: 7,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       allergens: [],
//       numReviews: 0,
//       food_id: "81",
//       food_name: "Al Pastor Pork Tacos",
//       description: "Al pastor pork taco on corn tortilla with guacamole, onion and cilantro",
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       }
//     },
//     {
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       img: "/images/placeHolderImage.png",
//       food_id: "82",
//       cost: 7,
//       food_name: "Birria Tacos",
//       description: "2 tacos with shredded beef birria, avocado, onion, and cilantro on corn tortillas, served with a lime wedge",
//       allergens: [],
//       rating: 5,
//       numReviews: 0,
//       numRecommend: 0
//     },
//     {
//       description: "2 tacos of mushroom carnitas, guacamole and clilantro/onion relish in a corn tortilla.",
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       food_name: "Mushroom Carnitas Tacos",
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       },
//       numReviews: 0,
//       cost: 5.5,
//       numRecommend: 0,
//       rating: 5,
//       food_id: "83"
//     },
//     {
//       allergens: [],
//       food_name: "Pollo Asado Tacos",
//       img: "/images/placeHolderImage.png",
//       numReviews: 0,
//       numRecommend: 0,
//       cost: 7,
//       description: "2 tacos of pollo asado, guacamole, and chopped cilantro/onion on mini corn tortillas.",
//       rating: 5,
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       },
//       food_id: "84"
//     },
//     {
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       food_name: "San Diego Fish Tacos",
//       cost: 8,
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       },
//       rating: 5,
//       description: "San Diego style fish tacos with zarandeado fish, cabbage, pickled onion, and cilantro.",
//       numRecommend: 0,
//       food_id: "85",
//       numReviews: 0
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       food_id: "86",
//       description: "San Diego style fishless tacos with zarandeado sauce, cabbage, pickled onion, and cilantro.",
//       cost: 8,
//       location: {
//         name: "Taqueria",
//         dining_hall: "64degrees",
//         location_id: 0
//       },
//       rating: 5,
//       food_name: "San Diego Fishless Tacos",
//       numReviews: 0,
//       numRecommend: 0,
//       allergens: []
//     },
//     {
//       food_name: "Birria Fritas",
//       food_id: "87",
//       numRecommend: 0,
//       location: {
//         dining_hall: "64degrees",
//         name: "Taqueria",
//         location_id: 0
//       },
//       description: "Crispy fries with shredded beef birria, spicy jalapeno cheese sauce, lime crema, guacamole, pico de gallo, and cotija cheese",
//       cost: 12,
//       rating: 5,
//       allergens: [],
//       img: "/images/placeHolderImage.png",
//       numReviews: 0
//     },
//     {
//       location: {
//         name: "Taqueria",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       description: "Cheese fries with guacamole, chipotle lime crema, and pico de gallo",
//       food_id: "88",
//       allergens: [],
//       cost: 7,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_name: "Cheese Fries",
//       rating: 5,
//       numReviews: 0
//     },
//     {
//       cost: 10,
//       food_id: "89",
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "Taqueria"
//       },
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       food_name: "Mushroom Carnitas Fritas",
//       rating: 5,
//       numReviews: 0,
//       description: "Crispy fries with mushroom carnitas, spicy jalapeno cheese sauce, lime crema, guacamole, and pico de gallo",
//       allergens: []
//     },
//     {
//       cost: 3.75,
//       numReviews: 0,
//       food_id: "9",
//       numRecommend: 0,
//       food_name: "Tater Tots",
//       rating: 5,
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       },
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       description: "Crispy fried potato barrels."
//     },
//     {
//       food_name: "Pollo Asado Fries",
//       description: "Pollo asado, guacamole, chipotle lime crema, and pico served over fries.",
//       food_id: "90",
//       allergens: [],
//       numRecommend: 0,
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       },
//       img: "/images/placeHolderImage.png",
//       cost: 11,
//       numReviews: 0,
//       rating: 5
//     },
//     {
//       location: {
//         location_id: 0,
//         name: "Taqueria",
//         dining_hall: "64degrees"
//       },
//       numReviews: 0,
//       cost: 12,
//       img: "/images/placeHolderImage.png",
//       allergens: [],
//       numRecommend: 0,
//       rating: 5,
//       description: "Crispy fries with pork al pastor, spicy jalapeno cheese sauce, lime crema, guacamole, and pico de gallo",
//       food_id: "91",
//       food_name: "Pork al Pastor Fries"
//     },
//     {
//       food_id: "92",
//       location: {
//         name: "TritonGrill",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       numReviews: 0,
//       description: "Brioche bun with choice of patty, jalapeno creme, avocado, crispy fried onions, and tomato jam",
//       numRecommend: 0,
//       cost: 12,
//       allergens: [],
//       rating: 5,
//       food_name: "California Burger",
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       rating: 5,
//       food_name: "Kabocha Burger",
//       cost: 9,
//       img: "/images/placeHolderImage.png",
//       numRecommend: 0,
//       food_id: "93",
//       allergens: [],
//       numReviews: 0,
//       description: "Brioche bun with roasted butternut aioli, choice of patty, honey sriracha kabocha squash, shredded lettuce, roasted onions and tomato confit",
//       location: {
//         dining_hall: "64degrees",
//         location_id: 0,
//         name: "TritonGrill"
//       }
//     },
//     {
//       numRecommend: 0,
//       img: "/images/placeHolderImage.png",
//       rating: 5,
//       allergens: [],
//       description: "Choice of patty with american cheese, onion rings, and BBQ sauce",
//       food_name: "Texas BBQ Style",
//       cost: 10,
//       numReviews: 0,
//       location: {
//         name: "TritonGrill",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       food_id: "94"
//     },
//     {
//       numRecommend: 0,
//       allergens: [],
//       cost: 3.5,
//       img: "/images/placeHolderImage.png",
//       food_name: "Bacon Slice (1)",
//       rating: 5,
//       description: "Crispy cured pork belly.",
//       food_id: "95",
//       numReviews: 0,
//       location: {
//         location_id: 0,
//         dining_hall: "64degrees",
//         name: "TritonGrill"
//       }
//     },
//     {
//       food_id: "96",
//       rating: 5,
//       cost: 3.75,
//       food_name: "Bacon Pomegranate Brussels Sprouts",
//       allergens: [],
//       numRecommend: 0,
//       description: "Roasted brussel sprouts and bacon drizzled with pomegranate molasses and garnished with pomegranate seeds",
//       location: {
//         location_id: 0,
//         name: "TritonGrill",
//         dining_hall: "64degrees"
//       },
//       numReviews: 0,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       food_name: "Chicken Tenders",
//       allergens: [],
//       cost: 7,
//       location: {
//         location_id: 0,
//         name: "TritonGrill",
//         dining_hall: "64degrees"
//       },
//       food_id: "97",
//       numReviews: 0,
//       numRecommend: 0,
//       description: "Crispy breaded chicken tenders ",
//       rating: 5,
//       img: "/images/placeHolderImage.png"
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       description: "Fried curly potato fries",
//       location: {
//         location_id: 0,
//         name: "TritonGrill",
//         dining_hall: "64degrees"
//       },
//       cost: 3.75,
//       numRecommend: 0,
//       food_name: "Curly Fries",
//       food_id: "98",
//       numReviews: 0,
//       rating: 5,
//       allergens: []
//     },
//     {
//       img: "/images/placeHolderImage.png",
//       food_name: "French Fries",
//       description: "Seasoned crispy fried potato batons.",
//       numRecommend: 0,
//       rating: 5,
//       allergens: [],
//       food_id: "99",
//       cost: 3.75,
//       location: {
//         name: "TritonGrill",
//         location_id: 0,
//         dining_hall: "64degrees"
//       },
//       numReviews: 0
//     }
//   ];
