import React from 'react';
import styles from './about.module.scss';
import AboutGeneralInfo from '../../components/aboutUs/generalInfo';
import DeveloperNovikova from '../../components/aboutUs/developers/novikova';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>our team</h2>
      <AboutGeneralInfo />
      <DeveloperNovikova />
    </div>
  );
};

export default About;
