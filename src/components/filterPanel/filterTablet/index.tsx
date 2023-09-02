import React, { useEffect, useState } from 'react';
import styles from '../filterPanel.module.scss';
import Sort from '../../sort';
import SideBar from '../sideBar';
import Search from '../../search';
import { useAppSelector } from '../../../hooks/redux-hooks';
import cx from 'classnames';
import Pagination from '../../pagination';
import filterIcon from '../../../assets/img/svg/filter.svg';

type FilterModalPropsType = {
  child: JSX.Element;
};

const FilterModal: React.FC<FilterModalPropsType> = ({ child }) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isModalContainer, setIsModalContainer] = useState<boolean>(false);
  const state = useAppSelector((state) => state.filter);
  const catalog = useAppSelector((state) => state.catalog);

  useEffect(() => {
    if (isModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
    }
  }, [isModal]);

  const handleOpen = (): void => {
    setIsModal(!isModal);
    setTimeout(() => {
      setIsModalContainer(!isModalContainer);
    }, 300);
  };

  const handleClose = (): void => {
    setIsModalContainer(!isModalContainer);
    setTimeout(() => {
      setIsModal(!isModal);
    }, 300);
  };
  return (
    <div className={styles.filterPanelTablet}>
      <div
        onClick={handleClose}
        className={cx(styles.burger_bg, isModal ? styles.activeBurger : '')}
      >
        <div
          onClick={(e): void => {
            e.stopPropagation();
          }}
          className={cx(
            styles.burgerContainer,
            isModalContainer ? styles.burgerContainerActive : '',
          )}
        >
          <SideBar
            modal={isModal}
            close={handleClose}
            child={
              <div className={styles.filterBlock}>
                <span>Filter</span>
                <img src={filterIcon} alt="filter icon" />
              </div>
            }
          />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.upperPanelTablet}>
          <div className={styles.sort_filter}>
            <Sort />
            <div className={styles.filterBlock} onClick={handleOpen}>
              <span>Filter</span>
              <img src={filterIcon} alt="filter icon" />
            </div>
          </div>

          <Search />
          <div className={styles.total}>
            <span>Total: {catalog.total}</span>
          </div>
        </div>
        {child}
        <Pagination offset={state.offset} total={catalog.total} />
      </div>
    </div>
  );
};

export default FilterModal;
