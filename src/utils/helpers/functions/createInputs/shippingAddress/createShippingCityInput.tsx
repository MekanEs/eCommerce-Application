import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';
import validateDefault from '../../validate/validateDefault';

export default function createShippingCityInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
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
      errorMessage={
        errors && errors.shippingCity && errors.shippingCity?.message
      }
      isValid={!errors.shippingCity && dirtyFields?.shippingCity}
    />
  );
}
