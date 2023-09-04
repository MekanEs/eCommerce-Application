import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store/store';
import CreateGeneralInfo from './GeneralInfo';

test('renders CreateGeneralInfo component with messages', () => {
  render(
    <Provider store={store}>
      <CreateGeneralInfo />
    </Provider>,
  );

  const errorMessage = screen.queryByText('Error Message');
  expect(errorMessage).toBeNull();

  const successMessage = screen.queryByText('Success Message');
  expect(successMessage).toBeNull();
});

test('renders CreateGeneralInfo component with form and buttons', () => {
  render(
    <Provider store={store}>
      <CreateGeneralInfo />
    </Provider>,
  );

  const infoTable = screen.getByText('Personal info');
  expect(infoTable).toBeInTheDocument();

  const saveChangesButton = screen.getByText('save changes');
  expect(saveChangesButton).toBeInTheDocument();
});
