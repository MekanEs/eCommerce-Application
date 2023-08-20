import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createBillingCityInput from '../createBillingCityInput';
import { FormFields } from '../../../../../../interfaces/formInputs';

test('renders billing city input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createBillingCityInput(formMock));

  const billingCityInput = screen.getByLabelText('City');
  expect(billingCityInput).toBeInTheDocument();
});

test('displays error message when billing city is required', () => {
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
        billingCity: {
          type: 'manual',
          message: 'The field is required',
        },
      },
    },
  };

  render(createBillingCityInput(formMock));

  const errorMessage = screen.getByText('The field is required');
  expect(errorMessage).toBeInTheDocument();
});

test('does not display error message when billing city is valid', () => {
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
        billingCity: true,
      },
      errors: {
        ...result.current.formState.errors,
        billingCity: undefined,
      },
    },
  };

  render(createBillingCityInput(formMock));

  const errorMessage = screen.queryByText('The field is required');
  expect(errorMessage).toBeNull();
});
