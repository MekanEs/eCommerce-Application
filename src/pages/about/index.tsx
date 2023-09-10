import React from 'react';
import styles from './about.module.scss';
import AboutGeneralInfo from '../../components/aboutUs/general/generalInfo';
import DeveloperNovikova from '../../components/aboutUs/developers/novikova/novikova';
import DeveloperEsenjanow from '../../components/aboutUs/developers/esenjanow/esenjanow';

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles['page-title']}>our team</h2>
      <AboutGeneralInfo />
      <DeveloperNovikova />
      <DeveloperEsenjanow />
    </div>
  );
};

export default About;
