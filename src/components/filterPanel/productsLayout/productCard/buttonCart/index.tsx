import React from 'react';
import { ButtonCart } from '../../../../../interfaces/formInputs';

const CartBtn: React.FC<ButtonCart> = ({
  label: label,
  className: className,
  disabled: disabled,
  onClick: onClick,
}) => {
  disabled = disabled === undefined ? false : disabled;
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={'submit'}
    >
      {label}
    </button>
  );
};

export default CartBtn;
