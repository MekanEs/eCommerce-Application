import React from 'react';
import styles from './productCard.module.scss';
import cx from 'classnames';
import { producttype } from '../../../types/catalogTypes';
import { NavLink } from 'react-router-dom';

type props = { product: producttype };
// eslint-disable-next-line max-lines-per-function
const ProductCard: React.FC<props> = ({ product }) => {
  const attributes = ['Frame material', 'Wheel size', 'Stock'];

  return (
    <NavLink to={`/catalog/${product.id}`}>
      <div key={product.id} className={styles.product_cart}>
        <div className={styles.productName}>{product.name}</div>

        <img src={product.images && product.images[0]} alt="product image" />

        <div className={styles.attributes}>
          {product.categories &&
            product.categories.map((el) => <span>{el.name}</span>)}
          {product.atributes?.map((attribute, index) => (
            <div>
              <span>{attributes[index]}</span>: <span>{attribute.value}</span>
            </div>
          ))}
        </div>

        <div
          className={cx(
            product.prices && product.prices[0].discount
              ? styles.hasDiscount
              : styles.noDiscount,
          )}
        >
          ${product.prices && product.prices[0].value / 100}
        </div>

        {product.prices && product.prices[0].discount && (
          <div>
            <span className={styles.discountPrice}>
              ${product.prices[0].discount.value / 100}
            </span>
          </div>
        )}
        <button>add to cart</button>
      </div>
    </NavLink>
  );
};

export default ProductCard;
