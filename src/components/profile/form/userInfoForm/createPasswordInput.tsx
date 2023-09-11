import React, { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from '../form.module.scss';
import { FormFields } from '../../../../interfaces/formInputs';
import validatePassword from '../../../../utils/helpers/validate/validatePassword/validatePassword';
import eyeHide from '../../../../assets/img/svg/eye-hide.svg';
import eyeShow from '../../../../assets/img/svg/eye-show.svg';

const WARINING_REGEXP = /(?=.*[!\\"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~])/;

type CreatePasswordInputProfile = {
  form: UseFormReturn<FormFields>;
  id: 'password' | 'newPassword' | 'currentPassword';
};

export const CreatePasswordInputProfile: React.FC<
  CreatePasswordInputProfile
> = ({ form, id }): React.JSX.Element => {
  const {
    register,
    formState: { errors },
  } = form;

  const [warningMessage, setWarningMessage] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={styles.fieldProfile}>
      <div className={styles['input-container']}>
        <div>
          <input
            type={showPassword ? 'text' : 'password'}
            id={id}
            {...register(id, {
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
            className={styles['input']}
          />
          {errors[id] && (
            <div className={styles.errors}>{errors[id]?.message}</div>
          )}
          {warningMessage && id !== 'password' && (
            <div className={styles.warning}>
              {!errors[id] && warningMessage}
            </div>
          )}
        </div>
        <div
          className={styles['password-toggle-icon']}
          onClick={(): void => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <img src={eyeHide} alt="Hide Password" />
          ) : (
            <img src={eyeShow} alt="Show Password" />
          )}
        </div>
      </div>
      <span></span>
    </div>
  );
};
