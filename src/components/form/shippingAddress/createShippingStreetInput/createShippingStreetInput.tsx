import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../../interfaces/formInputs';
import { TextInput } from '../../../inputs';
import validateStreet from '../../../../utils/helpers/validate/validateStreet/validateStreet';

export default function createShippingStreetInput(
  form: UseFormReturn<FormFields>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
    getValues,
  } = form;

  const errorMessage =
    errors && errors.shippingStreet && errors.shippingStreet?.message;
  const isValid =
    getValues('sameAddress') ||
    (!errorMessage && getValues('shippingStreet') === '');

  return (
    <TextInput
      label="Street"
      type="text"
      id="shipping-street"
      placeholder="Street"
      hookData={register('shippingStreet', {
        required: 'The field is required',
        validate: validateStreet,
      })}
      errorMessage={errorMessage}
      isValid={
        isValid
          ? undefined
          : !errors.shippingStreet && dirtyFields?.shippingStreet
      }
    />
  );
}
