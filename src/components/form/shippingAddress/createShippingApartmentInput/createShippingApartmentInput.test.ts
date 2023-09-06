import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createShippingApartmentInput from './createShippingApartmentInput';
import { FormFields } from '../../../../interfaces/formInputs';

test('renders shipping apartment input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createShippingApartmentInput(formMock, 'test-class'));

  const shippingApartmentInput = screen.getByLabelText('Apartment');
  expect(shippingApartmentInput).toBeInTheDocument();
});

test('displays error message when shipping apartment is invalid', () => {
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
        shippingApartment: {
          type: 'manual',
          message: 'Invalid shipping apartment',
        },
      },
    },
  };

  render(createShippingApartmentInput(formMock, 'test-class'));

  const errorMessage = screen.getByText('Invalid shipping apartment');
  expect(errorMessage).toBeInTheDocument();
});

test('does not display error message when shipping apartment is valid', () => {
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
        shippingApartment: true,
      },
      errors: {
        ...result.current.formState.errors,
        shippingApartment: undefined,
      },
    },
  };

  render(createShippingApartmentInput(formMock, 'test-class'));

  const errorMessage = screen.queryByText('Invalid shipping apartment');
  expect(errorMessage).toBeNull();
});
