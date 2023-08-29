import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createShippingStreetInput from './createShippingStreetInput';
import { FormFields } from '../../../../interfaces/formInputs';

test('renders shipping street input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createShippingStreetInput(formMock));

  const shippingStreetInput = screen.getByLabelText('Street');
  expect(shippingStreetInput).toBeInTheDocument();
});

test('displays error message when shipping street is required', () => {
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
        shippingStreet: {
          type: 'manual',
          message: 'The field is required',
        },
      },
    },
  };

  render(createShippingStreetInput(formMock));

  const errorMessage = screen.getByText('The field is required');
  expect(errorMessage).toBeInTheDocument();
});

test('does not display error message when shipping street is valid', () => {
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
        shippingStreet: true,
      },
      errors: {
        ...result.current.formState.errors,
        shippingStreet: undefined,
      },
    },
  };

  render(createShippingStreetInput(formMock));

  const errorMessage = screen.queryByText('The field is required');
  expect(errorMessage).toBeNull();
});
