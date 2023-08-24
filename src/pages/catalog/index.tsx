import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getCategories, getProducts } from '../../store/catalog/catalog.slice';
import { useAppDispatch } from '../../hooks/redux-hooks';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  // const products = useSelector((state: RootState) => state.catalog.products);
  const categories = useSelector(
    (state: RootState) => state.catalog.categories,
  );
  const categoriesJSX =
    categories && categories.map((el) => <div data-id={el.id}>{el.name}</div>);

  return (
    <div>
      <div>{categoriesJSX}</div>
    </div>
  );
};

export default Catalog;
