import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createPasswordInput from '../createPasswordInput';
import { FormFields } from '../../../../../../interfaces/formInputs';

test('renders password input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  const setWarningMessage = jest.fn();

  render(createPasswordInput(formMock, '', setWarningMessage));

  const passwordInput = screen.getByLabelText('Password');
  expect(passwordInput).toBeInTheDocument();
});
