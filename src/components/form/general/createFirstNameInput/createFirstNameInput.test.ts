import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createFirstNameInput from './createFirstNameInput';
import { FormFields } from '../../../../interfaces/formInputs';

test('renders first name input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createFirstNameInput(formMock));

  const firstNameInput = screen.getByLabelText('First Name');
  expect(firstNameInput).toBeInTheDocument();
});
