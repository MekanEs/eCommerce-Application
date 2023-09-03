import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from '../form.module.scss';
import { FormAddress } from '../../../../interfaces/formInputs';

type CreateHouseInputAddress = {
  form: UseFormReturn<FormAddress[]>;
  value: string;
  index: number;
};

const CreateHouseInputAddress: React.FC<CreateHouseInputAddress> = ({
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
          id="house-number"
          placeholder="№"
          {...register(`${index}.houseNumber`, {
            required: 'The field is required',
          })}
          className={styles['input']}
        />
        {errors[index]?.houseNumber && (
          <div className={styles.errors}>
            {errors[index]?.houseNumber?.message}
          </div>
        )}
      </div>
      <span></span>
    </div>
  );
};

type CreateHouseRow = {
  form: UseFormReturn<FormAddress[]>;
  value: string;
  index: number;
};

export const CreateHouseRow: React.FC<CreateHouseRow> = ({
  form,
  value,
  index,
}): React.JSX.Element => {
  return (
    <>
      <tr>
        <td className={styles['table-title-name']}>House number</td>
        <td className={styles['table-input']}>
          <CreateHouseInputAddress form={form} value={value} index={index} />
        </td>
      </tr>
    </>
  );
};
