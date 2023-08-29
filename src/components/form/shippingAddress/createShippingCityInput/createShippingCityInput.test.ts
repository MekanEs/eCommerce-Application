import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createShippingCityInput from './createShippingCityInput';
import { FormFields } from '../../../../interfaces/formInputs';

test('renders shipping city input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createShippingCityInput(formMock));

  const shippingCityInput = screen.getByLabelText('City');
  expect(shippingCityInput).toBeInTheDocument();
});

test('displays error message when shipping city is required', () => {
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
        shippingCity: {
          type: 'manual',
          message: 'The field is required',
        },
      },
    },
  };

  render(createShippingCityInput(formMock));

  const errorMessage = screen.getByText('The field is required');
  expect(errorMessage).toBeInTheDocument();
});

test('does not display error message when shipping city is valid', () => {
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
        shippingCity: true,
      },
      errors: {
        ...result.current.formState.errors,
        shippingCity: undefined,
      },
    },
  };

  render(createShippingCityInput(formMock));

  const errorMessage = screen.queryByText('The field is required');
  expect(errorMessage).toBeNull();
});
