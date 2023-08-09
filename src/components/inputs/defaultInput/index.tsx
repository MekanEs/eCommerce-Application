import React from 'react';
import styles from './input.module.scss';
import { InputProps } from '../../../utils/helpers/interface';

const Input: React.FC<InputProps> = ({
  label,
  type,
  id,
  name,
  placeholder,
}) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} placeholder={placeholder} />
    </div>
  );
};

export default Input;
