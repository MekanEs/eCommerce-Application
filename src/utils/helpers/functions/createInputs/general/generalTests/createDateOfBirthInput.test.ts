import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createDateOfBirthInput from '../createDateOfBirthInput';
import { FormFields } from '../../../../../../interfaces/formInputs';

test('renders date of birth input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createDateOfBirthInput(formMock));

  const dateOfBirthInput = screen.getByLabelText('Date of Birth');
  expect(dateOfBirthInput).toBeInTheDocument();
});
