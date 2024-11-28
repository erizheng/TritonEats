import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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


import '@testing-library/jest-dom/extend-expect';

// Mock PreferenceGrid to focus on the Preferences component logic
// jest.mock('./PreferenceGrid', () => ({ preferences, onSelectionChange }) => (
//   <div className="preferences-grid">
//     {preferences.map((pref) => (
//       <div key={pref.id}>
//         <button
//           className="preference"
//           onClick={() => onSelectionChange(pref.id)}
//           data-testid={`preference-${pref.id}`}
//         >
//           <img
//             src={`/${pref.name}.png`}
//             alt={pref.name}
//             className="image"
//             style={{ display: 'block', paddingLeft: '40px', paddingBottom: '20px', alignItems: 'center', width: '100px', height: pref.name.includes('min') ? '140px' : '100px' }}
//           />
//           {pref.name}
//         </button>
//       </div>
//     ))}
//   </div>
// ));

describe('Preferences Component', () => {
  
  // Test if the component renders and shows the preferences correctly
  test('renders allergens section with preferences', () => {
    render(<PreferencesPage />);
    
    // Ensure that preferences are rendered correctly
    expect(screen.getByText('Allergens:')).toBeInTheDocument();
    expect(screen.getByText('Dairy')).toBeInTheDocument();
    expect(screen.getByText('Tree Nuts')).toBeInTheDocument();
    expect(screen.getByText('Soy')).toBeInTheDocument();
    expect(screen.getByText('Fish')).toBeInTheDocument();
  });

  // Test clicking to toggle the selection state of a preference
  test('toggles preference selection when clicked', () => {
    render(<PreferencesPage />);

    const dairyButton = screen.getByTestId('preference-1'); // Dairy has id 1
    expect(dairyButton).toBeInTheDocument();
    expect(dairyButton).not.toHaveTextContent('(Selected)'); // Initially unselected

    // Simulate a click to select the "Dairy" preference
    fireEvent.click(dairyButton);
    expect(dairyButton).toHaveTextContent('(Selected)');

    // Simulate another click to deselect the "Dairy" preference
    fireEvent.click(dairyButton);
    expect(dairyButton).not.toHaveTextContent('(Selected)');
  });

  // Test the state updates correctly when a preference is toggled
  test('updates state correctly when preferences are selected and deselected', () => {
    render(<PreferencesPage />);

    const dairyButton = screen.getByTestId('preference-1');
    const nutsButton = screen.getByTestId('preference-2');

    // Select Dairy preference
    fireEvent.click(dairyButton);
    expect(dairyButton).toHaveTextContent('(Selected)');

    // Select Tree Nuts preference
    fireEvent.click(nutsButton);
    expect(nutsButton).toHaveTextContent('(Selected)');

    // Deselect Dairy preference
    fireEvent.click(dairyButton);
    expect(dairyButton).not.toHaveTextContent('(Selected)');
    expect(nutsButton).toHaveTextContent('(Selected)');
  });

  // Test if the "Time" and "Distance" sections render correctly
  test('renders time and distance sections correctly', () => {
    render(<PreferencesPage />);

    expect(screen.getByText('Time:')).toBeInTheDocument();
    expect(screen.getByText('0 - 5 min')).toBeInTheDocument();
    expect(screen.getByText('5 - 10 min')).toBeInTheDocument();
    expect(screen.getByText('20 - 30 min')).toBeInTheDocument();

    expect(screen.getByText('Distance:')).toBeInTheDocument();
    expect(screen.getByText('0 - 0.5 miles')).toBeInTheDocument();
    expect(screen.getByText('1.5+ miles')).toBeInTheDocument();
  });

  // Test if the submit button is rendered correctly
  test('submit button is rendered correctly', () => {
    render(<PreferencesPage />);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  // Test the toggle behavior in the dietary restrictions section
  test('selection state is toggled in dietary restrictions section', () => {
    render(<PreferencesPage />);

    const vegButton = screen.getByTestId('preference-11');
    expect(vegButton).toBeInTheDocument();
    expect(vegButton).not.toHaveTextContent('(Selected)');

    // Simulate user clicking on the Vegetarian button
    fireEvent.click(vegButton);
    expect(vegButton).toHaveTextContent('(Selected)');

    // Deselect the Vegetarian button
    fireEvent.click(vegButton);
    expect(vegButton).not.toHaveTextContent('(Selected)');
  });
});

