import React, { ReactNode, useState } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { CreateButton } from '../../../components/form/createButton/createButton';
import { CreateTableAddress } from '../../../components/profile/personalInfo/createTable';
import { store } from '../../../store/store';
import styles from '../userInfo/userInfo.module.scss';
import { FormAddress } from '../../../interfaces/formInputs';

const CreateUserAddress: React.FC = (): React.JSX.Element => {
  const form: UseFormReturn<FormAddress[]> = useForm<FormAddress[]>({
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<FormAddress[]> = (
    data: FormAddress[],
  ): void => {
    console.log(data);
  };
  const state = store.getState().user;
  const [addressState, setAddressState] = useState(
    state.address ? state.address : [{ country: '' }],
  );
  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {addressState?.map((elem, index): ReactNode => {
          const [isShow, setisShow] = useState(true);
          const title =
            elem.id === state.defaultBillingAddressId
              ? 'Default billing addres'
              : elem.id === state.defaultShippingAddressId
              ? 'Default shipping addres'
              : '';
          return (
            <div key={index}>
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
            </div>
          );
        })}
        <div className={styles['table-button']}>
          <CreateButton label={'save changes'} className={styles.button} />
        </div>
        <div
          className={styles['table-adding']}
          onClick={(): void => {
            const newAddress = Object.assign([], addressState);
            newAddress.push({ country: '' });
            setAddressState(newAddress);
          }}
        >
          + add new address
        </div>
      </form>
    </>
  );
};

export default CreateUserAddress;
