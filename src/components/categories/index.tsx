import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import styles from './categories.module.scss';
import { useDispatch } from 'react-redux';
import { categoryType } from '../../types/catalogTypes';
import { useAppSelector } from '../../hooks/redux-hooks';
import { setActiveCategory } from '../../store/productFilter/productFilter.slice';
import { hasChildren } from '../../utils/helpers/catalogPage/hasChildrenCategory';

// eslint-disable-next-line max-lines-per-function
const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const categories = useAppSelector((state) => state.catalog.categories);
  const childCategory = useAppSelector((state) => state.catalog.childCategory);
  const activeCategory = useAppSelector((state) => state.filter.category);
  const [activeAncestor, setActiveAncestor] = useState<categoryType | null>(
    null,
  );
  useEffect(() => {
    if (
      hasChildren(activeCategory, childCategory).length > 0 ||
      activeCategory.name === 'All'
    ) {
      setActiveAncestor(activeCategory);
    }
  });
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
            styles.subCategory,
            child.name === activeCategory.name ? styles.activeCategory : '',
          )}
          key={index}
          data-id={child.id}
        >
          {child.name}
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
                  el.name === activeCategory.name ||
                    el.name === (activeAncestor && activeAncestor.name)
                    ? styles.activeCategory
                    : '',
                )}
                data-id={el.id}
              >
                {el.name}
              </div>
            </div>
          ))}
      </div>
      <div className={styles.categories}>
        {activeAncestor
          ? hasChildren(activeAncestor, childCategory) &&
            childrenCategories(
              hasChildren(activeAncestor, childCategory),
              handleClick,
            )
          : hasChildren(activeCategory, childCategory) &&
            childrenCategories(
              hasChildren(activeCategory, childCategory),
              handleClick,
            )}
      </div>
    </div>
  );
};

export default Categories;
