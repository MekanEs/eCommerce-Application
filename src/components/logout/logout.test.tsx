import React from 'react';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Logout from './';

const mockStore = configureStore([]);

jest.mock('../../hooks/user-auth', () => ({
  userAuth: jest.fn(),
}));

describe('Logout Component', () => {
  test('renders Logout component when authenticated', () => {
    jest
      .spyOn(require('../../hooks/user-auth'), 'userAuth')
      .mockReturnValue(true);

    render(
      <Provider store={mockStore({})}>
        <Logout />
      </Provider>,
    );

    const logoutButton = screen.getByText('Logout');
    expect(logoutButton).toBeInTheDocument();
  });
});
