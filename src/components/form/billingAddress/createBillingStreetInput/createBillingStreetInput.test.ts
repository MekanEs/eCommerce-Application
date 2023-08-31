import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createBillingStreetInput from './createBillingStreetInput';
import { FormFields } from '../../../../interfaces/formInputs';

test('renders billing street input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createBillingStreetInput(formMock));

  const billingStreetInput = screen.getByLabelText('Street');
  expect(billingStreetInput).toBeInTheDocument();
});

test('displays error message when billing street is required', () => {
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
        billingStreet: {
          type: 'manual',
          message: 'The field is required',
        },
      },
    },
  };

  render(createBillingStreetInput(formMock));

  const errorMessage = screen.getByText('The field is required');
  expect(errorMessage).toBeInTheDocument();
});

test('does not display error message when billing street is valid', () => {
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
        billingStreet: true,
      },
      errors: {
        ...result.current.formState.errors,
        billingStreet: undefined,
      },
    },
  };

  render(createBillingStreetInput(formMock));

  const errorMessage = screen.queryByText('The field is required');
  expect(errorMessage).toBeNull();
});
