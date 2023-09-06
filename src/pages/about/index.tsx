import React from 'react';
import styles from './about.module.scss';
import AboutGeneralInfo from '../../components/aboutUs/generalInfo';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>our team</h2>
      <AboutGeneralInfo />
    </div>
  );
};

export default About;
