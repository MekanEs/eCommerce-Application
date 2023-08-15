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
