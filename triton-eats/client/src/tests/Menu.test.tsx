import React from 'react';
import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../context/MenuContext';
import App from '../App';
import { Menu } from '../pages/Menu';
import { mockDishes } from '../constants/menuConstants';
import { dishItem } from '../types/menuTypes';
import { fetchDishes } from '../utils/menu-utils';


// Mock the API calls at the top level of the test file
jest.mock('../utils/menu-utils', () => ({
    fetchDishes: jest.fn(),
}));

beforeEach( async () => {
    (fetchDishes as jest.Mock).mockResolvedValue(mockDishes);

    render(
        <BrowserRouter>
            <AppProvider>
                <Menu />
            </AppProvider>
        </BrowserRouter>
    );
    await waitFor(() => {
        expect(screen.getByTestId('dish-0')).toBeInTheDocument();
    });
});
afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe("Menu CSS", () => {
    test("Search Bar exists", () => {
        const searchBar = screen.getByPlaceholderText("Search...");
        expect(searchBar).toBeInTheDocument();
    });

    test("navBar exists", () => {
        const navBar = screen.getByText("Name");
        expect(navBar).toBeInTheDocument();
    });

    test("Sorting Buttons exists", () => {
        const sortButtons = screen.getByText("Rate");
        expect(sortButtons).toBeInTheDocument();
    });

    test("Filter Box exists", () => {
        const filterBox = screen.getByText("Location");
        expect(filterBox).toBeInTheDocument();
    });
}),

