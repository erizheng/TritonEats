import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import { AppProvider } from '../context/MenuContext';

describe('render tests', () => {
  test('renders navbar with logo and navigation links', () => {
    render(<AppProvider><App /></AppProvider>);
    expect(screen.getByRole('link', { name: /Triton Eats Logo/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Homepage' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Menu' })).toBeInTheDocument();
    // expect(screen.getByRole('link', { name: 'Reviews' })).toBeInTheDocument();
  });
});

describe('accessibility tests', () => {
  test('navbar links are accessible', () => {
    render(<AppProvider><App /></AppProvider>);
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(4); // 5 with reviews
  });
});

describe('navigation tests', () => {
  test('navigate to homepage', () => {
    render(<AppProvider><App /></AppProvider>);

    const menuLink = screen.getByRole('link', { name: 'Homepage' });
    fireEvent.click(menuLink);

    expect(window.location.pathname).toBe('/');
  });

  test('navigate to menu', () => {
    render(<AppProvider><App /></AppProvider>);

    const menuLink = screen.getByRole('link', { name: 'Menu' });
    fireEvent.click(menuLink);

    expect(window.location.pathname).toBe('/menu');
  });

  // test('navigate to reviews', () => {
  //   render(<App />);

  //   const menuLink = screen.getByRole('link', { name: 'Reviews' });
  //   fireEvent.click(menuLink);

  //   expect(window.location.pathname).toBe('/review');
  // });

  test('logo to homepage', () => {
    render(<AppProvider><App /></AppProvider>);

    const menuLink = screen.getByRole('link', { name: /Triton Eats Logo/i });
    fireEvent.click(menuLink);

    expect(window.location.pathname).toBe('/');
  });
});

describe('active link tests', () => {
  test('check homepage', () => {
    render(<AppProvider><App /></AppProvider>);

    const menuLink = screen.getByRole('link', { name: 'Homepage' });
    fireEvent.click(menuLink);

    expect(screen.getByRole('link', { name: 'Homepage' })).toHaveClass('selected');
  });

  test('check menu', () => {
    render(<AppProvider><App /></AppProvider>);

    const menuLink = screen.getByRole('link', { name: 'Menu' });
    fireEvent.click(menuLink);

    expect(screen.getByRole('link', { name: 'Menu' })).toHaveClass('selected');
  });

  // test('check reviews', () => {
  //   render(<App />);

  //   const menuLink = screen.getByRole('link', { name: 'Reviews' });
  //   fireEvent.click(menuLink);

  //   expect(screen.getByRole('link', { name: 'Reviews' })).toHaveClass('selected');
  // });
});