import React from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import styles from './products.module.scss';
import ProductCard from './productCard';

const ProductsLayout: React.FC = () => {
  const products = useAppSelector((state) => state.catalog.products);

  return (
    <div className={styles.container}>
      {products &&
        products.map((el, index) => <ProductCard product={el} key={index} />)}
    </div>
  );
};

export default ProductsLayout;
