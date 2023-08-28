import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../../interfaces/formInputs';
import { TextInput } from '../../../inputs';
import validateEmail from '../../../../utils/helpers/validate/validateEmail/validateEmail';

export default function createEmailInput(
  form: UseFormReturn<FormFields>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;

  return (
    <TextInput
      label=""
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
