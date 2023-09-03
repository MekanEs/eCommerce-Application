import React, { useState } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { CreateButton } from '../../form/createButton/createButton';
import { CreateTableAddress } from '../personalInfo/createTable';
import styles from '../userInfo/userInfo.module.scss';
import { FormAddress } from '../../../interfaces/formInputs';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { ISliceUser } from '../../../interfaces/sliceUser';
import { addAddress } from '../../../store/user/user.slice';
import { Address } from '@commercetools/platform-sdk';
import { getDefaultAddress } from '../../../utils/helpers/profile/gefaultAddress';

const CreateUserAddress: React.FC = (): React.JSX.Element => {
  const form: UseFormReturn<FormAddress[]> = useForm<FormAddress[]>({
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<FormAddress[]> = (
    data: FormAddress[],
  ): void => {
    console.log(data);
  };
  const dispatch = useAppDispatch();
  const user: ISliceUser = useAppSelector((state) => state.user);
  const [selectBilling, setSelectBilling] = useState(
    getDefaultAddress(user, user.defaultBillingAddressId),
  );
  const [selectShiping, setSelectShiping] = useState(
    getDefaultAddress(user, user.defaultShippingAddressId),
  );

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {user.address?.map((elem, index) => {
          const title =
            index === selectBilling
              ? 'Default billing addres'
              : index === selectShiping
              ? 'Default shipping addres'
              : '';
          return (
            <AddressComponent
              key={index}
              elem={elem}
              index={index}
              form={form}
              title={title}
              selectBilling={selectBilling}
              selectShiping={selectShiping}
              setSelectBilling={setSelectBilling}
              setSelectShiping={setSelectShiping}
            />
          );
        })}
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
  title: string;
  selectBilling: number;
  selectShiping: number;
  setSelectBilling: React.Dispatch<React.SetStateAction<number>>;
  setSelectShiping: React.Dispatch<React.SetStateAction<number>>;
};

const AddressComponent: React.FC<AddressType> = ({
  elem,
  index,
  form,
  title,
  selectBilling,
  selectShiping,
  setSelectBilling,
  setSelectShiping,
}): React.JSX.Element => {
  const [isShow, setisShow] = useState(true);
  return (
    <>
      {isShow ? (
        <CreateTableAddress
          address={elem}
          form={form}
          index={index}
          title={title}
          setisShow={setisShow}
          selectBilling={selectBilling}
          selectShiping={selectShiping}
          setSelectBilling={setSelectBilling}
          setSelectShiping={setSelectShiping}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default CreateUserAddress;
