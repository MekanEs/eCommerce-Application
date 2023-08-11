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
      label="First Name"
      type="text"
      id="first-name"
      placeholder="First Name"
      hookData={register('firstName', {
        required: 'The field is required',
        validate: validateName,
      })}
      errorMessage={errors && errors.firstName && errors.firstName?.message}
      isValid={!errors.firstName && dirtyFields?.firstName}
    />
  );
}
