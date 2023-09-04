import React, { useState } from 'react';
import eyeHide from '../../../assets/img/svg/eye-hide.svg';
import eyeShow from '../../../assets/img/svg/eye-show.svg';
import styles from './passwordInput.module.scss';
import { InputProps } from '../../../interfaces/formInputs';
import getLabelClasses from '../../../utils/helpers/labelClasses/getLabelClasses';
import getInputClasses from '../../../utils/helpers/inputClasses/getInputClasses';

const PasswordInput: React.FC<InputProps> = ({
  label,
  id,
  placeholder,
  hookData,
  errorMessage,
  isValid,
  warningMessage,
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles['password-input']}>
      <label className={getLabelClasses(isValid, styles)} htmlFor={id}>
        {label}
      </label>
      <input
        type={showPassword ? 'text' : 'password'}
        id={id}
        name={id}
        placeholder={placeholder}
        {...hookData}
        className={getInputClasses(isValid, styles)}
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

export default PasswordInput;
