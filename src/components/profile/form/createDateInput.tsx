import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from './form.module.scss';
import { FormFields } from '../../../interfaces/formInputs';
import validateDate from '../../../utils/helpers/validate/validateDate/validateDate';

type CreateDateInputProfile = {
  form: UseFormReturn<FormFields>;
  value: string;
};

export const CreateDateInputProfile: React.FC<CreateDateInputProfile> = ({
  form,
  value,
}): React.JSX.Element => {
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
          id="dateOfBirth"
          {...register('dateOfBirth', {
            pattern: {
              value: /^\d{4}-\d{2}-\d{2}$/,
              message: 'Enter a valid date in the format YYYY-MM-DD',
            },
            required: 'The field is required',
            validate: validateDate,
          })}
          aria-invalid="true"
          className={styles['input']}
        />
        {errors.dateOfBirth && (
          <div className={styles.errors}>{errors.dateOfBirth?.message}</div>
        )}
      </div>
      <span></span>
    </div>
  );
};
