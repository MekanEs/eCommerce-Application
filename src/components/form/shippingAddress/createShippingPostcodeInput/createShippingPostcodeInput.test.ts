import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createShippingPostcodeInput from './createShippingPostcodeInput';
import { FormFields } from '../../../../interfaces/formInputs';

test('renders shipping postcode input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createShippingPostcodeInput(formMock));

  const shippingPostcodeInput = screen.getByLabelText('Postcode');
  expect(shippingPostcodeInput).toBeInTheDocument();
});

test('displays error message when shipping postcode is required', () => {
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
        shippingPostcode: {
          type: 'manual',
          message: 'The field is required',
        },
      },
    },
  };

  render(createShippingPostcodeInput(formMock));

  const errorMessage = screen.getByText('The field is required');
  expect(errorMessage).toBeInTheDocument();
});

test('does not display error message when shipping postcode is valid', () => {
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
        shippingPostcode: true,
      },
      errors: {
        ...result.current.formState.errors,
        shippingPostcode: undefined,
      },
    },
  };

  render(createShippingPostcodeInput(formMock));

  const errorMessage = screen.queryByText('The field is required');
  expect(errorMessage).toBeNull();
});
