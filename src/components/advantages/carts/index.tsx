import React from 'react';
import styles from './carts.module.scss';

type advCarttype = {
  imagePath: string;
  header: string;
  children: string;
};
const AdvantegeCart: React.FC<advCarttype> = ({
  imagePath,
  header,
  children,
}) => {
  return (
    <div className={styles.cart}>
      <img src={imagePath} alt="label" />
      <div className={styles.textContent}>
        <h5>{header}</h5>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default AdvantegeCart;
