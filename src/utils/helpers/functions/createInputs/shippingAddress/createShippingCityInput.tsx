import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';
import validateDefault from '../../validate/validateDefault';

export default function createShippingCityInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
  } = form;
  const errorMessage =
    errors && errors.shippingCity && errors.shippingCity?.message;
  const isValid =
    getValues('sameAddress') ||
    (!errorMessage && getValues('shippingCity') === '');

  return (
    <TextInput
      label="City"
      type="text"
      id="shipping-city"
      placeholder="City"
      hookData={register('shippingCity', {
        required: 'The field is required',
        validate: validateDefault,
      })}
      errorMessage={errorMessage}
      isValid={
        isValid ? undefined : !errors.shippingCity && dirtyFields?.shippingCity
      }
    />
  );
}
