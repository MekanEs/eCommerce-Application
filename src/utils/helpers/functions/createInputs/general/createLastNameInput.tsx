import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { DirtyFields, FormFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

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
      placeholder=""
      hookData={register('lastName', {})}
      errorMessage={errors && errors.lastName && errors.lastName?.message}
      isValid={!errors.lastName && dirtyFields?.lastName}
    />
  );
}
