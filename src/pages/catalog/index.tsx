import React, { useEffect } from 'react';
import { getProducts } from '../../store/catalog/catalog.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';

import styles from './catalog.module.scss';
import { FilterPanel, ProductsLayout } from '../../components';

// eslint-disable-next-line max-lines-per-function
const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);
  useEffect(() => {
    dispatch(getProducts(filter));
  }, [filter]);

  return (
    <div className={styles.container}>
      <FilterPanel child={<ProductsLayout />} />
    </div>
  );
};

export default Catalog;
