import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PreferencesPage } from '../pages/PreferencesPage';
import { useCookies } from 'react-cookie';

// Mock react-cookie
jest.mock('react-cookie', () => ({
  useCookies: jest.fn(),
}));

describe('Preferences Component', () => {
  const mockSetCookie = jest.fn();
  const mockUseCookies = useCookies as jest.Mock;

  beforeEach(() => {
    mockUseCookies.mockReturnValue([{}, mockSetCookie]);
    render(<PreferencesPage />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component with all sections', () => {
    // Check if all sections and their headings are rendered
    expect(screen.getByText('Allergens:')).toBeInTheDocument();
    expect(screen.getByText('Dietary Restrictions:')).toBeInTheDocument();
    expect(screen.getByText('Time:')).toBeInTheDocument();
    expect(screen.getByText('Distance:')).toBeInTheDocument();
  });

  it('should toggle selection of preferences when clicked', () => {
    // Test initial state (none selected)
    const firstPreferenceCheckbox = screen.getAllByRole('checkbox')[0];
    expect(firstPreferenceCheckbox).not.toBeChecked();

    // Click on the checkbox to select it
    fireEvent.click(firstPreferenceCheckbox);
    expect(firstPreferenceCheckbox).toBeChecked();

    // Click again to unselect it
    fireEvent.click(firstPreferenceCheckbox);
    expect(firstPreferenceCheckbox).not.toBeChecked();
  });

  it('should handle the submit action and set the cookie', async () => {
    // Find the first checkbox in the allergens section and select it
    const firstPreferenceCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(firstPreferenceCheckbox);

    // Find the submit button and click it
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    // Check if the setCookie function was called
    await waitFor(() => {
      expect(mockSetCookie).toHaveBeenCalledWith(
        'preferences',
        ['Dairy'], // Assuming Dairy is the first preference and was selected
        { path: '/' }
      );
    });
  });

  it('should alert when no preferences are selected on submit', () => {
    // Mock the global alert function
    global.alert = jest.fn();

    // Click submit without selecting any preferences
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    // Expect an alert to appear
    expect(global.alert).toHaveBeenCalledWith('No preferences selected.');
  });

  it('should display selected preferences in the alert on submit', () => {
    // Mock the global alert function
    global.alert = jest.fn();

    // Select a few preferences
    const firstPreferenceCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(firstPreferenceCheckbox);
    
    const secondPreferenceCheckbox = screen.getAllByRole('checkbox')[5]; // Selecting another preference (e.g., Shellfish)
    fireEvent.click(secondPreferenceCheckbox);

    // Click submit
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    // Expect the alert to show the selected preferences
    expect(global.alert).toHaveBeenCalledWith('Selected Preferences: Dairy, Shellfish');
  });

  it('should display selected dietary preferences in the alert', () => {
    // Select a dietary preference
    const dietaryCheckbox = screen.getAllByRole('checkbox')[10]; // Selecting 'Vegetarian'
    fireEvent.click(dietaryCheckbox);

    // Click submit
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    // Expect the alert to show the selected dietary preference
    expect(global.alert).toHaveBeenCalledWith('Selected Preferences: Vegetarian');
  });
});


