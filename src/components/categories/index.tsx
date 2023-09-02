import React from 'react';
import cx from 'classnames';
import styles from './categories.module.scss';
import { useDispatch } from 'react-redux';
import { categoryType } from '../../types/catalogTypes';
import { useAppSelector } from '../../hooks/redux-hooks';
import { setActiveCategory } from '../../store/productFilter/productFilter.slice';
import { hasChildren } from '../../utils/helpers/catalogPage/hasChildrenCategory';

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useAppSelector((state) => state.catalog.categories);
  const childCategory = useAppSelector((state) => state.catalog.childCategory);
  const activeCategory = useAppSelector((state) => state.filter.category);

  const handleClick = (el: categoryType): void => {
    dispatch(setActiveCategory(el));
  };

  const childrenCategories = (
    array: categoryType[],
    cb: (el: categoryType) => void,
  ): JSX.Element[] => {
    return array.map((child, index) => {
      return (
        <div
          onClick={(e): void => {
            e.stopPropagation();
            cb(child);
          }}
          className={cx(
            styles.category,
            child.name === activeCategory.name ? styles.activeCategory : '',
          )}
          key={index}
          data-id={child.id}
        >
          &gt;{child.name}
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        {categories &&
          categories.map((el, index) => (
            <div key={index}>
              <div
                onClick={(): void => handleClick(el)}
                className={cx(
                  styles.category,
                  el.name === activeCategory.name ? styles.activeCategory : '',
                )}
                data-id={el.id}
              >
                {el.name}
                {hasChildren(el, childCategory).length > 0
                  ? childrenCategories(
                      hasChildren(el, childCategory),
                      handleClick,
                    )
                  : ''}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
