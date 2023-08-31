import React from 'react';

import styles from './filterPanel.module.scss';
import Search from '../search';
import Categories from '../categories';
import PriceSlider from '../range-slider/price';
import { useAppSelector } from '../../hooks/redux-hooks';
import { Materials } from '..';
import WheelSize from '../wheelSizeCheckbox';
import StockSlider from '../range-slider/stock';
import { Pagination } from '../';
import { useDispatch } from 'react-redux';
import { resetState } from '../../store/productFilter/productFilter.slice';
import Sort from '../sort';

type Props = {
  child: JSX.Element;
};
const FilterPanel: React.FC<Props> = ({ child }) => {
  const state = useAppSelector((state) => state.filter);
  const catalog = useAppSelector((state) => state.catalog);
  const dispatch = useDispatch();
  const handleClick = (): void => {
    dispatch(resetState());
  };
  return (
    <div className={styles.container}>
      <Categories />

      <div className={styles.upperPanel}>
        <span className={styles.total}>
          <span>Total: </span> <span> {catalog.total}</span>
        </span>
        <Search />
        <Sort />
      </div>

      <div className={styles.sides}>
        <div className={styles.sideBar}>
          <PriceSlider />
          <StockSlider />
          <Materials />
          <WheelSize />
          <button onClick={handleClick}>reset</button>
        </div>
        {child}
      </div>
      <Pagination offset={state.offset} total={catalog.total} />
    </div>
  );
};

export default FilterPanel;
