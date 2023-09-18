import React from 'react';
import styles from './sideBar.module.scss';
import PriceSlider from '../range-slider/price';
import StockSlider from '../range-slider/stock';
import Materials from '../materialCheckbox';
import WheelSize from '../../wheelSizeCheckbox';
import { resetState } from '../../../store/productFilter/productFilter.slice';

import { useAppDispatch } from '../../../hooks/redux-hooks';

type sideBarPropsType = {
  modal: boolean;
  close?: () => void;
  child?: JSX.Element;
};
const SideBar: React.FC<sideBarPropsType> = ({ modal, close, child }) => {
  const dispatch = useAppDispatch();
  const handleClick = (): void => {
    dispatch(resetState());
  };

  return (
    <div className={styles.sideBar}>
      {modal && close ? (
        <div className={styles.upper}>
          <button className={styles.closeButton} onClick={(): void => close()}>
            X
          </button>
          {child}
        </div>
      ) : (
        ''
      )}
      <PriceSlider />
      <StockSlider />
      <Materials />
      <WheelSize />
      <button className={styles.resetButton} onClick={handleClick}>
        reset
      </button>
    </div>
  );
};

export default SideBar;
