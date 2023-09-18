import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as ReduxHooks from '../../hooks/redux-hooks';
import Cart from './';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore([]);

// eslint-disable-next-line max-lines-per-function
describe('Cart Component', () => {
  beforeEach(() => {
    jest.spyOn(ReduxHooks, 'useAppDispatch').mockReturnValue(jest.fn());
    jest.spyOn(ReduxHooks, 'useAppSelector').mockReturnValue({});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('renders "Shopping cart" heading', () => {
    render(
      <Provider store={mockStore()}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>,
    );

    const headingElement = screen.getByText('Shopping cart');

    expect(headingElement).toBeInTheDocument();
  });
});
