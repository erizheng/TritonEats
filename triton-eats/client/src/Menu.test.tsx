import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Menu } from './pages/Menu';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/MenuContext';

describe("Menu CSS", () => {
    test("Search Bar exists", () => {
        // render(<Menu />);
        render(
            <BrowserRouter>
                <AppProvider>
                    <Menu />
                </AppProvider>
            </BrowserRouter>
        );
   
        const searchBar = screen.getByPlaceholderText("Search...");
        expect(searchBar).toBeInTheDocument();
    });

    test("navBar exists", () => {
        // render(<Menu />);
        render(
            <BrowserRouter>
                <AppProvider>
                    <Menu />
                </AppProvider>
            </BrowserRouter>
        );
   
        const navBar = screen.getByText("Name");
        expect(navBar).toBeInTheDocument();
    });

    test("Sorting Buttons exists", () => {
        // render(<Menu />);
        render(
            <BrowserRouter>
                <AppProvider>
                    <Menu />
                </AppProvider>
            </BrowserRouter>
        );
   
        const sortButtons = screen.getByText("Rate");
        expect(sortButtons).toBeInTheDocument();
    });

    test("Filter Box exists", () => {
        // render(<Menu />);
        render(
            <BrowserRouter>
                <AppProvider>
                    <Menu />
                </AppProvider>
            </BrowserRouter>
        );
   
        const filterBox = screen.getByText("Location");
        expect(filterBox).toBeInTheDocument();
    });
});