import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from '../form.module.scss';
import { BaseAddress } from '@commercetools/platform-sdk';
import validateDefault from '../../../../utils/helpers/validate/validateDefault/validateDefault';

type CreateTextInputAddress = {
  form: UseFormReturn<BaseAddress[]>;
  value: string;
  id: string;
  index: number;
};

export const CreateTextInputAddress: React.FC<CreateTextInputAddress> = ({
  form,
  value,
  id,
  index,
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
          {...register(`${index}.country`, {
            required: 'The field is required',
            validate: validateDefault,
          })}
          className={styles['input']}
        />
        {errors[index]?.country && (
          <div className={styles.errors}>{errors[index]?.country?.message}</div>
        )}
      </div>
      <span></span>
    </div>
  );
};
