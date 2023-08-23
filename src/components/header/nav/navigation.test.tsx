import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './';
import '@testing-library/jest-dom/extend-expect';

describe('Navigation Component', () => {
  test('renders navigation items', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navigation />
      </MemoryRouter>,
    );

    const mainLink = screen.getByRole('link', { name: 'Main' });
    const catalogLink = screen.getByRole('link', { name: 'Catalog' });
    const aboutLink = screen.getByRole('link', { name: 'About' });

    expect(mainLink).toBeInTheDocument();
    expect(catalogLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});
