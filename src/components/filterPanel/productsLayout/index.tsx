import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import styles from './products.module.scss';
import ProductCard from './productCard';
import { getProducts } from '../../../store/catalog/catalog.slice';
import Skeleton from '../../skeleton/catalog';

const ProductsLayout: React.FC = () => {
  const products = useAppSelector((state) => state.catalog.products);
  const filter = useAppSelector((state) => state.filter);
  const categories = useAppSelector((state) => state.catalog.categories);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts(filter)).then(() => setIsLoading(false));
  }, [filter, categories]);
  return (
    <div className={styles.container}>
      {isLoading ? (
        [...new Array(9)].map((_, index) => <Skeleton key={index} />)
      ) : products && products.length === 0 ? (
        <h3>Nothing found</h3>
      ) : (
        products &&
        products.map((el, index) => <ProductCard product={el} key={index} />)
      )}
    </div>
  );
};

export default ProductsLayout;
