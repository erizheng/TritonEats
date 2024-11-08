import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('navBar navigations', () => {
  test('navigate to homepage', () => {
    render(<App />);

    const menuLink = screen.getByRole('link', { name: 'Homepage' });
    fireEvent.click(menuLink);

    expect(window.location.pathname).toBe('/');
  });

  test('navigate to menu', () => {
    render(<App />);

    const menuLink = screen.getByRole('link', { name: 'Menu' });
    fireEvent.click(menuLink);

    expect(window.location.pathname).toBe('/menu');
  });

  test('navigate to reviews', () => {
    render(<App />);

    const menuLink = screen.getByRole('link', { name: 'Reviews' });
    fireEvent.click(menuLink);

    expect(window.location.pathname).toBe('/review');
  });
});
