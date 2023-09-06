import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createBillingHouseNumberInput from './createBillingHouseNumberInput';
import { FormFields } from '../../../../interfaces/formInputs';

test('renders billing house number input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createBillingHouseNumberInput(formMock, ''));

  const billingHouseNumberInput = screen.getByLabelText('House');
  expect(billingHouseNumberInput).toBeInTheDocument();
});

test('clears error message for valid house number', () => {
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
        billingHouseNumber: {
          type: 'manual',
          message: 'Invalid house number',
        },
      },
    },
  };

  render(createBillingHouseNumberInput(formMock, ''));

  const errorMessage = screen.getByText('Invalid house number');
  expect(errorMessage).toBeInTheDocument();
});

test('does not display error message when house number is valid', () => {
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
        billingHouseNumber: true,
      },
      errors: {
        ...result.current.formState.errors,
        billingHouseNumber: undefined,
      },
    },
  };

  render(createBillingHouseNumberInput(formMock, ''));

  const errorMessage = screen.queryByText('Invalid house number');
  expect(errorMessage).toBeNull();
});
