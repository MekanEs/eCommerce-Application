import { InputProps } from '../../../interfaces/formInputs';
import getLabelClasses from '../../../utils/helpers/getLabelClasses/getLabelClasses';
import styles from './selectInput.module.scss';
import React from 'react';

const SelectInput: React.FC<InputProps> = ({
  label,
  id,
  placeholder,
  hookData,
  errorMessage,
  isValid,
  options,
}): JSX.Element => {
  return (
    <div className={styles.field}>
      <label className={getLabelClasses(isValid, styles)} htmlFor={id}>
        {label}
      </label>
      <select
        defaultValue=""
        id={id}
        className={getInputClasses(isValid, styles)}
        {...hookData}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options?.map(({ value: value, label: label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
      {errorMessage && <div className={styles.errors}>{errorMessage}</div>}
    </div>
  );
};

function getInputClasses(
  isValid: boolean | undefined,
  styles: { readonly [x: string]: string },
): string {
  if (isValid === undefined) {
    return styles['default-input'];
  } else {
    if (isValid) {
      return styles['valid-input'];
    } else {
      return styles['error-input'];
    }
  }
}

export default SelectInput;
