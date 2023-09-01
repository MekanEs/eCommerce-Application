import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CreateDateInputProfile } from '../form/createDateInput';
import { CreateEmailInputProfile } from '../form/createEmailInput';
import { CreateTextInputProfile } from '../form/createTextInput';
import { CreatePasswordInputProfile } from '../form/createPasswordInput';
import { FormFields } from '../../../interfaces/formInputs';
import { ISliceUser } from '../../../interfaces/sliceUser';
import styles from './createTable.module.scss';
import { BaseAddress } from '@commercetools/platform-sdk';
import { CreateTextInputAddress } from '../form/userAddressForm/createTextInput';

type CreateTableInfo = {
  state: ISliceUser;
  form: UseFormReturn<FormFields>;
};

export const CreateTableInfo: React.FC<CreateTableInfo> = ({
  state,
  form,
}): React.JSX.Element => {
  return (
    <table className={styles['table-container']}>
      <tbody>
        <tr>
          <td className={styles['table-title-name']}>Personal info</td>
          <td className={styles['table-input']}></td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>First name</td>
          <td className={styles['table-input']}>
            {state.firstName ? (
              <CreateTextInputProfile
                form={form}
                value={state.firstName}
                id={'firstName'}
              />
            ) : (
              ''
            )}
          </td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Last name</td>
          <td className={styles['table-input']}>
            {state.lastName ? (
              <CreateTextInputProfile
                form={form}
                value={state.lastName}
                id={'lastName'}
              />
            ) : (
              ''
            )}
          </td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Date of Birth</td>
          <td className={styles['table-input']}>
            {state.dateBirth ? (
              <CreateDateInputProfile form={form} value={state.dateBirth} />
            ) : (
              ''
            )}
          </td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Email</td>
          <td className={styles['table-input']}>
            {state.email ? (
              <CreateEmailInputProfile form={form} value={state.email} />
            ) : (
              ''
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

type CreateTablePassword = {
  form: UseFormReturn<FormFields>;
};

export const CreateTablePassword: React.FC<CreateTablePassword> = ({
  form,
}): React.JSX.Element => {
  return (
    <table className={styles['table-container']}>
      <tbody>
        <tr>
          <td className={styles['table-title-name']}>Password</td>
          <td className={styles['table-input']}></td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Current password</td>
          <td className={styles['table-input']}>
            <CreatePasswordInputProfile form={form} id={'password'} />
          </td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>New password</td>
          <td className={styles['table-input']}>
            <CreatePasswordInputProfile form={form} id={'newPassword'} />
          </td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Confirm new password</td>
          <td className={styles['table-input']}>
            <CreatePasswordInputProfile form={form} id={'currentPassword'} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

type CreateRowAddress = {
  value: string;
  form: UseFormReturn<BaseAddress[]>;
  index: number;
  title: string;
};

const CreateRowAddress: React.FC<CreateRowAddress> = ({
  value,
  form,
  index,
  title,
}): React.JSX.Element => {
  return (
    <tr>
      <td className={styles['table-title-name']}>{title}</td>
      <td className={styles['table-input']}>
        {value ? (
          <CreateTextInputAddress
            form={form}
            value={value}
            id={title}
            index={index}
          />
        ) : (
          ''
        )}
      </td>
    </tr>
  );
};

type CreateTableAddress = {
  address: BaseAddress;
  form: UseFormReturn<BaseAddress[]>;
  index: number;
  title: string;
};

export const CreateTableAddress: React.FC<CreateTableAddress> = ({
  address,
  form,
  index,
  title,
}): React.JSX.Element => {
  return (
    <table className={styles['table-container']}>
      <tbody>
        <tr>
          <td className={styles['table-title-name']}>
            Address {title} {index}
          </td>
          <td className={styles['table-input']}></td>
        </tr>
        <CreateRowAddress
          form={form}
          value={address.country}
          index={index}
          title={'Country'}
        />
        <CreateRowAddress
          form={form}
          value={address.city ? address.city : ''}
          index={index}
          title={'City'}
        />
        <CreateRowAddress
          form={form}
          value={address.streetName ? address.streetName : ''}
          index={index}
          title={'Street'}
        />
        <CreateRowAddress
          form={form}
          value={address.country}
          index={index}
          title={'House number'}
        />
      </tbody>
    </table>
  );
};
