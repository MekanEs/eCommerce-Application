/* eslint-disable max-lines-per-function */
import React, { ChangeEventHandler, useState } from 'react';
import styles from './range-slider.module.scss';
const PriceSlider: React.FC = () => {
  const [min, setMin] = useState<number>(200);
  const [max, setMax] = useState<number>(9000);

  function validateRange(): void {
    if (min > max) {
      setMin(0);
      setMax(10000);
    }
  }
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.id === 'min') {
      setMin(+event.target.value);
    } else {
      setMax(+event.target.value);
    }

    validateRange();
  };
  return (
    <div className={styles.card}>
      <h3>Price</h3>
      <div className={styles.range}>
        <input
          id="min"
          type="range"
          onChange={handleChange}
          className={styles.min}
          value={min}
          min="0"
          max="10000"
          step="100"
        />
        <input
          id="max"
          type="range"
          onChange={handleChange}
          className={styles.max}
          value={max}
          min="0"
          max="10000"
          step="100"
        />
      </div>
      <div className={styles.price}>
        <p id="min-value">${min}</p>

        <p id="max-value">${max}</p>
      </div>
    </div>
  );
};

export default PriceSlider;
