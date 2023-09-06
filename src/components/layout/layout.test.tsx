import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

jest.mock('../../hooks/user-auth', () => ({
  userAuth: jest.fn(),
}));
describe('Layout Component', () => {
  test('renders Outlet', () => {
    render(
      <Provider store={mockStore({})}>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </Provider>,
    );

    const outletElement = screen.getByRole('main');
    expect(outletElement).toBeInTheDocument();
  });
});
