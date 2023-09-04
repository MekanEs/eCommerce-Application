import { Category } from '@commercetools/platform-sdk';
import { childCategoryType } from '../../../types/catalogTypes';

export const getChildCategories = (
  categories: Category[],
): childCategoryType => {
  return categories
    .filter((category) => category.ancestors.length > 0)
    .map((el) => {
      return {
        name: Object.values(el.name)[0],
        id: el.id,
        ancestor: {
          id: el.ancestors[0].id,
          name: el.ancestors[0].obj ? el.ancestors[0].obj.name['en-US'] : '',
        },
      };
    });
};
