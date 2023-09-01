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
      <h2 className={styles.header}>Our best bikes are right here!</h2>
      <Categories />
      <div className={styles.filterPanel}>
        <div className={styles.upperPanel}>
          <div className={styles.total}>
            <span>Total: </span> <span> {catalog.total}</span>
          </div>
          <Search />
          <Sort />
        </div>

        <div className={styles.sides}>
          <div className={styles.sideBar}>
            <PriceSlider />
            <StockSlider />
            <Materials />
            <WheelSize />
            <button className={styles.resetButton} onClick={handleClick}>
              reset
            </button>
          </div>
          <div>
            {child}
            <Pagination offset={state.offset} total={catalog.total} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
