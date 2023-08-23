import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createBillingPostcodeInput from '../createBillingPostcodeInput';
import { FormFields } from '../../../../../../interfaces/formInputs';

test('renders billing postcode input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createBillingPostcodeInput(formMock));

  const billingPostcodeInput = screen.getByLabelText('Postcode');
  expect(billingPostcodeInput).toBeInTheDocument();
});

test('displays error message when billing postcode is required', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
    formState: {
      ...result.current.formState,
      errors: {
        ...result.current.formState.errors,
        billingPostcode: {
          type: 'manual',
          message: 'The field is required',
        },
      },
    },
  };

  render(createBillingPostcodeInput(formMock));

  const errorMessage = screen.getByText('The field is required');
  expect(errorMessage).toBeInTheDocument();
});

test('does not display error message when billing postcode is valid', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
    formState: {
      ...result.current.formState,
      dirtyFields: {
        ...result.current.formState.dirtyFields,
        billingPostcode: true,
      },
      errors: {
        ...result.current.formState.errors,
        billingPostcode: undefined,
      },
    },
  };

  render(createBillingPostcodeInput(formMock));

  const errorMessage = screen.queryByText('The field is required');
  expect(errorMessage).toBeNull();
});
