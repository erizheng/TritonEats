import * as cheerio from 'cheerio';

import { DiningHalls, MenuItem } from '../types';
import { HDHEndpoints } from '../constants';

function parseMenuItems(diningHall: DiningHalls, dom: cheerio.CheerioAPI, restaurant: string) {

    const menuItems = dom('.menU-item-row').toArray();

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

        return <MenuItem> { name, price, description, diningHall, restaurant };
    });

    return items;

}

export async function fetchMenuItems(diningHall : DiningHalls, daysFromNow : number) {

    const response = await fetch(HDHEndpoints[diningHall]);
    // wait for all the data to be fetched
    const data = await response.text();

    const dom = cheerio.load(data);

    const restaurants = dom('.menu-category-section').toArray();

    let items : MenuItem[] = [];
    restaurants.forEach(restaurant => {
        const restaurantName = dom(restaurant).find('h3').text();
        console.log(restaurantName);
        items = items.concat( parseMenuItems(diningHall, dom, restaurantName));
    });

    return items.filter((item, pos) => {

        if(item === null) {
            return false;
        }

        const index = items.findIndex(i => {
            if(i === null) {
                return false;
            }

            return i && i.name === item.name;
        });

        return index === pos;

    })

}