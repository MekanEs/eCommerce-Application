import React, { useState } from 'react';
import eyeHide from '../../../assets/img/svg/eye-hide.svg';
import eyeShow from '../../../assets/img/svg/eye-show.svg';
import styles from './passwordInput.module.scss';
import { InputProps } from '../../../utils/helpers/interface';

const PasswordInput: React.FC<InputProps> = ({
  label: label,
  id: id,
  placeholder: placeholder,
  hookData: hookData,
  errorMessage: errorMessage,
  isValid: isValid,
  warningMessage: warningMessage,
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles['password-input']}>
      <label className={getLabelClasses(isValid)} htmlFor={id}>
        {label}
      </label>
      <input
        type={showPassword ? 'text' : 'password'}
        id={id}
        name={id}
        placeholder={placeholder}
        {...hookData}
        className={getInputClasses(isValid)}
      />
      {errorMessage && <div className={styles.errors}>{errorMessage}</div>}
      {warningMessage && <div className={styles.warning}>{warningMessage}</div>}
      <div
        className={styles['password-toggle-icon']}
        onClick={(): void => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <img src={eyeHide} alt="Hide Password" />
        ) : (
          <img src={eyeShow} alt="Show Password" />
        )}
      </div>
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

export default PasswordInput;
