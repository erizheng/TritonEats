import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../context/MenuContext';
import App from '../App';
import { Menu } from '../pages/Menu';

describe("Menu CSS", () => {
    test("Search Bar exists", () => {
        render(<BrowserRouter>
                <AppProvider>
                    <Menu />
                </AppProvider>
                </BrowserRouter>);
   
        const searchBar = screen.getByPlaceholderText("Search...");
        expect(searchBar).toBeInTheDocument();
    });

    test("navBar exists", () => {
        render(<BrowserRouter>
            <AppProvider>
                <Menu />
            </AppProvider>
            </BrowserRouter>);
   
        const navBar = screen.getByText("Name");
        expect(navBar).toBeInTheDocument();
    });

    test("Sorting Buttons exists", () => {
        render(<BrowserRouter>
            <AppProvider>
                <Menu />
            </AppProvider>
            </BrowserRouter>);
   
        const sortButtons = screen.getByText("Rate");
        expect(sortButtons).toBeInTheDocument();
    });

    test("Filter Box exists", () => {
        render(<BrowserRouter>
            <AppProvider>
                <Menu />
            </AppProvider>
            </BrowserRouter>);
   
        const filterBox = screen.getByText("Location");
        expect(filterBox).toBeInTheDocument();
    });
}),

describe("Menu Sorting", () => {
    test("Sorts by price descend", () => {
        render(<BrowserRouter>
                <AppProvider>
                    <Menu />
                </AppProvider>
                </BrowserRouter>);
   
        //getting the buttons
        const price = screen.getByTestId("priceSort");
        const item1 = screen.getByText('$1');
        const item2 = screen.getByText('$2');
        const item3 = screen.getByText('$3');
        const item4 = screen.getByText('$4');
        const item5 = screen.getByText('$5');
        const item6 = screen.getByText('$6');
        const item7 = screen.getByText('$7');
        const item8 = screen.getByText('$8');
        const item9 = screen.getByText('$9');
        const item10 = screen.getByText('$10');
        const item11 = screen.getByText('$11');
        const item12 = screen.getByText('$12');

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
        render(<BrowserRouter>
                <AppProvider>
                    <Menu />
                </AppProvider>
                </BrowserRouter>);

        //getting the buttons
        const price = screen.getByTestId("priceSort");
        //two clicks to check ascend
        fireEvent.click(price),
        fireEvent.click(price);
   
        
        const item1 = screen.getByText('$1');
        const item2 = screen.getByText('$2');
        const item3 = screen.getByText('$3');
        const item4 = screen.getByText('$4');
        const item5 = screen.getByText('$5');
        const item6 = screen.getByText('$6');
        const item7 = screen.getByText('$7');
        const item8 = screen.getByText('$8');
        const item9 = screen.getByText('$9');
        const item10 = screen.getByText('$10');
        const item11 = screen.getByText('$11');
        const item12 = screen.getByText('$12');
        
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
        render(<BrowserRouter>
                <AppProvider>
                    <Menu />
                </AppProvider>
                </BrowserRouter>);
   
        //getting the buttons
        const name = screen.getByTestId("nameSort");

        //first click to check descending
        fireEvent.click(name);

        const item1 = screen.getByText('a');
        const item2 = screen.getByText('b');
        const item3 = screen.getByText('c');
        const item4 = screen.getByText('d');
        const item5 = screen.getByText('e');
        const item6 = screen.getByText('f');
        const item7 = screen.getByText('g');
        const item8 = screen.getByText('h');
        const item9 = screen.getByText('i');
        const item10 = screen.getByText('j');
        const item11 = screen.getByText('k');
        const item12 = screen.getByText('l');

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
        render(<BrowserRouter>
                <AppProvider>
                    <Menu />
                </AppProvider>
                </BrowserRouter>);
   
        //getting the buttons
        const name = screen.getByTestId("nameSort");

        //two clicks to check ascend
        fireEvent.click(name),
        fireEvent.click(name);

        const item1 = screen.getByText('a');
        const item2 = screen.getByText('b');
        const item3 = screen.getByText('c');
        const item4 = screen.getByText('d');
        const item5 = screen.getByText('e');
        const item6 = screen.getByText('f');
        const item7 = screen.getByText('g');
        const item8 = screen.getByText('h');
        const item9 = screen.getByText('i');
        const item10 = screen.getByText('j');
        const item11 = screen.getByText('k');
        const item12 = screen.getByText('l');

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
        render(<BrowserRouter>
                <AppProvider>
                    <Menu />
                </AppProvider>
                </BrowserRouter>);
   
        //getting the buttons
        const rate = screen.getByTestId("rateSort");

        //first click to check descending
        fireEvent.click(rate);

        const item2 = screen.getByText('0.2');
        const item4 = screen.getByText('1.3');
        const item6 = screen.getByText('2.7');
        const item8 = screen.getByText('3.8');
        const item10 = screen.getByText('4.4');
        const item11 = screen.getByText('4.9');
        const item12 = screen.getByText('5');

            //Node.DOCUMENT_POSITION_PRECEDING (2)
            //Node.DOCUMENT_POSITION_FOLLOWING (4)
        expect(item2.compareDocumentPosition(item4)).toBe(4),
        expect(item4.compareDocumentPosition(item6)).toBe(4),
        expect(item6.compareDocumentPosition(item8)).toBe(4),
        expect(item8.compareDocumentPosition(item10)).toBe(4),
        expect(item10.compareDocumentPosition(item11)).toBe(4),
        expect(item11.compareDocumentPosition(item12)).toBe(4);
    });
    test("Sorts by rate ascend", () => {
        render(<BrowserRouter>
                <AppProvider>
                    <Menu />
                </AppProvider>
                </BrowserRouter>);
   
        //getting the buttons
        const rate = screen.getByTestId("rateSort");

        //two clicks to check ascend
        fireEvent.click(rate),
        fireEvent.click(rate);

        const item2 = screen.getByText('0.2');
        const item4 = screen.getByText('1.3');
        const item6 = screen.getByText('2.7');
        const item8 = screen.getByText('3.8');
        const item10 = screen.getByText('4.4');
        const item11 = screen.getByText('4.9');
        const item12 = screen.getByText('5');

            //Node.DOCUMENT_POSITION_PRECEDING (2)
            //Node.DOCUMENT_POSITION_FOLLOWING (4)
        expect(item2.compareDocumentPosition(item4)).toBe(2),
        expect(item4.compareDocumentPosition(item6)).toBe(2),
        expect(item6.compareDocumentPosition(item8)).toBe(2),
        expect(item8.compareDocumentPosition(item10)).toBe(2),
        expect(item10.compareDocumentPosition(item11)).toBe(2),
        expect(item11.compareDocumentPosition(item12)).toBe(2);
    });
}),

