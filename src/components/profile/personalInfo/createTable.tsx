import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CreateDateInputProfile } from '../form/userInfoForm/createDateInput';
import { CreateEmailInputProfile } from '../form/userInfoForm/createEmailInput';
import { CreateTextInputProfile } from '../form/userInfoForm/createTextInput';
import { CreatePasswordInputProfile } from '../form/userInfoForm/createPasswordInput';
import { FormFields } from '../../../interfaces/formInputs';
import { ISliceUser } from '../../../interfaces/sliceUser';
import styles from './createTable.module.scss';
import { BaseAddress } from '@commercetools/platform-sdk';
import { FormAddress } from '../../../interfaces/formInputs';
import { CreateContryRow } from '../form/userAddressForm/createСountry';
import { CreateCityRow } from '../form/userAddressForm/createCity';
import { CreateApartmentRow } from '../form/userAddressForm/createApartment';
import { CreateHouseRow } from '../form/userAddressForm/createHouse';
import { CreateStreetRow } from '../form/userAddressForm/createStreet';
import { CreatePostcodeRow } from '../form/userAddressForm/createPostcode';
import Checkbox from '../../checkbox';

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

type CreateTableAddress = {
  address: BaseAddress;
  form: UseFormReturn<FormAddress[]>;
  index: number;
  title: string;
  setisShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CreateTableAddress: React.FC<CreateTableAddress> = ({
  address,
  form,
  index,
  title,
  setisShow,
}): React.JSX.Element => {
  return (
    <table className={styles['table-container']}>
      <tbody>
        <tr>
          <td className={styles['table-title-name']}>Address №{index + 1}</td>
          <td className={styles['table-header']}>
            <div className={styles['table-default-address']}>{title}</div>
            <div
              className={styles['table-remove-address']}
              onClick={(): void => {
                setisShow(false);
                form.resetField(`${index}`);
              }}
            >
              remove address
            </div>
          </td>
        </tr>
        <CreateContryRow form={form} value={address.country} index={index} />
        <CreateCityRow
          form={form}
          value={address.city ? address.city : ''}
          index={index}
        />
        <CreateStreetRow
          form={form}
          value={address.streetName ? address.streetName : ''}
          index={index}
        />
        <CreateHouseRow
          form={form}
          value={address.building ? address.building : ''}
          index={index}
        />
        <CreateApartmentRow
          form={form}
          value={address.apartment ? address.apartment : ''}
          index={index}
        />
        <CreatePostcodeRow
          form={form}
          value={address.postalCode ? address.postalCode : ''}
          index={index}
        />
        <tr>
          <td className={styles['table-title-name']}></td>
          <td className={styles['table-checkbox']}>
            <Checkbox
              id={'set-default-billing'}
              label={'Use as default billing address'}
              hookData={form.register(`${index}.defaultBilling`, {})}
            />
            <Checkbox
              id={'set-default-billing'}
              label={'Use as default shipping address'}
              hookData={form.register(`${index}.defaultShiping`, {})}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
