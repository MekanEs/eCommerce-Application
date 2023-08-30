import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from './form.module.scss';
import { FormFields } from '../../../interfaces/formInputs';
import validateName from '../../../utils/helpers/validate/validateDefault/validateDefault';

export function createLastNameInputProfile(
  form: UseFormReturn<FormFields>,
  value: string,
): React.JSX.Element {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className={styles.fieldProfile}>
      <input
        defaultValue={value}
        type="text"
        id="lastName"
        {...register('lastName', {
          required: 'The field is required',
          validate: validateName,
        })}
        className={styles['input']}
      />
      {errors.lastName && (
        <div className={styles.errors}>{errors.lastName?.message}</div>
      )}
    </div>
  );
}