describe("Menu Searching", () => {
    test("Search a works", () => {
        render(<BrowserRouter>
                <AppProvider>
                    <Menu />
                </AppProvider>
                </BrowserRouter>);
   
            //get searchbar
        const searchBar = screen.getByPlaceholderText("Search...");
            //get item we want to search for
        const item1 = screen.getByText('$1');//same box with the 'a' name
            //get item that shouldn't exist
        const item2 = screen.getByText('$2');//same box with the 'b' name
        const item3 = screen.getByText('$3');//same box with the 'c' name
        const item4 = screen.getByText('$4');//same box with the 'd' name
        const item5 = screen.getByText('$5');//same box with the 'e' name
        //change content in searchBar
        fireEvent.change(searchBar, { target: { value: "a" } });
        

        expect(item1).toBeInTheDocument(),
        expect(item2).not.toBeInTheDocument(),
        expect(item3).not.toBeInTheDocument(),
        expect(item4).not.toBeInTheDocument(),
        expect(item5).not.toBeInTheDocument();
    });
    test("Search blabla works", () => {
        render(<BrowserRouter>
                <AppProvider>
                    <Menu />
                </AppProvider>
                </BrowserRouter>);
   
            //get searchbar
        const searchBar = screen.getByPlaceholderText("Search...");
            //get item that shouldn't exist
        const item1 = screen.getByText('$1');//same box with the 'a' name
        const item2 = screen.getByText('$2');//same box with the 'b' name
        const item3 = screen.getByText('$3');//same box with the 'c' name
        const item4 = screen.getByText('$4');//same box with the 'd' name
        const item5 = screen.getByText('$5');//same box with the 'e' name
        //change content in searchBar
        fireEvent.change(searchBar, { target: { value: "blabla" } });
        

        expect(item1).not.toBeInTheDocument(),
        expect(item2).not.toBeInTheDocument(),
        expect(item3).not.toBeInTheDocument(),
        expect(item4).not.toBeInTheDocument(),
        expect(item5).not.toBeInTheDocument();
    });
    
});