describe("Menu Sorting", () => {
    test("Sorts by price descend", () => {
        //getting the buttons
        const price = screen.getByTestId("priceSort");
        const item1 = screen.getByTestId('dish-0');
        const item2 = screen.getByTestId('dish-1');
        const item3 = screen.getByTestId('dish-2');
        const item4 = screen.getByTestId('dish-3');
        const item5 = screen.getByTestId('dish-4');
        const item6 = screen.getByTestId('dish-5');
        const item7 = screen.getByTestId('dish-6');
        const item8 = screen.getByTestId('dish-7');
        const item9 = screen.getByTestId('dish-8');
        const item10 = screen.getByTestId('dish-9');
        const item11 = screen.getByTestId('dish-10');
        const item12 = screen.getByTestId('dish-11');

        //first click to check descending
        fireEvent.click(price);
            //Node.DOCUMENT_POSITION_PRECEDING (2)
            //Node.DOCUMENT_POSITION_FOLLOWING (4)
        expect(item1.compareDocumentPosition(item2)).toBe(4),
        expect(item2.compareDocumentPosition(item3)).toBe(4),
        expect(item3.compareDocumentPosition(item4)).toBe(4),
        expect(item4.compareDocumentPosition(item5)).toBe(4),
        expect(item5.compareDocumentPosition(item6)).toBe(4),
        expect(item6.compareDocumentPosition(item7)).toBe(4),
        expect(item7.compareDocumentPosition(item8)).toBe(4),
        expect(item8.compareDocumentPosition(item9)).toBe(4),
        expect(item9.compareDocumentPosition(item10)).toBe(4),
        expect(item10.compareDocumentPosition(item11)).toBe(4),
        expect(item11.compareDocumentPosition(item12)).toBe(4);
    });
    test("Sorts by price ascend", () => {
        //getting the buttons
        const price = screen.getByTestId("priceSort");
        //two clicks to check ascend
        fireEvent.click(price),
        fireEvent.click(price);
   
        const item1 = screen.getByTestId('dish-0');
        const item2 = screen.getByTestId('dish-1');
        const item3 = screen.getByTestId('dish-2');
        const item4 = screen.getByTestId('dish-3');
        const item5 = screen.getByTestId('dish-4');
        const item6 = screen.getByTestId('dish-5');
        const item7 = screen.getByTestId('dish-6');
        const item8 = screen.getByTestId('dish-7');
        const item9 = screen.getByTestId('dish-8');
        const item10 = screen.getByTestId('dish-9');
        const item11 = screen.getByTestId('dish-10');
        const item12 = screen.getByTestId('dish-11');
        
            //Node.DOCUMENT_POSITION_PRECEDING (2)
            //Node.DOCUMENT_POSITION_FOLLOWING (4)
        expect(item1.compareDocumentPosition(item2)).toBe(2),
        expect(item2.compareDocumentPosition(item3)).toBe(2),
        expect(item3.compareDocumentPosition(item4)).toBe(2),
        expect(item4.compareDocumentPosition(item5)).toBe(2),
        expect(item5.compareDocumentPosition(item6)).toBe(2),
        expect(item6.compareDocumentPosition(item7)).toBe(2),
        expect(item7.compareDocumentPosition(item8)).toBe(2),
        expect(item8.compareDocumentPosition(item9)).toBe(2),
        expect(item9.compareDocumentPosition(item10)).toBe(2),
        expect(item10.compareDocumentPosition(item11)).toBe(2),
        expect(item11.compareDocumentPosition(item12)).toBe(2);
    });
    test("Sorts by name descend", () => {
        //getting the buttons
        const name = screen.getByTestId("nameSort");

        //first click to check descending
        fireEvent.click(name);

        const item1 = screen.getByTestId('dish-0');
        const item2 = screen.getByTestId('dish-1');
        const item3 = screen.getByTestId('dish-2');
        const item4 = screen.getByTestId('dish-3');
        const item5 = screen.getByTestId('dish-4');
        const item6 = screen.getByTestId('dish-5');
        const item7 = screen.getByTestId('dish-6');
        const item8 = screen.getByTestId('dish-7');
        const item9 = screen.getByTestId('dish-8');
        const item10 = screen.getByTestId('dish-9');
        const item11 = screen.getByTestId('dish-10');
        const item12 = screen.getByTestId('dish-11');

            //Node.DOCUMENT_POSITION_PRECEDING (2)
            //Node.DOCUMENT_POSITION_FOLLOWING (4)
        expect(item1.compareDocumentPosition(item2)).toBe(4),
        expect(item2.compareDocumentPosition(item3)).toBe(4),
        expect(item3.compareDocumentPosition(item4)).toBe(4),
        expect(item4.compareDocumentPosition(item5)).toBe(4),
        expect(item5.compareDocumentPosition(item6)).toBe(4),
        expect(item6.compareDocumentPosition(item7)).toBe(4),
        expect(item7.compareDocumentPosition(item8)).toBe(4),
        expect(item8.compareDocumentPosition(item9)).toBe(4),
        expect(item9.compareDocumentPosition(item10)).toBe(4),
        expect(item10.compareDocumentPosition(item11)).toBe(4),
        expect(item11.compareDocumentPosition(item12)).toBe(4);
    });
    test("Sorts by name ascend", () => {
        //getting the buttons
        const name = screen.getByTestId("nameSort");

        //two clicks to check ascend
        fireEvent.click(name),
        fireEvent.click(name);

        
        const item1 = screen.getByTestId('dish-0');
        const item2 = screen.getByTestId('dish-1');
        const item3 = screen.getByTestId('dish-2');
        const item4 = screen.getByTestId('dish-3');
        const item5 = screen.getByTestId('dish-4');
        const item6 = screen.getByTestId('dish-5');
        const item7 = screen.getByTestId('dish-6');
        const item8 = screen.getByTestId('dish-7');
        const item9 = screen.getByTestId('dish-8');
        const item10 = screen.getByTestId('dish-9');
        const item11 = screen.getByTestId('dish-10');
        const item12 = screen.getByTestId('dish-11');

            //Node.DOCUMENT_POSITION_PRECEDING (2)
            //Node.DOCUMENT_POSITION_FOLLOWING (4)
        expect(item1.compareDocumentPosition(item2)).toBe(2),
        expect(item2.compareDocumentPosition(item3)).toBe(2),
        expect(item3.compareDocumentPosition(item4)).toBe(2),
        expect(item4.compareDocumentPosition(item5)).toBe(2),
        expect(item5.compareDocumentPosition(item6)).toBe(2),
        expect(item6.compareDocumentPosition(item7)).toBe(2),
        expect(item7.compareDocumentPosition(item8)).toBe(2),
        expect(item8.compareDocumentPosition(item9)).toBe(2),
        expect(item9.compareDocumentPosition(item10)).toBe(2),
        expect(item10.compareDocumentPosition(item11)).toBe(2),
        expect(item11.compareDocumentPosition(item12)).toBe(2);
    });
    test("Sorts by name descend", () => {
        //getting the buttons
        const rate = screen.getByTestId("rateSort");

        //first click to check descending
        fireEvent.click(rate),
        fireEvent.click(rate);

        const item1 = screen.getByTestId('dish-0');
        const item2 = screen.getByTestId('dish-1');
        const item3 = screen.getByTestId('dish-2');
        const item4 = screen.getByTestId('dish-3');
        const item5 = screen.getByTestId('dish-4');
        const item6 = screen.getByTestId('dish-5');
        const item7 = screen.getByTestId('dish-6');
        const item8 = screen.getByTestId('dish-7');
        const item9 = screen.getByTestId('dish-8');
        const item10 = screen.getByTestId('dish-9');
        const item11 = screen.getByTestId('dish-10');
        const item12 = screen.getByTestId('dish-11');

            //Node.DOCUMENT_POSITION_PRECEDING (2)
            //Node.DOCUMENT_POSITION_FOLLOWING (4)
        expect(item2.compareDocumentPosition(item4)).toBe(4),
        expect(item6.compareDocumentPosition(item8)).toBe(4),
        expect(item8.compareDocumentPosition(item10)).toBe(4),
        expect(item11.compareDocumentPosition(item12)).toBe(4);
    });
    test("Sorts by rate ascend", () => {
        //getting the buttons
        const rate = screen.getByTestId("rateSort");

        //two clicks to check ascend
        fireEvent.click(rate);

        
        const item1 = screen.getByTestId('dish-0');
        const item2 = screen.getByTestId('dish-1');
        const item3 = screen.getByTestId('dish-2');
        const item4 = screen.getByTestId('dish-3');
        const item5 = screen.getByTestId('dish-4');
        const item6 = screen.getByTestId('dish-5');
        const item7 = screen.getByTestId('dish-6');
        const item8 = screen.getByTestId('dish-7');
        const item9 = screen.getByTestId('dish-8');
        const item10 = screen.getByTestId('dish-9');
        const item11 = screen.getByTestId('dish-10');
        const item12 = screen.getByTestId('dish-11');

            //Node.DOCUMENT_POSITION_PRECEDING (2)
            //Node.DOCUMENT_POSITION_FOLLOWING (4)
        expect(item2.compareDocumentPosition(item4)).toBe(2),
        expect(item4.compareDocumentPosition(item6)).toBe(4),
        expect(item6.compareDocumentPosition(item8)).toBe(2),
        expect(item8.compareDocumentPosition(item10)).toBe(2),
        expect(item10.compareDocumentPosition(item11)).toBe(4),
        expect(item11.compareDocumentPosition(item12)).toBe(2);
    });
    test("Sorts by rate ascend", () => {
        //getting the buttons
        const rate = screen.getByTestId("rateSort");

        //two clicks to check ascend
        fireEvent.click(rate),
        fireEvent.click(rate);

        
        const item1 = screen.getByTestId('dish-0');
        const item2 = screen.getByTestId('dish-1');
        const item3 = screen.getByTestId('dish-2');
        const item4 = screen.getByTestId('dish-3');
        const item5 = screen.getByTestId('dish-4');
        const item6 = screen.getByTestId('dish-5');
        const item7 = screen.getByTestId('dish-6');
        const item8 = screen.getByTestId('dish-7');
        const item9 = screen.getByTestId('dish-8');
        const item10 = screen.getByTestId('dish-9');
        const item11 = screen.getByTestId('dish-10');
        const item12 = screen.getByTestId('dish-11');

            //Node.DOCUMENT_POSITION_PRECEDING (2)
            //Node.DOCUMENT_POSITION_FOLLOWING (4)
        expect(item2.compareDocumentPosition(item4)).toBe(4),
        expect(item4.compareDocumentPosition(item6)).toBe(2),
        expect(item6.compareDocumentPosition(item8)).toBe(4),
        expect(item8.compareDocumentPosition(item10)).toBe(4),
        expect(item10.compareDocumentPosition(item11)).toBe(2),
        expect(item11.compareDocumentPosition(item12)).toBe(4);
    });
}),

