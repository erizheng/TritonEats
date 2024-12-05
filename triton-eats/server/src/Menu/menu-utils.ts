import * as cheerio from 'cheerio';

import { DiningHalls, dishItem, location, Allergens } from './types';
import { HDHEndpoints, LocationImages } from './constants';
import { findDish, updateDishDB, addDishToDB } from './menu-database';

function parseMenuItems(diningHall: DiningHalls, dom: cheerio.Root, restaurantElement: cheerio.Cheerio) {

    const menuItems = restaurantElement.find('.menU-item-row').toArray();
    const restaurant = restaurantElement.find('h3').text().replace(/^ +/g, '');
    
    let items = menuItems.flatMap(item => {
        const name = dom(item).find('.sublocsitem').text();
        let priceString = dom(item).find('.item-price').text()
            .match(/\d+.\d+/g);
        const price = priceString ? parseFloat(priceString[0]) : null;
        const description = dom(item).find('.proI').text()
                .replace(/\n +/g, '');

            if(!name || !price || !description) {
                return [];
            }
    
        const allergens = dom(item).find('img').toArray().map(img => {
            return <Allergens> dom(img).attr('title');
        });

            return mockDishItem(name, price, description, diningHall, restaurant, allergens);
    });

    return items;

}

function mockDishItem(food_name: string, cost: number, description: string, diningHall: DiningHalls, restaurant: string, allergens: Allergens[]) {
    
    const location = <location> { name: restaurant, dining_hall: diningHall, location_id: 0 };
    return <dishItem> { food_id: "0", img: LocationImages[diningHall], food_name, cost, location, allergens, rating: 5, description, numReviews: 0, numRecommend: 0 };

}

export async function fetchMenuItems(diningHall : DiningHalls) {

    const response = await fetch(HDHEndpoints[diningHall]);
    // wait for all the data to be fetched
    const data = await response.text();

    const dom = cheerio.load(data);

    const restaurants = dom('.menu-category-section').toArray();

    let items : dishItem[] = [];
    restaurants.forEach(restaurant => {
        const restaurantElement = dom(restaurant);
        items = items.concat( parseMenuItems(diningHall, dom, restaurantElement));
    });

    return items.filter((item, pos) => {

        if(item === null) {
            return false;
        }

        const index = items.findIndex(i => {
            if(i === null) {
                return false;
            }

            return i && i.food_name === item.food_name;
        });

        return index === pos;

    })

}

export async function fetchAllMenuItems() {
    const diningHalls = Object.values(DiningHalls);
    let items : dishItem[] = [];
    for(const diningHall of diningHalls) {
        items = items.concat(await fetchMenuItems(diningHall));
    }

    return items;
}

export async function populateDatabase() {
    const dishes = await fetchAllMenuItems();

    for(const dish of dishes) {
        await addDishToDB(dish);
    }

}