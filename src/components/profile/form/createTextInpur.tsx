import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from './form.module.scss';
import { FormFields } from '../../../interfaces/formInputs';
import validateName from '../../../utils/helpers/validate/validateDefault/validateDefault';

type CreateTextInputProfile = {
  form: UseFormReturn<FormFields>;
  value: string;
  id: 'firstName' | 'lastName';
};

export const CreateTextInputProfile: React.FC<CreateTextInputProfile> = ({
  form,
  value,
  id,
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
          id={id}
          {...register(id, {
            required: 'The field is required',
            validate: validateName,
          })}
          className={styles['input']}
        />
        {errors[id] && (
          <div className={styles.errors}>{errors[id]?.message}</div>
        )}
      </div>
      <span></span>
    </div>
  );
};
