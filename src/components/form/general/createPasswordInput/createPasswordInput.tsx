import { UseFormReturn } from 'react-hook-form';
import React from 'react';
import { FormFields } from '../../../../interfaces/formInputs';
import { PasswordInput } from '../../../inputs';
import validatePassword from '../../../../utils/helpers/validate/validatePassword/validatePassword';

const WARINING_REGEXP = /(?=.*[!\\"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~])/;

export default function createPasswordInput(
  form: UseFormReturn<FormFields>,
  warningMessage: string,
  setWarningMessage: React.Dispatch<React.SetStateAction<string>>,
): JSX.Element {
  const {
    register,
    formState: { errors, dirtyFields },
  } = form;
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
      isValid={!errors.password && !errorMessage && dirtyFields?.password}
    />
  );
}
