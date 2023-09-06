import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import styles from './products.module.scss';
import ProductCard from './productCard';
import { getProducts } from '../../store/catalog/catalog.slice';

const ProductsLayout: React.FC = () => {
  const products = useAppSelector((state) => state.catalog.products);
  const filter = useAppSelector((state) => state.filter);
  const categories = useAppSelector((state) => state.catalog.categories);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts(filter));
  }, [filter, categories]);
  return (
    <div className={styles.container}>
      {products && products.length === 0 && <h3>Nothing found</h3>}
      {products &&
        products.map((el, index) => <ProductCard product={el} key={index} />)}
    </div>
  );
};

export default ProductsLayout;
