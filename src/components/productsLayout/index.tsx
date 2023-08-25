import React from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import styles from './products.module.scss';
import ProductCard from './productCard';

const ProductsLayout: React.FC = () => {
  const products = useAppSelector((state) => state.catalog.products);

  console.log(products);

  return (
    <div className={styles.container}>
      {products && products.map((el) => <ProductCard product={el} />)}
    </div>
  );
};

export default ProductsLayout;
