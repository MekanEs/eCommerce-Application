import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import styles from './createTable.module.scss';
import { BaseAddress } from '@commercetools/platform-sdk';
import { FormAddress } from '../../../interfaces/formInputs';
import { CreateContryRow } from '../form/userAddressForm/createСountry';
import { CreateCityRow } from '../form/userAddressForm/createCity';
import { CreateApartmentRow } from '../form/userAddressForm/createApartment';
import { CreateHouseRow } from '../form/userAddressForm/createHouse';
import { CreateStreetRow } from '../form/userAddressForm/createStreet';
import { CreatePostcodeRow } from '../form/userAddressForm/createPostcode';

type CreateTitle = {
  index: number;
  selectBilling: number;
  selectShipping: number;
};

const CreateTitle: React.FC<CreateTitle> = ({
  index,
  selectBilling,
  selectShipping,
}): React.JSX.Element => {
  return (
    <div className={styles['table-header-title']}>
      {index === selectBilling ? (
        <div key={'defaultBilling'} className={styles['table-default-address']}>
          {'Default billing address'}
        </div>
      ) : (
        <></>
      )}
      {index === selectShipping ? (
        <div
          key={'defaultShipping'}
          className={styles['table-default-address']}
        >
          {'Default shipping address'}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

type CreateCheckbox = {
  select: number;
  setSelect: React.Dispatch<React.SetStateAction<number>>;
  title: string;
  id: string;
  index: number;
  form: UseFormReturn<FormAddress[]>;
};

const CreateCheckbox: React.FC<CreateCheckbox> = ({
  select,
  setSelect,
  title,
  id,
  index,
  form,
}): React.JSX.Element => {
  return (
    <>
      <div className={styles['checkbox-container']}>
        <input
          id={`${id}-${index}`}
          type="checkbox"
          checked={select === index}
          onClick={(): void => {
            index === select ? setSelect(-1) : setSelect(index);
          }}
          {...form.register(`${index}.defaultBilling`, {})}
        />
        <label className={styles['checkbox-label']} htmlFor={`${id}-${index}`}>
          {title}
        </label>
      </div>
    </>
  );
};

type CreateTableAddress = {
  address: BaseAddress;
  form: UseFormReturn<FormAddress[]>;
  index: number;
  setisShow: React.Dispatch<React.SetStateAction<boolean>>;
  selectBilling: number;
  selectShipping: number;
  setSelectBilling: React.Dispatch<React.SetStateAction<number>>;
  setSelectShipping: React.Dispatch<React.SetStateAction<number>>;
};

export const CreateTableAddress: React.FC<CreateTableAddress> = ({
  address,
  form,
  index,
  setisShow,
  selectBilling,
  selectShipping,
  setSelectBilling,
  setSelectShipping,
}): React.JSX.Element => {
  return (
    <table className={styles['table-container']}>
      <tbody>
        <tr>
          <td className={styles['table-title-name']}>Address №{index + 1}</td>
          <td className={styles['table-header']}>
            <CreateTitle
              index={index}
              selectBilling={selectBilling}
              selectShipping={selectShipping}
            />
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
            <CreateCheckbox
              form={form}
              index={index}
              select={selectBilling}
              setSelect={setSelectBilling}
              title={'Use as default Billing'}
              id={'billing'}
            />
            <CreateCheckbox
              form={form}
              index={index}
              select={selectShipping}
              setSelect={setSelectShipping}
              title={'Use as default Shipping'}
              id={'shipping'}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
