import React from 'react';
import { InputProps } from '../../../interfaces/formInputs';
import styles from './textInput.module.scss';
import getLabelClasses from '../../../utils/helpers/labelClasses/getLabelClasses';
import getInputClasses from '../../../utils/helpers/inputClasses/getInputClasses';

const TextInput: React.FC<InputProps> = ({
  label,
  type,
  id,
  placeholder,
  hookData,
  errorMessage,
  isValid,
  className,
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
        className={getInputClasses(isValid, styles) + ' ' + className}
      />
      {errorMessage && <div className={styles.errors}>{errorMessage}</div>}
    </div>
  );
};

export default TextInput;
