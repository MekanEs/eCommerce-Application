import React from 'react';
import styles from './button.module.scss';
import { ButtonProps } from '../../utils/helpers/interface';

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
