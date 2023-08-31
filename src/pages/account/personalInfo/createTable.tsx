import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { createDateInputProfile } from '../../../components/profile/form/createDateInput';
import { createEmailInputProfile } from '../../../components/profile/form/createEmailInput';
import { createFirstNameInputProfile } from '../../../components/profile/form/createFirstName';
import { createLastNameInputProfile } from '../../../components/profile/form/createLastNameInput';
import { createPasswordInputProfile } from '../../../components/profile/form/createPasswordInput';
import { FormFields } from '../../../interfaces/formInputs';
import { ISliceUser } from '../../../interfaces/sliceUser';
import styles from '../account.module.scss';

export function createTableInfo(
  state: ISliceUser,
  form: UseFormReturn<FormFields>,
): React.JSX.Element {
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
            {state.firstName
              ? createFirstNameInputProfile(form, state.firstName)
              : ''}
          </td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Last name</td>
          <td className={styles['table-input']}>
            {state.lastName
              ? createLastNameInputProfile(form, state.lastName)
              : ''}
          </td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Date of Birth</td>
          <td className={styles['table-input']}>
            {state.dateBirth
              ? createDateInputProfile(form, state.dateBirth)
              : ''}
          </td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Email</td>
          <td className={styles['table-input']}>
            {state.email ? createEmailInputProfile(form, state.email) : ''}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export function createTablePassword(
  form: UseFormReturn<FormFields>,
): React.JSX.Element {
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
            {createPasswordInputProfile(form, 'password')}
          </td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>New password</td>
          <td className={styles['table-input']}>
            {createPasswordInputProfile(form, 'newPassword')}
          </td>
        </tr>
        <tr>
          <td className={styles['table-title-name']}>Confirm new password</td>
          <td className={styles['table-input']}>
            {createPasswordInputProfile(form, 'currentPassword')}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
