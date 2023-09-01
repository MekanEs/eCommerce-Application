import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from './form.module.scss';
import { FormFields } from '../../../interfaces/formInputs';
import validateEmail from '../../../utils/helpers/validate/validateEmail/validateEmail';

type CreateEmailInputProfile = {
  form: UseFormReturn<FormFields>;
  value: string;
};

export const CreateEmailInputProfile: React.FC<CreateEmailInputProfile> = ({
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
          id="email"
          {...register('email', {
            required: 'The field is required',
            validate: validateEmail,
          })}
          className={styles['input']}
        />
        {errors.email && (
          <div className={styles.errors}>{errors.email?.message}</div>
        )}
      </div>
      <span></span>
    </div>
  );
};
