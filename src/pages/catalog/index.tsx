import React, { useEffect } from 'react';
import { getCategories, getProducts } from '../../store/catalog/catalog.slice';
import { useAppDispatch } from '../../hooks/redux-hooks';

import styles from './catalog.module.scss';
import Categories from '../../components/categories';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);
  console.log(1);

  return (
    <div className={styles.container}>
      <Categories />
    </div>
  );
};

export default Catalog;
