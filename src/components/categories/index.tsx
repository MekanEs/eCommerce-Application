import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import cx from 'classnames';
import styles from './categories.module.scss';
import {
  getProducts,
  setActiveCategories,
} from '../../store/catalog/catalog.slice';
import { useDispatch } from 'react-redux';
import { categorytype } from '../../types/catalogTypes';
import { useAppDispatch } from '../../hooks/redux-hooks';

const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const categories = useSelector(
    (state: RootState) => state.catalog.categories,
  );
  const activeCategory = useSelector(
    (state: RootState) => state.catalog.activeCategory,
  );
  useEffect(() => {
    appDispatch(getProducts(activeCategory.id));
  }, [activeCategory.id]);

  const handleClick = (el: categorytype): void => {
    dispatch(setActiveCategories(el));
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
