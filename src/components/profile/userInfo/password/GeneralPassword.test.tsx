import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CreateGeneralPassword from './GeneralPassword';

const mockStore = configureStore();

test('renders the "save new password" button in the form', () => {
  const store = mockStore({ user: { status: 'ok' } });
  render(
    <Provider store={store}>
      <CreateGeneralPassword />
    </Provider>,
  );
  const saveNewPasswordButton = screen.getByText('save new password');
  expect(saveNewPasswordButton).toBeInTheDocument();
});
