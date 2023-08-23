import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createEmailInput from '../createEmailInput';
import { FormFields } from '../../../../../../interfaces/formInputs';

test('renders email input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createEmailInput(formMock));

  const emailInput = screen.getByLabelText('Email');
  expect(emailInput).toBeInTheDocument();
});
