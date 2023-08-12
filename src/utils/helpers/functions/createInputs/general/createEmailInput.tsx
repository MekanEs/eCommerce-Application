import { UseFormReturn } from 'react-hook-form';
import { TextInput } from '../../../../../components/inputs';
import { FormFields } from '../../../interface';
import validateEmail from '../../validate/validateEmail';

export default function createEmailInput(
  form: UseFormReturn<FormFields, unknown, undefined>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;

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
