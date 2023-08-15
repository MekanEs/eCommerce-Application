import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';
import validateName from '../../validate/validateDefault';

export default function createFirstNameInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;

  return (
    <TextInput
      label="Last Name"
      type="text"
      id="last-name"
      placeholder="Last Name"
      hookData={register('lastName', {
        required: 'The field is required',
        validate: validateName,
      })}
      errorMessage={errors && errors.lastName && errors.lastName?.message}
      isValid={!errors.lastName && dirtyFields?.lastName}
    />
  );
}
