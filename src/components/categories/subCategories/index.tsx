import React from 'react';
import { categoryType } from '../../../types/catalogTypes';
import cx from 'classnames';

type subCategoriesPropsType = {
  array: categoryType[];
  cb: (el: categoryType) => void;
  styles: {
    readonly [key: string]: string;
  };
  activeCategory: categoryType;
};
const SubCategories: React.FC<subCategoriesPropsType> = ({
  array,
  cb,
  styles,
  activeCategory,
}) => {
  return (
    <>
      {array.map((child, index) => {
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
      })}
    </>
  );
};

export default SubCategories;
