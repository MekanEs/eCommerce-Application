import React from 'react';

import styles from './filterPanel.module.scss';
import Search from '../search';
import Categories from '../categories';
import PriceSlider from '../range-slider';
import { createQuery } from '../../store/productFilter/productFilter.slice';
import { useAppSelector } from '../../hooks/redux-hooks';
import { Materials } from '..';
import WheelSize from '../wheelSizeCheckbox';

type Props = {
  child: JSX.Element;
};
const FilterPanel: React.FC<Props> = ({ child }) => {
  const state = useAppSelector((state) => state.filter);
  const catalog = useAppSelector((state) => state.catalog);
  createQuery(state);
  return (
    <div className={styles.container}>
      <div className={styles.upperPanel}>
        <span className={styles.total}>
          <span>Total: </span> <span> {catalog.total}</span>
        </span>
        <Search />
      </div>

      <div className={styles.sides}>
        <div className={styles.sideBar}>
          <Categories />
          <PriceSlider />
          <Materials />
          <WheelSize />
        </div>
        {child}
      </div>
    </div>
  );
};

export default FilterPanel;
