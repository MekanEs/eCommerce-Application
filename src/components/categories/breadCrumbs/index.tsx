import React from 'react';
import CategoryButton from '../categoryButton';
import { categoryType } from '../../../types/catalogTypes';

type BreadCrumbsPropsType = {
  activeCategory: categoryType;
  activeAncestor: categoryType | undefined | null;
  styles: {
    readonly [key: string]: string;
  };
  categories: categoryType[] | undefined;
  handleClick: (el: categoryType) => void;
};
const BreadCrumbs: React.FC<BreadCrumbsPropsType> = ({
  activeCategory,
  activeAncestor,
  styles,
  categories,
  handleClick,
}) => {
  return (
    <div className={styles.breadCrumb}>
      <div
        onClick={(): void | null =>
          categories && categories[0] && handleClick(categories[0])
        }
      >
        Catalog
      </div>
      /
      {activeCategory !== activeAncestor ? (
        <>
          <CategoryButton
            el={activeAncestor}
            styles={styles}
            activeCategory={activeCategory}
            activeAncestor={activeAncestor}
            callback={handleClick}
          />
          /
          <CategoryButton
            el={activeCategory}
            styles={styles}
            activeCategory={activeCategory}
            activeAncestor={activeAncestor}
            callback={handleClick}
          />
        </>
      ) : (
        <CategoryButton
          el={activeCategory}
          styles={styles}
          activeCategory={activeCategory}
          activeAncestor={activeAncestor}
          callback={handleClick}
        />
      )}
    </div>
  );
};

export default BreadCrumbs;
