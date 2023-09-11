import React, { useEffect, useState } from 'react';
import styles from './categories.module.scss';
import { categoryType } from '../../types/catalogTypes';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { setActiveCategory } from '../../store/productFilter/productFilter.slice';
import { hasChildren } from '../../utils/helpers/catalogPage/hasChildrenCategory';
import SubCategories from './subCategories';
import CategoryButton from './categoryButton';
import BreadCrumbs from './breadCrumbs';

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
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

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        {categories &&
          categories.map((el, index) => (
            <div key={index}>
              <CategoryButton
                el={el}
                styles={styles}
                activeCategory={activeCategory}
                activeAncestor={activeAncestor}
                callback={handleClick}
              />
            </div>
          ))}
      </div>
      <div className={styles.categories}>
        {activeAncestor
          ? hasChildren(activeAncestor, childCategory) && (
              <SubCategories
                array={hasChildren(activeAncestor, childCategory)}
                cb={handleClick}
                styles={styles}
                activeCategory={activeCategory}
              />
            )
          : hasChildren(activeCategory, childCategory) && (
              <SubCategories
                array={hasChildren(activeCategory, childCategory)}
                cb={handleClick}
                styles={styles}
                activeCategory={activeCategory}
              />
            )}
      </div>
      <BreadCrumbs
        handleClick={handleClick}
        activeAncestor={activeAncestor}
        activeCategory={activeCategory}
        categories={categories}
        styles={styles}
      />
    </div>
  );
};

export default Categories;