describe("Menu Searching", () => {
    test("Search a works", () => {
            //get searchbar
        const searchBar = screen.getByPlaceholderText("Search...");
            //get item we want to search for
        const item0 = screen.getByTestId('dish-0');//same box with the 'a' name
            //get item that shouldn't exist
        const item1 = screen.getByTestId('dish-1');//same box with the 'b' name
        const item2 = screen.getByTestId('dish-2');//same box with the 'c' name
        const item3 = screen.getByTestId('dish-3');//same box with the 'd' name
        const item4 = screen.getByTestId('dish-4');//same box with the 'e' name
        //change content in searchBar
        fireEvent.change(searchBar, { target: { value: "a" } });
        

        expect(item0).toBeInTheDocument(),
        expect(item1).not.toBeInTheDocument(),
        expect(item2).not.toBeInTheDocument(),
        expect(item3).not.toBeInTheDocument(),
        expect(item4).not.toBeInTheDocument();
    });
    test("Search blabla works", () => {
            //get searchbar
        const searchBar = screen.getByPlaceholderText("Search...");
            //get item that shouldn't exist
        const item0 = screen.getByTestId('dish-0');//same box with the 'a' name
        const item1 = screen.getByTestId('dish-1');//same box with the 'b' name
        const item2 = screen.getByTestId('dish-2');//same box with the 'c' name
        const item3 = screen.getByTestId('dish-3');//same box with the 'd' name
        const item4 = screen.getByTestId('dish-4');//same box with the 'e' name
        //change content in searchBar
        fireEvent.change(searchBar, { target: { value: "blabla" } });
        

        expect(item0).not.toBeInTheDocument(),
        expect(item1).not.toBeInTheDocument(),
        expect(item2).not.toBeInTheDocument(),
        expect(item3).not.toBeInTheDocument(),
        expect(item4).not.toBeInTheDocument();
    });
    
}),

