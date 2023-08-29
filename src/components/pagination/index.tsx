import React from 'react';
import { useDispatch } from 'react-redux';
import { setOffset } from '../../store/productFilter/productFilter.slice';

type props = { offset: number; total: number | undefined };
const Pagination: React.FC<props> = ({ offset, total }) => {
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
    <div>
      <button onClick={handlePrev} disabled={currentPage < 2 ? true : false}>
        prev
      </button>
      {currentPage} / {pages && pages}
      <button
        onClick={handleNext}
        disabled={pages && pages > currentPage ? false : true}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
