import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CreateDateInputProfile } from '../form/userInfoForm/createDateInput';
import { CreateEmailInputProfile } from '../form/userInfoForm/createEmailInput';
import { CreateTextInputProfile } from '../form/userInfoForm/createTextInput';
import { FormFields } from '../../../interfaces/formInputs';
import { ISliceUser } from '../../../interfaces/sliceUser';
import styles from './createTable.module.scss';

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
