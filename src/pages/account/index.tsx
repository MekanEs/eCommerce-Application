import React from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { FormFields } from '../../interfaces/formInputs';

import { createFirstNameInput } from '../../utils/helpers/functions';
import styles from './account.module.scss';

const Account: React.FC = (): React.JSX.Element => {
  const form: UseFormReturn<FormFields> = useForm<FormFields>({
    mode: 'onChange',
  });

  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>personal account</h2>
      <div className={styles['form-container']}>{createGeneralInfo(form)}</div>
    </div>
  );
};

function createGeneralInfo(form: UseFormReturn<FormFields>): React.JSX.Element {
  return (
    <div className={styles['general-column']}>{createFirstNameInput(form)}</div>
  );
}

export default Account;
