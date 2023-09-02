import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from '../form.module.scss';
import { FormAddress } from '../../../../interfaces/formInputs';
import validateStreet from '../../../../utils/helpers/validate/validateStreet/validateStreet';

type CreateStreetInputAddress = {
  form: UseFormReturn<FormAddress[]>;
  value: string;
  index: number;
};

const CreateStreetInputAddress: React.FC<CreateStreetInputAddress> = ({
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
          id="street"
          placeholder="Street"
          {...register(`${index}.street`, {
            required: 'The field is required',
            validate: validateStreet,
          })}
          className={styles['input']}
        />
        {errors[index]?.street && (
          <div className={styles.errors}>{errors[index]?.street?.message}</div>
        )}
      </div>
      <span></span>
    </div>
  );
};

type CreateStreetRow = {
  form: UseFormReturn<FormAddress[]>;
  value: string;
  index: number;
};

export const CreateStreetRow: React.FC<CreateStreetRow> = ({
  form,
  value,
  index,
}): React.JSX.Element => {
  return (
    <>
      <tr>
        <td className={styles['table-title-name']}>Street</td>
        <td className={styles['table-input']}>
          {value ? (
            <CreateStreetInputAddress form={form} value={value} index={index} />
          ) : (
            ''
          )}
        </td>
      </tr>
    </>
  );
};
