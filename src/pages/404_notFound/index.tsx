import React from 'react';

import styles from './404_notFound.module.scss';
import image from '../../assets/404-image.png';
import GoToCatalog from '../../components/goToCatalog';

const PageNotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={image} alt="404" />

      <div className={styles.textContent}>
        <span>ooops!</span>
        <span>There are no bicicles here :(</span>
      </div>
      <GoToCatalog />
    </div>
  );
};

export default PageNotFound;
