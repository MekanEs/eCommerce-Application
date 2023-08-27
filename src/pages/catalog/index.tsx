import React, { useEffect } from 'react';
import { getCategories } from '../../store/catalog/catalog.slice';
import { useAppDispatch } from '../../hooks/redux-hooks';

import styles from './catalog.module.scss';

import {
  ProductsLayout,
  Categories,
  Search,
  PriceSlider,
} from '../../components';
import { useAppSelector } from '../../hooks/redux-hooks';
const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector((state) => state.catalog.total);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.search_sort}>
        <div>{total}</div>
        <Search />
        <div>Price low to high</div>
      </div>
      <div className={styles.content}>
        <div className={styles.sideBar}>
          <Categories />
          <PriceSlider />
          <PriceSlider />
          <div>
            <h3>Frame material</h3>
            <div>
              <input type="radio" name="Aluminium" />
              <p>Aluminium</p>
            </div>
            <div>
              <input type="radio" name="Carbon" />
              <p>Carbon</p>
            </div>
            <div>
              <input type="radio" name="Steel" />
              <p>Steel</p>
            </div>
          </div>
        </div>
        <ProductsLayout />
      </div>
    </div>
  );
};

export default Catalog;
