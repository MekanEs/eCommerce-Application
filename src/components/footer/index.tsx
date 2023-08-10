import React from 'react';

import styles from './footer.module.scss';
import rss_logo from '../../assets/rss_logo.svg';
import gh_logo from '../../assets/github_logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <a href="">
        <img
          className={styles.rss_logo}
          src={rss_logo}
          alt="rolling scopes school"
        />
      </a>

      <p className={styles.year}>2023</p>
      <div className={styles.gh_container}>
        <a href="">
          {' '}
          <img className={styles.gh_logo} src={gh_logo} alt="github" />
        </a>
        <a href="">
          {' '}
          <img className={styles.gh_logo} src={gh_logo} alt="github" />
        </a>
        <a href="">
          {' '}
          <img className={styles.gh_logo} src={gh_logo} alt="github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
