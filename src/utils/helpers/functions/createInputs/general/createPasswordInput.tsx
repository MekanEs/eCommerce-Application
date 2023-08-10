import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { DirtyFields, FormFields } from '../../../interface';
import { PasswordInput } from '../../../../../components/inputs';
import validatePassword from '../../validate/validatePassword';

export default function createPasswordInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <PasswordInput
      label="Password"
      id="password"
      placeholder="Enter your password"
      hookData={register('password', {
        required: 'The field is required',
        minLength: { value: 8, message: 'Min length 8 characters' },
        validate: validatePassword,
      })}
      errorMessage={errors && errors.password && errors.password?.message}
      isValid={!errors.password && dirtyFields?.password}
    />
  );
}
