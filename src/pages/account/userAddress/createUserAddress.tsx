import { BaseAddress } from '@commercetools/platform-sdk';
import React, { ReactNode } from 'react';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { CreateButton } from '../../../components/form/createButton/createButton';
import { CreateTableAddress } from '../../../components/profile/personalInfo/createTable';
import { store } from '../../../store/store';
import styles from '../userInfo/userInfo.module.scss';

const CreateUserAddress: React.FC = (): React.JSX.Element => {
  const form: UseFormReturn<BaseAddress[]> = useForm<BaseAddress[]>({
    mode: 'onChange',
  });
  const onSubmit: SubmitHandler<BaseAddress[]> = (
    data: BaseAddress[],
  ): void => {
    console.log(data);
  };
  const state = store.getState().user;
  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {state.address?.map((elem, index): ReactNode => {
          return (
            <div key={index}>
              <CreateTableAddress
                address={elem}
                form={form}
                index={index}
                title={'bil'}
              />
            </div>
          );
        })}
        <div className={styles['table-button']}>
          <CreateButton label={'save changes'} className={styles.button} />
        </div>
      </form>
    </>
  );
};

export default CreateUserAddress;
