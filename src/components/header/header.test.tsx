import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import * as ReduxHooks from '../../hooks/redux-hooks';
import Header from './';

const mockStore = configureStore([]);

jest.mock('../../store/basket/basketSlice', () => ({
  getBasketUser: jest.fn(),
  getBasket: jest.fn(),
}));

// eslint-disable-next-line max-lines-per-function
describe('Header Component', () => {
  let store: MockStoreEnhanced<unknown, unknown>;
  beforeEach(() => {
    store = mockStore({
      basket: {
        basket: {
          lineItems: [1, 2],
        },
      },
    });
    jest.spyOn(ReduxHooks, 'useAppDispatch').mockReturnValue(jest.fn());
    jest.spyOn(ReduxHooks, 'useAppSelector').mockReturnValue({});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders logo', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>
      </Provider>,
    );

    const logoElement = screen.getByAltText('logo');

    expect(logoElement).toBeInTheDocument();
  });

  test('render cart, registration, and login links when not authenticated', () => {
    jest.mock('../../hooks/user-auth', () => ({
      userAuth: jest.fn().mockReturnValue(false),
    }));
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Header />
        </MemoryRouter>
      </Provider>,
    );

    const cartLinkElement = screen.getByAltText('cart');
    const registrationLinkElement = screen.getByText('registration');
    const loginLinkElement = screen.getByText('log in');

    expect(cartLinkElement).toBeInTheDocument();
    expect(registrationLinkElement).toBeInTheDocument();
    expect(loginLinkElement).toBeInTheDocument();
  });
});