describe("Menu Filter Location", () => {
    test("None", () => {
        //get loc check boxes
        const sixFour = screen.getByTestId('64degrees');
        const cafV = screen.getByTestId('cafeventanas');
        const cV = screen.getByTestId('canyonvista');
        const foodworx = screen.getByTestId('foodworx');
        const pines = screen.getByTestId('pines');
        const ovt = screen.getByTestId('ovt');
        //get item from each
        const item64 = screen.getByTestId('dish-0');
        const itemCafe = screen.getByTestId('dish-6');
        const itemCV = screen.getByTestId('dish-3');
        const itemFW = screen.getByTestId('dish-10');
        const itemP = screen.getByTestId('dish-1');
        const itemOVT = screen.getByTestId('dish-2');

        //select the ones I want gone
        fireEvent.click(sixFour),
        fireEvent.click(cafV),
        fireEvent.click(cV),
        fireEvent.click(foodworx),
        fireEvent.click(pines),
        fireEvent.click(ovt);

        expect(item64).not.toBeInTheDocument();
        expect(itemCafe).not.toBeInTheDocument();
        expect(itemCV).not.toBeInTheDocument();
        expect(itemFW).not.toBeInTheDocument();
        expect(itemP).not.toBeInTheDocument();
        expect(itemOVT).not.toBeInTheDocument();
        cleanup();
    });
    test("No 64 and ovt", () => {
        //get loc check boxes
        const sixFour = screen.getByTestId('64degrees');
        const cafV = screen.getByTestId('cafeventanas');
        const cV = screen.getByTestId('canyonvista');
        const foodworx = screen.getByTestId('foodworx');
        const pines = screen.getByTestId('pines');
        const ovt = screen.getByTestId('ovt');
        //get item from each
        const item64 = screen.getByTestId('dish-0');
        const itemCafe = screen.getByTestId('dish-6');
        const itemCV = screen.getByTestId('dish-3');
        const itemFW = screen.getByTestId('dish-10');
        const itemP = screen.getByTestId('dish-1');
        const itemOVT = screen.getByTestId('dish-2');

        //select the ones I want gone
        fireEvent.click(sixFour),
        fireEvent.click(ovt);

        expect(item64).not.toBeInTheDocument();
        expect(itemOVT).not.toBeInTheDocument();
        cleanup();
    });

    
});

// describe("Menu Filter Price", () => {
//     test("Range from 0 to 1", () => {
//         const subBut = screen.getByTestId('subButton');
//         fireEvent.change(screen.getByTestId(`slide`), { target: { value: [0, 1] } });

//         expect(subBut).toBeInTheDocument();

//     });

    
// });