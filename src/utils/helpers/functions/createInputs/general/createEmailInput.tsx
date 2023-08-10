import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TextInput } from '../../../../../components/inputs';
import { DirtyFields, FormFields } from '../../../interface';
import validateEmail from '../../validate/validateEmail';

export default function createEmailInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <TextInput
      label="Email"
      type="text"
      id="email"
      placeholder="user@example.com"
      hookData={register('email', {
        required: 'The field is required',
        validate: validateEmail,
      })}
      errorMessage={errors && errors.email && errors.email?.message}
      isValid={!errors.email && dirtyFields?.email}
    />
  );
}
