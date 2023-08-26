import React from 'react';
import styles from './productCard.module.scss';

import { producttype } from '../../../types/catalogTypes';
import { NavLink } from 'react-router-dom';
import Price from './price';

type props = { product: producttype };
// eslint-disable-next-line max-lines-per-function
const ProductCard: React.FC<props> = ({ product }) => {
  const attributes = ['Frame material', 'Wheel size', 'Stock'];
  if (!product.images || !product.categories || !product.price) {
    return <></>;
  }

  return (
    <NavLink to={`/catalog/${product.id}`}>
      <div key={product.id} className={styles.product_cart}>
        <div className={styles.productName}>{product.name}</div>

        <img src={product.images[0]} alt="product image" />

        <div className={styles.attributes}>
          <span> {product.categories.name}</span>
          {product.atributes?.map((attribute, index) => (
            <div>
              <span>{attributes[index]}</span>: <span>{attribute.value}</span>
            </div>
          ))}
        </div>
        <Price price={product.price} />
        <button className={styles.addToCart}>add to cart</button>
      </div>
    </NavLink>
  );
};

export default ProductCard;
