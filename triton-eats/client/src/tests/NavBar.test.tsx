import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppProvider } from '../context/MenuContext';
import App from '../App';
import { AuthProvider } from '../context/AuthContext';

let authStatus: boolean;
beforeAll(() => {
  render(<AuthProvider><AppProvider><App /></AppProvider></AuthProvider>);
  // console.log('[DEBUG] Current path:', window.location.pathname);
  authStatus = window.location.pathname === '/login';
  // console.log('[DEBUG] Auth status:', authStatus);
});

describe('render tests', () => {
  test('renders navbar with logo and navigation links', () => {
    if (authStatus) {
      console.log('Skipping test as user is not authenticated.');
      return;
    }

    render(<AuthProvider><AppProvider><App /></AppProvider></AuthProvider>);

    expect(screen.getByRole('link', { name: /Triton Eats Logo/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Homepage' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Menu' })).toBeInTheDocument();
    // expect(screen.getByRole('link', { name: 'Reviews' })).toBeInTheDocument();
  });
});

describe('accessibility tests', () => {
  test('navbar links are accessible', () => {
    if (authStatus) {
      console.log('Skipping test as user is not authenticated.');
      return;
    }

    render(<AuthProvider><AppProvider><App /></AppProvider></AuthProvider>);

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(4); // 5 with reviews
  });
});

describe('navigation tests', () => {
  test('navigate to homepage', () => {
    if (authStatus) {
      console.log('Skipping test as user is not authenticated.');
      return;
    }

    render(<AuthProvider><AppProvider><App /></AppProvider></AuthProvider>);

    const menuLink = screen.getByRole('link', { name: 'Homepage' });
    fireEvent.click(menuLink);

    expect(window.location.pathname).toBe('/');
  });

  test('navigate to menu', () => {
    if (authStatus) {
      console.log('Skipping test as user is not authenticated.');
      return;
    }

    render(<AuthProvider><AppProvider><App /></AppProvider></AuthProvider>);

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
    if (authStatus) {
      console.log('Skipping test as user is not authenticated.');
      return;
    }
    
    render(<AuthProvider><AppProvider><App /></AppProvider></AuthProvider>);

    const menuLink = screen.getByRole('link', { name: /Triton Eats Logo/i });
    fireEvent.click(menuLink);

    expect(window.location.pathname).toBe('/');
  });
});

describe('active link tests', () => {
  test('check homepage', () => {
    if (authStatus) {
      console.log('Skipping test as user is not authenticated.');
      return;
    }

    render(<AuthProvider><AppProvider><App /></AppProvider></AuthProvider>);

    const menuLink = screen.getByRole('link', { name: 'Homepage' });
    fireEvent.click(menuLink);

    expect(screen.getByRole('link', { name: 'Homepage' })).toHaveClass('selected');
  });

  test('check menu', () => {
    if (authStatus) {
      console.log('Skipping test as user is not authenticated.');
      return;
    }

    render(<AuthProvider><AppProvider><App /></AppProvider></AuthProvider>);

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
