import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './';

jest.mock('../../hooks/user-auth', () => ({
  userAuth: jest.fn(),
}));
describe('Layout Component', () => {
  test('renders Outlet', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
    );

    const outletElement = screen.getByRole('main');
    expect(outletElement).toBeInTheDocument();
  });
});
