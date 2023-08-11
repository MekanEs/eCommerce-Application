import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { DirtyFields, FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';
import validateName from '../../validate/validateDefault';

export default function createFirstNameInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
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
