import { IProductFilter } from '../../../store/productFilter/productFilter.slice';
import { queryType } from '../../../types/filterTypes';
import { createFilter } from './createFilter';

export function createQuery(state: IProductFilter): queryType {
  const query: queryType = {
    queryArgs: {
      fuzzy: true,
      filter: createFilter(state),
      sort: `${state.sort.name} ${state.sort.order}`,
      offset: state.offset,
      limit: 9,
      'text.en-US': state.text ? `"${state.text}"` : undefined,
      expand: 'categories[*]',
    },
  };
  return query;
}
