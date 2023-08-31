import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from './form.module.scss';
import { FormFields } from '../../../interfaces/formInputs';
import validateName from '../../../utils/helpers/validate/validateDefault/validateDefault';

export function createFirstNameInputProfile(
  form: UseFormReturn<FormFields>,
  value: string,
): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className={styles.fieldProfile}>
      <div>
        <input
          defaultValue={value}
          type="text"
          id="firstName"
          {...register('firstName', {
            required: 'The field is required',
            validate: validateName,
          })}
          className={styles['input']}
        />
        {errors.firstName && (
          <div className={styles.errors}>{errors.firstName?.message}</div>
        )}
      </div>
      <span></span>
    </div>
  );
}
