import React, { ChangeEventHandler } from 'react';
import { useAppSelector } from '../../hooks/redux-hooks';
import { useDispatch } from 'react-redux';
import {
  setOrder,
  setSorting,
} from '../../store/productFilter/productFilter.slice';
import styles from './sort.module.scss';

const Sort: React.FC = () => {
  const name = useAppSelector((state) => state.filter.sort.name);
  const order = useAppSelector((state) => state.filter.sort.order);
  const dispatch = useDispatch();

  const handleOrder: ChangeEventHandler<HTMLSelectElement> = (event): void => {
    dispatch(setOrder(event.target.value));
  };
  const handleSort: ChangeEventHandler<HTMLSelectElement> = (event): void => {
    dispatch(setSorting(event.target.value));
  };
  return (
    <div className={styles.container}>
      <select value={name} onChange={handleSort} name="name" id="sort-value">
        <option value="price">Price</option>
        <option value="name.en-US">Name</option>
      </select>
      <select value={order} onChange={handleOrder} name="value" id="sort-value">
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
