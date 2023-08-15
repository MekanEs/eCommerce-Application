import React from 'react';
import styles from './button.module.scss';
import { ButtonProps } from '../../utils/helpers/interface';

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
