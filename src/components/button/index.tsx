import React from 'react';
import styles from './button.module.scss';
import { ButtonProps } from '../../interfaces/formInputs';

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
