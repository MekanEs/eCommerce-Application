import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import CreateUserAddress from './UserAddress';

test('renders CreateUserAddress component with messages', () => {
  render(
    <Provider store={store}>
      <CreateUserAddress />
    </Provider>,
  );

  const errorMessage = screen.queryByText('Error Message');
  expect(errorMessage).toBeNull();

  const successMessage = screen.queryByText('Success Message');
  expect(successMessage).toBeNull();
});

test('renders CreateUserAddress component with messages1', () => {
  render(
    <Provider store={store}>
      <CreateUserAddress />
    </Provider>,
  );

  const errorMessage = screen.queryByText('Error Message');
  expect(errorMessage).toBeNull();

  const successMessage = screen.queryByText('Success Message');
  expect(successMessage).toBeNull();
});
