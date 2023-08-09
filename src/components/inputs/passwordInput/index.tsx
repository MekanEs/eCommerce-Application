import React, { useState } from 'react';
import eyeHide from '../../../assets/img/svg/eye-hide.svg';
import eyeShow from '../../../assets/img/svg/eye-show.svg';
import styles from './passwordInput.module.scss';

const PasswordInput: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles['password-input']}>
      <label htmlFor="password">Password</label>
      <input
        type={showPassword ? 'text' : 'password'}
        id="password"
        name="password"
        placeholder="Enter your password"
      />
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
