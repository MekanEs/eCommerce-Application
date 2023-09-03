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
};

const AddressComponent: React.FC<AddressType> = ({
  elem,
  index,
  form,
}): React.JSX.Element => {
  const user: ISliceUser = useAppSelector((state) => state.user);
  const [isShow, setisShow] = useState(true);
  const title =
    elem.id === user.defaultBillingAddressId
      ? 'Default billing addres'
      : elem.id === user.defaultShippingAddressId
      ? 'Default shipping addres'
      : '';
  return (
    <>
      {isShow ? (
        <CreateTableAddress
          address={elem}
          form={form}
          index={index}
          title={title}
          setisShow={setisShow}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default CreateUserAddress;
