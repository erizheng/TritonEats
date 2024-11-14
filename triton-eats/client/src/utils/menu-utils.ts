import { API_BASE_URL } from "../constants/menuConstants";
import { dishItem } from "../types/menuTypes";

export const createDish = async (dish: dishItem): Promise<dishItem> => {
	const response = await fetch(`${API_BASE_URL}/dishes`, {
    	method: "POST",
    	headers: {
        	"Content-Type": "application/json",
    	},
    	body: JSON.stringify(dish),
	});
	if (!response.ok) {
    	throw new Error("Failed to create dish");
	}
	return response.json();
};

export const fetchDishes = async (): Promise<dishItem[]> => {
	const response = await fetch(`${API_BASE_URL}/dishes`);
	if (!response.ok) {
    	throw new Error('Failed to fetch dishes');
	}

	// Parsing the response to get the data
	let dishItemList = response.json().then((jsonResponse) => {
    	console.log("data in fetchDishes", jsonResponse);
    	return jsonResponse.data;
	});

	console.log("response in fetchDishes", dishItemList);
	return dishItemList;
};

export const sortDishes = async (sortedList: dishItem[]): Promise<dishItem[]> => {
	const response = await fetch(`${API_BASE_URL}/dishes`, {
    	method: "PUT",
        headers: {
        	"Content-Type": "application/json",
    	},
        body: JSON.stringify( {sortedList} ),
	});

	if (!response.ok) {
    	throw new Error("Failed to sort list");
	}

	return sortedList;
};