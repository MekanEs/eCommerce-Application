import { UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../../../interfaces/formInputs';
import { TextInput } from '../../../inputs';
import validateName from '../../../../utils/helpers/validate/validateDefault/validateDefault';

export default function createFirstNameInput(
  form: UseFormReturn<FormFields>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;

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
