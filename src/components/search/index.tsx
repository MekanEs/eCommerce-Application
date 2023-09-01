import React, { ChangeEventHandler, useEffect, useRef } from 'react';
import styles from './search.module.scss';
import { useDispatch } from 'react-redux';
import { setText } from '../../store/productFilter/productFilter.slice';
import debounce from 'lodash.debounce';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    dispatch(setText(event?.target.value));
  };

  const debouncedHandler = useRef(
    debounce(async (val) => {
      handleChange(val);
    }, 1000),
  ).current;

  useEffect(() => {
    return () => {
      debouncedHandler.cancel();
    };
  }, [debouncedHandler]);
  return (
    <div className={styles.container}>
      <input
        onChange={debouncedHandler}
        type="search"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
