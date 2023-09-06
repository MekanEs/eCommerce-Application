import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from '../form.module.scss';
import { FormAddress } from '../../../../interfaces/formInputs';
import validateDefault from '../../../../utils/helpers/validate/validateDefault/validateDefault';

type CreateCityInputAddress = {
  form: UseFormReturn<FormAddress[]>;
  value: string;
  index: number;
};

const CreateCityInputAddress: React.FC<CreateCityInputAddress> = ({
  form,
  value,
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
          id="city"
          placeholder="City"
          {...register(`${index}.city`, {
            required: 'The field is required',
            validate: validateDefault,
          })}
          className={styles['input']}
        />
        {errors[index]?.city && (
          <div className={styles.errors}>{errors[index]?.city?.message}</div>
        )}
      </div>
      <span></span>
    </div>
  );
};

type CreateCityRow = {
  form: UseFormReturn<FormAddress[]>;
  value: string;
  index: number;
};

export const CreateCityRow: React.FC<CreateCityRow> = ({
  form,
  value,
  index,
}): React.JSX.Element => {
  return (
    <>
      <tr>
        <td className={styles['table-title-name']}>City</td>
        <td className={styles['table-input']}>
          <CreateCityInputAddress form={form} value={value} index={index} />
        </td>
      </tr>
    </>
  );
};
