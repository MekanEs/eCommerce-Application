import React from 'react';

import styles from './filterPanel.module.scss';
import Search from '../search';
import Categories from '../categories';
import { useAppSelector } from '../../hooks/redux-hooks';
import { Pagination } from '../';
import Sort from '../sort';
import SideBar from './sideBar';
import FilterModal from './filterTablet';

type FilterPanelPropsType = {
  child: JSX.Element;
};

const FilterPanel: React.FC<FilterPanelPropsType> = ({ child }) => {
  const state = useAppSelector((state) => state.filter);
  const catalog = useAppSelector((state) => state.catalog);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Our best bikes are right here!</h2>

      <Categories />
      <div className={styles.filterPanel}>
        <div className={styles.sides}>
          <div className={styles.left}>
            <div className={styles.total}>
              <span>Total: {catalog.total}</span>
            </div>
            <SideBar modal={false} />
          </div>

          <div className={styles.right}>
            <div className={styles.upperPanel}>
              <Search />
              <Sort />
            </div>
            {child}
            <Pagination offset={state.offset} total={catalog.total} />
          </div>
        </div>
      </div>
      <FilterModal child={child} />
    </div>
  );
};

export default FilterPanel;
