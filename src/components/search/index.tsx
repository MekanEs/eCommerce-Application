import React, { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import styles from './search.module.scss';
import { useDispatch } from 'react-redux';
import { setText } from '../../store/productFilter/productFilter.slice';
import debounce from 'lodash.debounce';
import { useAppSelector } from '../../hooks/redux-hooks';

const Search: React.FC = () => {
  const text = useAppSelector((state) => state.filter.text);
  const [textValue, setTextValue] = useState<string>(text);
  const dispatch = useDispatch();
  useEffect(() => {
    if (text !== textValue) {
      setTextValue(text);
    }
  }, [text]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    dispatch(setText(event?.target.value));
  };

  const debouncedHandler = useRef(
    debounce(async (val) => {
      handleChange(val);
    }, 1000),
  ).current;

  const handleDebounce: ChangeEventHandler<HTMLInputElement> = (
    event,
  ): void => {
    setTextValue(event.target.value);
    debouncedHandler(event);
  };

  useEffect(() => {
    return () => {
      debouncedHandler.cancel();
    };
  }, [debouncedHandler]);
  return (
    <div className={styles.container}>
      <input
        onChange={handleDebounce}
        type="search"
        placeholder="Search..."
        value={textValue}
      />
    </div>
  );
};

export default Search;
