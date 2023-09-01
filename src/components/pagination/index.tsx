import React from 'react';
import { useDispatch } from 'react-redux';
import { setOffset } from '../../store/productFilter/productFilter.slice';
import styles from './paginaiton.module.scss';

type paginationPropsType = { offset: number; total: number | undefined };
const Pagination: React.FC<paginationPropsType> = ({ offset, total }) => {
  const pages = total && Math.ceil(total / 9);
  const currentPage = offset / 9 + 1;
  const dispatch = useDispatch();
  const handleNext = (): void => {
    dispatch(setOffset(currentPage * 9));
  };
  const handlePrev = (): void => {
    dispatch(setOffset(offset - 9));
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.prev}
        onClick={handlePrev}
        disabled={currentPage < 2 ? true : false}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 26L26 20M26 20L20 14M26 20H14M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z"
            stroke="#5C5C5C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {currentPage} / {pages && pages}
      <button
        className={styles.next}
        onClick={handleNext}
        disabled={pages && pages > currentPage ? false : true}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 26L26 20M26 20L20 14M26 20H14M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z"
            stroke="#5C5C5C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
