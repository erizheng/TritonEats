import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { PreferencesPage } from './pages/PreferencesPage';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/MenuContext';

test("allergens exists", () => {
    // render(<Menu />);
    render(
        <BrowserRouter>
            <AppProvider>
                <PreferencesPage />
            </AppProvider>
        </BrowserRouter>
    );

    const Allergens = screen.getAllByTestId("Allergens");
    expect(Allergens).toBeInTheDocument();
});