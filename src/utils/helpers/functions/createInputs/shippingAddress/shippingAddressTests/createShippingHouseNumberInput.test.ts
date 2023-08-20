import { render, renderHook, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import createShippingHouseNumberInput from '../createShippingHouseNumberInput';
import { FormFields } from '../../../../../../interfaces/formInputs';

test('renders shipping house number input without errors', () => {
  const { result } = renderHook(() =>
    useForm<FormFields>({
      mode: 'onChange',
    }),
  );

  const formMock: UseFormReturn<FormFields> = {
    ...result.current,
  };

  render(createShippingHouseNumberInput(formMock, 'test-class'));

  const shippingHouseNumberInput = screen.getByLabelText('House');
  expect(shippingHouseNumberInput).toBeInTheDocument();
});

test('displays error message when shipping house number is required', () => {
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
        shippingHouseNumber: {
          type: 'manual',
          message: 'The field is required',
        },
      },
    },
  };

  render(createShippingHouseNumberInput(formMock, 'test-class'));

  const errorMessage = screen.getByText('The field is required');
  expect(errorMessage).toBeInTheDocument();
});

test('does not display error message when shipping house number is valid', () => {
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
        shippingHouseNumber: true,
      },
      errors: {
        ...result.current.formState.errors,
        shippingHouseNumber: undefined,
      },
    },
  };

  render(createShippingHouseNumberInput(formMock, 'test-class'));

  const errorMessage = screen.queryByText('The field is required');
  expect(errorMessage).toBeNull();
});
