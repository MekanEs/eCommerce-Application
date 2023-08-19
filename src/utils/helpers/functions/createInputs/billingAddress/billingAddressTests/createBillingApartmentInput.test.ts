import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createBillingApartmentInput from '../createBillingApartmentInput';
import { FormFields } from '../../../../../../interfaces/formInputs';

test('renders billing apartment input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createBillingApartmentInput(formMock, ''));

  const billingApartmentInput = screen.getByLabelText('Apartment');
  expect(billingApartmentInput).toBeInTheDocument();
});

test('displays error message when billing apartment is invalid', () => {
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
        billingApartment: {
          type: 'manual',
          message: 'Invalid billing apartment',
        },
      },
    },
  };

  render(createBillingApartmentInput(formMock, ''));

  const errorMessage = screen.getByText('Invalid billing apartment');
  expect(errorMessage).toBeInTheDocument();
});

test('does not display error message when billing apartment is valid', () => {
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
        billingApartment: true,
      },
      errors: {
        ...result.current.formState.errors,
        billingApartment: undefined,
      },
    },
  };

  render(createBillingApartmentInput(formMock, ''));

  const errorMessage = screen.queryByText('Invalid billing apartment');
  expect(errorMessage).toBeNull();
});
