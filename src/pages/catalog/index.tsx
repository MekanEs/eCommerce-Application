import React, { useEffect } from 'react';
import { getCategories } from '../../store/catalog/catalog.slice';
import { useAppDispatch } from '../../hooks/redux-hooks';

import styles from './catalog.module.scss';

import { ProductsLayout, Categories } from '../../components';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Categories />
      <ProductsLayout />
    </div>
  );
};

export default Catalog;
