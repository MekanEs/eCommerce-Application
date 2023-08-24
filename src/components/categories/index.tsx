import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import cx from 'classnames';
import styles from './categories.module.scss';

const Categories: React.FC = () => {
  const categories = useSelector(
    (state: RootState) => state.catalog.categories,
  );
  const activeCategory = useSelector(
    (state: RootState) => state.catalog.activeCategory,
  );
  const categoriesJSX =
    categories &&
    categories.map((el, index) => (
      <button
        className={cx(
          styles.categories,
          el.name === activeCategory.name ? styles.activeCategory : '',
        )}
        key={index}
        data-id={el.id}
      >
        {el.name}
      </button>
    ));
  return <div className={styles.container}>{categoriesJSX}</div>;
};

export default Categories;
