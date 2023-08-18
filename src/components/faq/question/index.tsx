import React from 'react';

import styles from './question.module.scss';
import question_icon from '../../../assets/img/svg/question_icon.svg';

const Question: React.FC<{ header: string; children: string }> = ({
  header,
  children,
}) => {
  return (
    <div className={styles.container}>
      <img src={question_icon} alt="questin icon" />
      <div className={styles.textContent}>
        <h5>{header}</h5>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Question;
