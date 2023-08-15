import React from 'react';
import { InputProps } from '../../../utils/helpers/interface';
import styles from './dateInput.module.scss';

const DateInput: React.FC<InputProps> = ({
  label: label,
  type: type,
  id: id,
  placeholder: placeholder,
  hookData: hookData,
  errorMessage: errorMessage,
  isValid: isValid,
}): JSX.Element => {
  return (
    <div className={styles.field}>
      <label className={getLabelClasses(isValid)} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...hookData}
        className={getInputClasses(isValid)}
      />
      {errorMessage && <div className={styles.errors}>{errorMessage}</div>}
    </div>
  );
};

function getLabelClasses(isValid: boolean | undefined): string {
  if (isValid === undefined) {
    return styles['default-label'];
  } else {
    if (isValid) {
      return styles['valid-label'];
    } else {
      return styles['error-label'];
    }
  }
}

function getInputClasses(isValid: boolean | undefined): string {
  if (isValid === undefined || isValid) {
    return styles['default-input'];
  } else {
    return styles['error-input'];
  }
}

export default DateInput;
