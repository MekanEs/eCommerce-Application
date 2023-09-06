import React from 'react';
import banner from './../../assets/img/png/banner_image.png';
import styles from './banner.module.scss';

const Banner: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>bicycle for every road</h2>

      <img src={banner} alt="banner" draggable="false" />
    </div>
  );
};

export default Banner;
