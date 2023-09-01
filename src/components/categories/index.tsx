import React from 'react';
import cx from 'classnames';
import styles from './categories.module.scss';

import { useDispatch } from 'react-redux';
import { categorytype } from '../../types/catalogTypes';
import { useAppSelector } from '../../hooks/redux-hooks';
import { setActiveCategory } from '../../store/productFilter/productFilter.slice';

// eslint-disable-next-line max-lines-per-function
const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useAppSelector((state) => state.catalog.categories);
  const childCategory = useAppSelector((state) => state.catalog.childCategory);
  const activeCategory = useAppSelector((state) => state.filter.category);

  const handleClick = (el: categorytype): void => {
    dispatch(setActiveCategory(el));
  };
  const categoriesJSX =
    categories &&
    categories.map((el, index) => (
      <div>
        <button
          onClick={(): void => handleClick(el)}
          className={cx(
            styles.category,
            el.name === activeCategory.name ? styles.activeCategory : '',
          )}
          key={index}
          data-id={el.id}
        >
          {el.name}
        </button>
      </div>
    ));
  return (
    <div className={styles.container}>
      <div className={styles.categories}> {categoriesJSX}</div>
      <div className={styles.categories}>
        <h4>
          {activeCategory.ancestor && `${activeCategory.ancestor.name} >`}
        </h4>
        {childCategory &&
          childCategory
            .filter(
              (el) =>
                el.ancestor.id === activeCategory.id ||
                el.id === activeCategory.id,
            )
            .map((el, index) => {
              return (
                <button
                  onClick={(): void => handleClick(el)}
                  className={cx(
                    styles.category,
                    el.name === activeCategory.name
                      ? styles.activeCategory
                      : '',
                  )}
                  key={index}
                  data-id={el.id}
                >
                  {el.name}
                </button>
              );
            })}
      </div>
    </div>
  );
};

export default Categories;
