import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from './';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import * as ReduxHooks from '../../hooks/redux-hooks';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

jest.mock('../../hooks/user-auth', () => ({
  userAuth: jest.fn(),
  useAppSelector: jest.fn(),
  dispatch: jest.fn(),
}));

jest.mock('../../store/basket/basketSlice', () => ({
  getBasketUser: jest.fn(),
  getBasket: jest.fn(),
}));

describe('Layout Component', () => {
  let store: MockStoreEnhanced<unknown, unknown>;
  beforeEach(() => {
    store = mockStore({
      user: { userAuth: true },
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
  test('renders Outlet', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Layout />
        </MemoryRouter>
      </Provider>,
    );

    const outletElement = screen.getByRole('main');
    expect(outletElement).toBeInTheDocument();
  });
});
