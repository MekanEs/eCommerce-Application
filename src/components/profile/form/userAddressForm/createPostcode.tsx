import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from '../form.module.scss';
import { FormAddress } from '../../../../interfaces/formInputs';
import validatePostcode from '../../../../utils/helpers/validate/validatePostcode/validatePostcode';

type CreatePostcodeInputAddress = {
  form: UseFormReturn<FormAddress[]>;
  value: string;
  index: number;
};

const CreatePostcodeInputAddress: React.FC<CreatePostcodeInputAddress> = ({
  form,
  value,
  index,
}): React.JSX.Element => {
  const {
    register,
    getValues,
    formState: { errors },
  } = form;

  return (
    <div className={styles.fieldProfile}>
      <div>
        <input
          defaultValue={value}
          type="text"
          id="postcode"
          placeholder="№"
          {...register(`${index}.postalCode`, {
            required: 'The field is required',
            validate: (values) =>
              validatePostcode(values, getValues(`${index}.country`)),
          })}
          className={styles['input']}
        />
        {errors[index]?.postalCode && (
          <div className={styles.errors}>
            {errors[index]?.postalCode?.message}
          </div>
        )}
      </div>
      <span></span>
    </div>
  );
};

type CreatePostcodeRow = {
  form: UseFormReturn<FormAddress[]>;
  value: string;
  index: number;
};

export const CreatePostcodeRow: React.FC<CreatePostcodeRow> = ({
  form,
  value,
  index,
}): React.JSX.Element => {
  return (
    <>
      <tr>
        <td className={styles['table-title-name']}>Postcode</td>
        <td className={styles['table-input']}>
          <CreatePostcodeInputAddress form={form} value={value} index={index} />
        </td>
      </tr>
    </>
  );
};
