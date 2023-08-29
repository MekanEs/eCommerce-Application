import React from 'react';
import cx from 'classnames';
import styles from './categories.module.scss';

import { useDispatch } from 'react-redux';
import { categorytype } from '../../types/catalogTypes';
import { useAppSelector } from '../../hooks/redux-hooks';
import { setActiveCategory } from '../../store/productFilter/productFilter.slice';

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useAppSelector((state) => state.catalog.categories);
  const activeCategory = useAppSelector((state) => state.filter.category);

  const handleClick = (el: categorytype): void => {
    dispatch(setActiveCategory(el));
  };

  const categoriesJSX =
    categories &&
    categories.map((el, index) => (
      <button
        onClick={(): void => handleClick(el)}
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
