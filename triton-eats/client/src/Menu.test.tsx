import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Menu } from './pages/Menu';

describe("Menu CSS", () => {
    test("Search Bar exists", () => {
        render(<Menu />);
   
        const searchBar = screen.getByPlaceholderText("Search...");
        expect(searchBar).toBeInTheDocument();
    });

    test("navBar exists", () => {
        render(<Menu />);
   
        const navBar = screen.getByText("Name");
        expect(navBar).toBeInTheDocument();
    });

    test("Sorting Buttons exists", () => {
        render(<Menu />);
   
        const sortButtons = screen.getByText("Rate");
        expect(sortButtons).toBeInTheDocument();
    });

    test("Filter Box exists", () => {
        render(<Menu />);
   
        const filterBox = screen.getByText("Location");
        expect(filterBox).toBeInTheDocument();
    });
});