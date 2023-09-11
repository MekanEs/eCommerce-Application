import React, { ChangeEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import {
  setOrder,
  setSorting,
} from '../../../store/productFilter/productFilter.slice';
import styles from './sort.module.scss';

const Sort: React.FC = () => {
  const name = useAppSelector((state) => state.filter.sort.name);
  const order = useAppSelector((state) => state.filter.sort.order);
  const dispatch = useAppDispatch();

  const handleOrder: ChangeEventHandler<HTMLSelectElement> = (event): void => {
    dispatch(setOrder(event.target.value));
  };
  const handleSort: ChangeEventHandler<HTMLSelectElement> = (event): void => {
    dispatch(setSorting(event.target.value));
  };
  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        value={name}
        onChange={handleSort}
        name="name"
        id="sort-value"
      >
        <option value="price">Price</option>
        <option value="name.en-US">Name</option>
      </select>
      <select
        className={styles.select}
        value={order}
        onChange={handleOrder}
        name="value"
        id="sort-value"
      >
        <option value="asc">
          {name === 'price' ? 'low to high' : 'from a to z'}
        </option>
        <option value="desc">
          {name === 'price' ? 'high to low' : 'from z to a'}
        </option>
      </select>
    </div>
  );
};

export default Sort;
