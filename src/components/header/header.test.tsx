import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from './';

const mockStore = configureStore([]);

jest.mock('../../hooks/user-auth', () => ({
  userAuth: jest.fn(),
}));

describe('Header Component', () => {
  test('renders logo', () => {
    render(
      <Provider store={mockStore({})}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );
    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });
  test('renders registration and login links', () => {
    render(
      <Provider store={mockStore({})}>
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>
      </Provider>,
    );
    const registrationLink = screen.getByText('registration');
    const loginLink = screen.getByText('log in');
    expect(registrationLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });
});
