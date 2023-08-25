import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import styles from './products.module.scss';
import { getDiscounts } from '../../store/catalog/catalog.slice';
import cx from 'classnames';
// eslint-disable-next-line max-lines-per-function
const Products: React.FC = () => {
  const products = useAppSelector((state) => state.catalog.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDiscounts());
  });
  const productsJSX =
    products &&
    products.map((el) => (
      <div className={styles.product_cart}>
        <img src={el.images && el.images[0]} alt="product image" />
        <div>{el.name}</div>
        <div
          className={cx(
            el.prices && el.prices[0].discount
              ? styles.hasDiscount
              : styles.noDiscount,
          )}
        >
          ${el.prices && el.prices[0].value / 100}
        </div>
        {el.prices && el.prices[0].discount && (
          <div>
            <span
              className={styles.discountPrice}
              title={el.prices[0].discount.name}
            >
              ${el.prices[0].discount.value / 100}
            </span>
          </div>
        )}
        <div>
          {el.categories && el.categories.map((el) => <span>{el.name}</span>)}
        </div>
        <div className={styles.attributes}>
          {el.atributes?.map((attribute) => (
            <div>
              <span>{attribute.name}</span>: <span>{attribute.value}</span>
            </div>
          ))}
        </div>
      </div>
    ));
  return <div className={styles.container}>{productsJSX}</div>;
};

export default Products;
