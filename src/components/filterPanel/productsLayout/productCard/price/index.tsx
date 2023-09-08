import React from 'react';
import { priceType } from '../../../../../types/catalogTypes';
import cx from 'classnames';
import styles from './price.module.scss';

type propsType = { price: priceType | undefined };
const Price: React.FC<propsType> = ({ price }) => {
  if (!price) {
    return <></>;
  }
  return (
    <div
      className={cx(
        price.discount ? styles.discount : styles.default,
        styles.container,
      )}
    >
      {price.discount && <span>$ {price.discount?.value / 100}</span>}
      <span className={cx(price.discount ? styles.line : '')}>
        $ {price.value / 100}
      </span>
    </div>
  );
};

export default Price;
