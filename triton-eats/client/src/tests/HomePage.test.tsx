import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../context/MenuContext';

// Mock data that simulates the response from the API
const mockDiningHallsData = [
    { id: 1, name: 'Hall A', distance: 1, busyness: 2, isOpen: true, hourSummary: 'Closed until 7:00am' },
    { id: 2, name: 'Hall B', distance: 2, busyness: 3, isOpen: true, hourSummary: 'Closed until 7:00am' },
    { id: 3, name: 'Hall C', distance: 3, busyness: 1, isOpen: true, hourSummary: 'Closed until 7:00am' },
    { id: 4, name: 'Hall D', distance: 4, busyness: 4, isOpen: false, hourSummary: 'Closed until 7:00am' },
];

beforeEach( async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue({ data: mockDiningHallsData }),
    } as unknown as Response);

    render(
        <BrowserRouter>
            <AppProvider>
                <HomePage />
            </AppProvider>
        </BrowserRouter>
    );
    await waitFor(() => {
        expect(screen.getByTestId('dining-hall-1')).toBeInTheDocument();
    });
});
afterEach(() => {
    jest.restoreAllMocks();
});


describe('Search Functionality', () => {
    test('filters dining halls by name', () => {
        const searchInput = screen.getByPlaceholderText('Search...');
        fireEvent.change(searchInput, { target: { value: 'Hall A' } });

        const diningHalls = screen.getAllByTestId(/dining-hall-/);
        expect(diningHalls).toHaveLength(1);
        expect(diningHalls[0].textContent).toContain('Hall A');
    });

    test('search returns no matches', () => {
        const searchInput = screen.getByPlaceholderText('Search...');
        fireEvent.change(searchInput, { target: { value: 'Nonexistent Hall' } });

        const diningHalls = screen.queryAllByTestId(/dining-hall-/);
        expect(diningHalls).toHaveLength(0);
    });

    test('search for partial name matches dining halls', () => {
        const searchInput = screen.getByPlaceholderText('Search...');
        fireEvent.change(searchInput, { target: { value: 'Hall' } });

        const diningHalls = screen.getAllByTestId(/dining-hall-/);
        expect(diningHalls).toHaveLength(4);

    });
});

describe('Sorting by Busyness', () => {
    test('sorts by busyness in ascending order', () => {
        const sortByBusynessButton = screen.getByText('Busyness');
        fireEvent.click(sortByBusynessButton);

        const diningHalls = screen.getAllByTestId(/^dining-hall-/);
        expect(diningHalls[0].textContent).toContain('Hall C');
        expect(diningHalls[1].textContent).toContain('Hall A');
        expect(diningHalls[2].textContent).toContain('Hall B');
        expect(diningHalls[3].textContent).toContain('Hall D');
    });

    test('sorts by busyness in descending order', () => {
        const sortByBusynessButton = screen.getByText('Busyness');
        fireEvent.click(sortByBusynessButton);
        fireEvent.click(sortByBusynessButton);

        const diningHalls = screen.getAllByTestId(/^dining-hall-/);
        expect(diningHalls[0].textContent).toContain('Hall B');
        expect(diningHalls[1].textContent).toContain('Hall A');
        expect(diningHalls[2].textContent).toContain('Hall C');
        expect(diningHalls[3].textContent).toContain('Hall D');
    });

    test('closed dining halls are always at the end after sorting', () => { 
        const sortByBusynessButton = screen.getByText('Busyness');
        fireEvent.click(sortByBusynessButton);

        const diningHalls = screen.getAllByTestId(/^dining-hall-/);
        const lastDiningHall = diningHalls[diningHalls.length - 1];
        expect(lastDiningHall.textContent).toContain('Hall D');
    });
});

describe('Sorting by Distance', () => {
    test('sorts by distance in ascending order', () => { 
        const sortByDistanceButton = screen.getByText('Distance');
        fireEvent.click(sortByDistanceButton);

        const diningHalls = screen.getAllByTestId(/^dining-hall-/);
        expect(diningHalls[0].textContent).toContain('Hall A');
        expect(diningHalls[1].textContent).toContain('Hall B');
        expect(diningHalls[2].textContent).toContain('Hall C');
        expect(diningHalls[3].textContent).toContain('Hall D');
    });

    test('sorts by distance in descending order', () => {
        const sortByDistanceButton = screen.getByText('Distance');
        fireEvent.click(sortByDistanceButton);
        fireEvent.click(sortByDistanceButton);

        const diningHalls = screen.getAllByTestId(/^dining-hall-/);
        expect(diningHalls[0].textContent).toContain('Hall C');
        expect(diningHalls[1].textContent).toContain('Hall B');
        expect(diningHalls[2].textContent).toContain('Hall A');
        expect(diningHalls[3].textContent).toContain('Hall D');
    });

    test('closed dining halls are always at the end after sorting', () => {
        const sortByDistanceButton = screen.getByText('Distance');
        fireEvent.click(sortByDistanceButton);

        const diningHalls = screen.getAllByTestId(/^dining-hall-/);
        const lastDiningHall = diningHalls[diningHalls.length - 1];
        expect(lastDiningHall.textContent).toContain('Hall D');
    });
});