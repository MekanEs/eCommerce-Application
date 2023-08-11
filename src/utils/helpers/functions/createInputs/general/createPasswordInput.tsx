import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { DirtyFields, FormFields } from '../../../interface';
import { PasswordInput } from '../../../../../components/inputs';
import validatePassword from '../../validate/validatePassword';

const WARINING_REGEXP = /(?=.*[!\\"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~])/;

export default function createPasswordInput(
  errors: FieldErrors<FormFields>,
  dirtyFields: Partial<Readonly<DirtyFields>>,
  register: UseFormRegister<FormFields>,
  warningMessage: string,
  setWarningMessage: React.Dispatch<React.SetStateAction<string>>,
): JSX.Element {
  const errorMessage: string | undefined = errors && errors.password?.message;

  return (
    <PasswordInput
      label="Password"
      id="password"
      placeholder="Password"
      hookData={register('password', {
        required: 'The field is required',
        minLength: { value: 8, message: 'Min length 8 characters' },
        validate: {
          errors: validatePassword,
          warning: (value) => {
            if (value && !WARINING_REGEXP.test(value)) {
              setWarningMessage(
                'Weak password. Add special characters(e. g. $!*)',
              );
            } else {
              setWarningMessage('');
            }

            return true;
          },
        },
      })}
      errorMessage={errorMessage}
      warningMessage={!errorMessage && warningMessage}
      isValid={!errorMessage && dirtyFields?.password}
    />
  );
}
