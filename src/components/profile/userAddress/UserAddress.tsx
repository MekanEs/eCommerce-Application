import React, { useState } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { CreateButton } from '../../form/createButton/createButton';
import { CreateTableAddress } from '../personalInfo/createTable';
import styles from '../userInfo/userInfo.module.scss';
import { FormAddress } from '../../../interfaces/formInputs';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { ISliceUser } from '../../../interfaces/sliceUser';
import {
  addAddress,
  getUpdateAddress,
  getUpdateDefaultAddress,
} from '../../../store/user/user.slice';
import { Address } from '@commercetools/platform-sdk';
import { getDefaultAddress } from '../../../utils/helpers/profile/gefaultAddress';
import { store } from '../../../store/store';
import CreateMessage from '../message/getMessage';

const CreateUserAddress: React.FC = (): React.JSX.Element => {
  const form: UseFormReturn<FormAddress[]> = useForm<FormAddress[]>({
    mode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const user: ISliceUser = useAppSelector((state) => state.user);
  const [selectBilling, setSelectBilling] = useState<number>(
    getDefaultAddress(user, user.defaultBillingAddressId),
  );
  const [selectShipping, setSelectShipping] = useState<number>(
    getDefaultAddress(user, user.defaultShippingAddressId),
  );
  const onSubmit: SubmitHandler<FormAddress[]> = (
    data: FormAddress[],
  ): void => {
    setSuccessMessage('');
    setErrorMessage('');
    dispatch(getUpdateAddress(data))
      .then(() => {
        dispatch(getUpdateDefaultAddress([selectBilling, selectShipping]));
      })
      .then(() => {
        const state: ISliceUser = store.getState().user;
        if (state.status === 'ok') {
          setSuccessMessage(
            typeof state.message === 'string' ? state.message : '',
          );
        } else {
          setErrorMessage(
            typeof state.message === 'string' ? state.message : '',
          );
        }
      });
  };

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {user.address?.map((elem, index) => {
          return (
            <AddressComponent
              key={index}
              elem={elem}
              index={index}
              form={form}
              selectBilling={selectBilling}
              selectShipping={selectShipping}
              setSelectBilling={setSelectBilling}
              setSelectShipping={setSelectShipping}
            />
          );
        })}
        {errorMessage && (
          <CreateMessage Message={errorMessage} className={'error'} />
        )}
        {successMessage && (
          <CreateMessage Message={successMessage} className={'success'} />
        )}
        <div className={styles['table-button']}>
          <CreateButton label={'save changes'} className={styles.button} />
        </div>
        <div
          className={styles['table-adding']}
          onClick={(): void => {
            dispatch(addAddress({ country: '' }));
          }}
        >
          + add new address
        </div>
      </form>
    </>
  );
};

type AddressType = {
  elem: Address;
  index: number;
  form: UseFormReturn<FormAddress[]>;
  selectBilling: number;
  selectShipping: number;
  setSelectBilling: React.Dispatch<React.SetStateAction<number>>;
  setSelectShipping: React.Dispatch<React.SetStateAction<number>>;
};

const AddressComponent: React.FC<AddressType> = ({
  elem,
  index,
  form,
  selectBilling,
  selectShipping,
  setSelectBilling,
  setSelectShipping,
}): React.JSX.Element => {
  const [isShow, setisShow] = useState<boolean>(true);
  return (
    <>
      {isShow ? (
        <CreateTableAddress
          address={elem}
          form={form}
          index={index}
          setisShow={setisShow}
          selectBilling={selectBilling}
          selectShipping={selectShipping}
          setSelectBilling={setSelectBilling}
          setSelectShipping={setSelectShipping}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default CreateUserAddress;
