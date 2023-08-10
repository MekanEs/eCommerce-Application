import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormFields, DirtyFields } from '../../../interface';
import { TextInput } from '../../../../../components/inputs';

export default function createDateOfBirthInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
): JSX.Element {
  return (
    <TextInput
      label="Date of Birth"
      type="date"
      id="date-of-birth"
      placeholder="YYYY-MM-DD"
      hookData={register('dateOfBirth', {
        pattern: {
          value: /^\d{4}-\d{2}-\d{2}$/,
          message: 'Enter a valid date in the format YYYY-MM-DD',
        },
      })}
      aria-invalid="true"
      errorMessage={errors && errors.dateOfBirth && errors.dateOfBirth?.message}
      isValid={!errors.dateOfBirth && dirtyFields?.dateOfBirth}
    />
  );
}
