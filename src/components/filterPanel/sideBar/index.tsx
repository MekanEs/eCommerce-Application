import React from 'react';
import styles from './sideBar.module.scss';
import PriceSlider from '../../range-slider/price';
import StockSlider from '../../range-slider/stock';
import { Materials } from '../..';
import WheelSize from '../../wheelSizeCheckbox';
import { resetState } from '../../../store/productFilter/productFilter.slice';
import { useDispatch } from 'react-redux';

type sideBarPropsType = {
  modal: boolean;
  close?: () => void;
  child?: JSX.Element;
};
const SideBar: React.FC<sideBarPropsType> = ({ modal, close, child }) => {
  const dispatch = useDispatch();
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
