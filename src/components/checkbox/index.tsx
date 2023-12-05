import { CheckboxProps } from '../../interfaces/formInputs';
import styles from './checkbox.module.scss';
import React from 'react';

const Checkbox: React.FC<CheckboxProps> = ({ id, label, hookData }) => {
  return (
    <div className={styles['checkbox-container']}>
      <input id={id} type="checkbox" {...hookData} />
      <label className={styles['checkbox-label']} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
