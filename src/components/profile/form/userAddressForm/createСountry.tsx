import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from '../form.module.scss';
import { FormAddress } from '../../../../interfaces/formInputs';
import countries from '../../../../utils/countries.json';
import classNames from 'classnames';

type CreateCountryInputAddress = {
  form: UseFormReturn<FormAddress[]>;
  values: string;
  index: number;
};

const CreateCountryInputAddress: React.FC<CreateCountryInputAddress> = ({
  form,
  values,
  index,
}): React.JSX.Element => {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className={styles.fieldProfile}>
      <div>
        <select
          defaultValue={values}
          id="contry"
          className={classNames(styles['input'], styles['select'])}
          {...register(`${index}.country`, {
            required: 'The field is required',
          })}
        >
          <option value="" disabled>
            Country
          </option>
          {countries?.map(({ value: value, label: label }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))}
        </select>
        {errors[index]?.country && (
          <div className={styles.errors}>{errors[index]?.country?.message}</div>
        )}
      </div>
      <span></span>
    </div>
  );
};

type CreateContryRow = {
  form: UseFormReturn<FormAddress[]>;
  value: string;
  index: number;
};

export const CreateContryRow: React.FC<CreateContryRow> = ({
  form,
  value,
  index,
}): React.JSX.Element => {
  return (
    <>
      <tr>
        <td className={styles['table-title-name']}>Counry</td>
        <td className={styles['table-input']}>
          {value ? (
            <CreateCountryInputAddress
              form={form}
              values={value}
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
