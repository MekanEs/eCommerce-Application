import React from 'react';

import styles from './footer.module.scss';
import rss_logo from '../../assets/rss_logo.svg';
import gh_logo from '../../assets/github_logo.svg';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.container}>
        <a target="_blank" href="https://rs.school">
          <img
            className={styles.rss_logo}
            src={rss_logo}
            alt="rolling scopes school"
          />
        </a>

        <p className={styles.year}>2023</p>
        <div className={styles.gh_container}>
          <a target="_blank" href="https://github.com/sergpet93">
            {' '}
            <img className={styles.gh_logo} src={gh_logo} alt="github" />
          </a>
          <a target="_blank" href="https://github.com/kotangenss">
            {' '}
            <img className={styles.gh_logo} src={gh_logo} alt="github" />
          </a>
          <a target="_blank" href="https://github.com/MekanEs">
            {' '}
            <img className={styles.gh_logo} src={gh_logo} alt="github" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
