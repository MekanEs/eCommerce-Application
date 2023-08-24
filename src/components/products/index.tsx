import React from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import styles from './products.module.scss';
const Products: React.FC = () => {
  const products = useAppSelector((state) => state.catalog.products);
  const productsJSX =
    products &&
    products.map((el) => (
      <div>
        <img src={el.images && el.images[0]} alt="product image" />
        <div>{el.name}</div>
        <div>{el.prices && el.prices[0].value}</div>
      </div>
    ));
  return <div className={styles.container}>{productsJSX}</div>;
};

export default Products;
