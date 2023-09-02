import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from '../form.module.scss';
import { FormAddress } from '../../../../interfaces/formInputs';

type CreateApartmentInputAddress = {
  form: UseFormReturn<FormAddress[]>;
  value: string;
  index: number;
};

const CreateApartmentInputAddress: React.FC<CreateApartmentInputAddress> = ({
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
          id="apartment"
          placeholder="№"
          {...register(`${index}.apartment`, {
            required: 'The field is required',
          })}
          className={styles['input']}
        />
        {errors[index]?.apartment && (
          <div className={styles.errors}>
            {errors[index]?.apartment?.message}
          </div>
        )}
      </div>
      <span></span>
    </div>
  );
};

type CreateApartmentRow = {
  form: UseFormReturn<FormAddress[]>;
  value: string;
  index: number;
};

export const CreateApartmentRow: React.FC<CreateApartmentRow> = ({
  form,
  value,
  index,
}): React.JSX.Element => {
  return (
    <>
      <tr>
        <td className={styles['table-title-name']}>Apartment</td>
        <td className={styles['table-input']}>
          {value ? (
            <CreateApartmentInputAddress
              form={form}
              value={value}
              index={index}
            />
          ) : (
            ''
          )}
        </td>
      </tr>
    </>
  );
};
