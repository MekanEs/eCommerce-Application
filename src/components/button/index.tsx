import React from 'react';
import { ButtonProps } from '../../interfaces/formInputs';

const Button: React.FC<ButtonProps> = ({
  label: label,
  className: className,
  disabled: disabled,
}) => {
  disabled = disabled === undefined ? false : disabled;
  return (
    <button className={className} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
