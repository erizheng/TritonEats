import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../context/MenuContext';

// Mock the DiningHall data
jest.mock('../constants/homepageConstants', () => ({
    diningHalls: [
        { name: 'Hall A', busyness: 5, distance: 10, isOpen: true, id: 0 },
        { name: 'Hall B', busyness: 3, distance: 5, isOpen: true, id: 1 },
        { name: 'Hall C', busyness: 7, distance: 15, isOpen: true, id: 2 },
        { name: 'Hall D', busyness: 1, distance: 20, isOpen: false, id: 3 },
    ],
}));

describe('Search Functionality', () => {
    test('filters dining halls by name', () => {
        // render(<HomePage />);
        render(
            <BrowserRouter>
                <AppProvider>
                    <HomePage />
                </AppProvider>
            </BrowserRouter>
        );

        const searchInput = screen.getByPlaceholderText('Search...');
        
        // Search for "Hall A"
        fireEvent.change(searchInput, { target: { value: 'Hall A' } });

        // Ensure only Hall A is displayed and others are not
        const diningHalls = screen.getAllByTestId(/^dining-hall-/);
        expect(diningHalls).toHaveLength(1);
        expect(diningHalls[0].textContent).toContain('Hall A');
    });

    test('search returns no matches', () => {
        // render(<HomePage />);
        render(
            <BrowserRouter>
                <AppProvider>
                    <HomePage />
                </AppProvider>
            </BrowserRouter>
        );

        const searchInput = screen.getByPlaceholderText('Search...');
        
        // Search for a non-existing term "Nonexistent Hall"
        fireEvent.change(searchInput, { target: { value: 'Nonexistent Hall' } });

        // Ensure no dining halls are displayed
        const diningHalls = screen.queryAllByTestId(/^dining-hall-/);
        expect(diningHalls).toHaveLength(0);
    });

    test('search for partial name matches dining halls', () => {
        // render(<HomePage />);
        render(
            <BrowserRouter>
                <AppProvider>
                    <HomePage />
                </AppProvider>
            </BrowserRouter>
        );

        const searchInput = screen.getByPlaceholderText('Search...');
        
        // Search for partial name "Hall"
        fireEvent.change(searchInput, { target: { value: 'Hall' } });

        // Ensure all dining halls are displayed since all contain "Hall"
        const diningHalls = screen.getAllByTestId(/^dining-hall-/);
        expect(diningHalls).toHaveLength(4);
        expect(diningHalls[0].textContent).toContain('Hall A');
        expect(diningHalls[1].textContent).toContain('Hall B');
        expect(diningHalls[2].textContent).toContain('Hall C');
        expect(diningHalls[3].textContent).toContain('Hall D');
    });
});

describe('Sorting by Busyness', () => {
    test('sorts by busyness in descending order', () => {
        // render(<HomePage />);
        render(
            <BrowserRouter>
                <AppProvider>
                    <HomePage />
                </AppProvider>
            </BrowserRouter>
        );

        const sortByBusynessButton = screen.getByText('Busyness');
        
        // Initially, busyness is sorted in ascending order
        fireEvent.click(sortByBusynessButton);

        const diningHalls = screen.getAllByTestId(/^dining-hall-/);
        
        // Ensure that the dining halls are sorted by busyness in descending order
        expect(diningHalls[0].textContent).toContain('Hall C');
        expect(diningHalls[1].textContent).toContain('Hall A');
        expect(diningHalls[2].textContent).toContain('Hall B');
        expect(diningHalls[3].textContent).toContain('Hall D');
    });

    test('sorts by busyness in ascending order', () => {
        // render(<HomePage />);
        render(
            <BrowserRouter>
                <AppProvider>
                    <HomePage />
                </AppProvider>
            </BrowserRouter>
        );

        const sortByBusynessButton = screen.getByText('Busyness');
        
        // Initially, busyness is sorted in ascending order
        fireEvent.click(sortByBusynessButton);
        
        // Click again to reverse the order (descending)
        fireEvent.click(sortByBusynessButton);

        const diningHalls = screen.getAllByTestId(/^dining-hall-/);

        // Ensure that the dining halls are sorted by busyness in ascending order
        expect(diningHalls[0].textContent).toContain('Hall B');
        expect(diningHalls[1].textContent).toContain('Hall A');
        expect(diningHalls[2].textContent).toContain('Hall C');
        expect(diningHalls[3].textContent).toContain('Hall D');
    });

    test('closed dining halls are always at the end after sorting', () => {
        // render(<HomePage />);
        render(
            <BrowserRouter>
                <AppProvider>
                    <HomePage />
                </AppProvider>
            </BrowserRouter>
        );

        // Sort by distance and check that closed halls are always last
        const sortByBusynessButton = screen.getByText('Busyness');
        fireEvent.click(sortByBusynessButton);

        const diningHalls = screen.getAllByTestId(/^dining-hall-/);

        // Get the last dining hall in the sorted list
        const lastDiningHall = diningHalls[diningHalls.length - 1];
        expect(lastDiningHall.textContent).toContain('Hall D'); // Hall D is closed and should be at the end
    });
});

describe('Sorting by Distance', () => {
    test('sorts by distance in ascending order', () => {
        // render(<HomePage />);
        render(
            <BrowserRouter>
                <AppProvider>
                    <HomePage />
                </AppProvider>
            </BrowserRouter>
        );

        const sortByDistanceButton = screen.getByText('Distance');
        
        // Initially, distance is sorted in ascending order
        fireEvent.click(sortByDistanceButton);

        const diningHalls = screen.getAllByTestId(/^dining-hall-/);
        
        // Ensure that the dining halls are sorted by distance in ascending order
        expect(diningHalls[0].textContent).toContain('Hall B');
        expect(diningHalls[1].textContent).toContain('Hall A');
        expect(diningHalls[2].textContent).toContain('Hall C');
        expect(diningHalls[3].textContent).toContain('Hall D');
    });

    test('sorts by distance in descending order', () => {
        // render(<HomePage />);
        render(
            <BrowserRouter>
                <AppProvider>
                    <HomePage />
                </AppProvider>
            </BrowserRouter>
        );

        const sortByDistanceButton = screen.getByText('Distance');
        
        // Initially, distance is sorted in ascending order
        fireEvent.click(sortByDistanceButton);
        
        // Click again to reverse the order (descending)
        fireEvent.click(sortByDistanceButton);

        const diningHalls = screen.getAllByTestId(/^dining-hall-/);

        // Ensure that the dining halls are sorted by distance in descending order
        expect(diningHalls[0].textContent).toContain('Hall C');
        expect(diningHalls[1].textContent).toContain('Hall A');
        expect(diningHalls[2].textContent).toContain('Hall B');
        expect(diningHalls[3].textContent).toContain('Hall D');
    });

    test('closed dining halls are always at the end after sorting', () => {
        // render(<HomePage />);
        render(
            <BrowserRouter>
                <AppProvider>
                    <HomePage />
                </AppProvider>
            </BrowserRouter>
        );

        // Sort by distance and check that closed halls are always last
        const sortByDistanceButton = screen.getByText('Distance');
        fireEvent.click(sortByDistanceButton);

        const diningHalls = screen.getAllByTestId(/^dining-hall-/);

        // Get the last dining hall in the sorted list
        const lastDiningHall = diningHalls[diningHalls.length - 1];
        expect(lastDiningHall.textContent).toContain('Hall D'); // Hall D is closed and should be at the end
    });
});