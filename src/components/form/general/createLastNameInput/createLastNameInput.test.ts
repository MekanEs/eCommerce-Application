import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createLastNameInput from './createLastNameInput';
import { FormFields } from '../../../../interfaces/formInputs';

test('renders last name input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createLastNameInput(formMock));

  const lastNameInput = screen.getByLabelText('Last Name');
  expect(lastNameInput).toBeInTheDocument();
});
