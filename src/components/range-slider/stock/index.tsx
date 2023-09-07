import React, { ChangeEventHandler, useEffect, useState } from 'react';
import styles from './range-slider.module.scss';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import {
  setStockMax,
  setStockMin,
} from '../../../store/productFilter/productFilter.slice';

const StockSlider: React.FC = () => {
  const appDispatch = useAppDispatch();
  const state = useAppSelector((state) => state.filter);
  const initialMin = state.stockRange.from;
  const initialMax = state.stockRange.to;
  const [min, setMin] = useState<number>(initialMin);
  const [max, setMax] = useState<number>(initialMax);

  useEffect(() => {
    if (min !== initialMin) {
      setMin(initialMin);
    }
    if (max !== initialMax) {
      setMax(initialMax);
    }
  }, [initialMax, initialMin]);

  function validateRange(): void {
    if (min > max) {
      setMin(0);
      setMax(50);
    }
  }

  const handleMouseUp = (): void => {
    appDispatch(setStockMin(min));
    appDispatch(setStockMax(max));
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    if (event.target.id === 'min') {
      setMin(+event.target.value);
    } else {
      setMax(+event.target.value);
    }

    validateRange();
  };

  return (
    <div className={styles.card}>
      <h3>Stock</h3>
      <div className={styles.range}>
        <input
          id="min"
          type="range"
          onChange={handleChange}
          onTouchEnd={handleMouseUp}
          onMouseUp={handleMouseUp}
          className={styles.min}
          value={min}
          min="0"
          max="50"
          step="1"
        />

        <input
          id="max"
          type="range"
          onChange={handleChange}
          onTouchEnd={handleMouseUp}
          onMouseUp={handleMouseUp}
          className={styles.max}
          value={max}
          min="0"
          max="50"
          step="1"
        />
      </div>

      <div className={styles.stock}>
        <p id="min-value">{min}</p>
        <p id="max-value">{max}</p>
      </div>
    </div>
  );
};

export default StockSlider;
