import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CreatePasswordInputProfile } from '../form/userInfoForm/createPasswordInput';
import { FormFields } from '../../../interfaces/formInputs';
import styles from './createTable.module.scss';

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
