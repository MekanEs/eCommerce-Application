import React from 'react';
import { LineItem } from '@commercetools/platform-sdk';
import styles from './attribute.module.scss';
import { isKey } from '../../../utils/helpers/isKeyOfObj';

type ProductAttributesPropsType = {
  product: LineItem;
};
const ProductAttributes: React.FC<ProductAttributesPropsType> = ({
  product,
}) => {
  const attributes = {
    'Frame material:': product.variant.attributes?.filter(
      (el) => el.name === 'frameMaterial',
    )[0].value,
    'Wheel size:': product.variant.attributes?.filter(
      (el) => el.name === 'wheelSize',
    )[0].value,
    'Stock:': product.variant.attributes?.filter((el) => el.name === 'stock')[0]
      .value,
  };
  return (
    <ul className={styles.attributes}>
      {Object.keys(attributes).map((el, index) => {
        if (isKey<typeof attributes>(el)) {
          return (
            <li key={index} className={styles['list-item']}>
              <p className={styles['item-title']}>{el}</p>
              <p className={styles['item-info']}>{attributes[el]}</p>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default ProductAttributes;
