import React from 'react';
import { InputProps } from '../../../interfaces/formInputs';
import styles from './dateInput.module.scss';
import getInputClasses from '../../../utils/helpers/functions/getInputClasses';
import getLabelClasses from '../../../utils/helpers/functions/getLabelClasses';

const DateInput: React.FC<InputProps> = ({
  label,
  type,
  id,
  placeholder,
  hookData,
  errorMessage,
  isValid,
}): JSX.Element => {
  return (
    <div className={styles.field}>
      <label className={getLabelClasses(isValid, styles)} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...hookData}
        className={getInputClasses(isValid, styles)}
      />
      {errorMessage && <div className={styles.errors}>{errorMessage}</div>}
    </div>
  );
};

export default DateInput;
