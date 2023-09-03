import { categoryType } from '../../../types/catalogTypes';

export const hasChildren = (
  el: categoryType,
  childCategory: categoryType[],
): categoryType[] => {
  const children = childCategory.filter((child) => {
    return child.ancestor && child.ancestor.id === el.id;
  });

  return children;
};
