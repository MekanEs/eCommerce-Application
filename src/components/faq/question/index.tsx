import React from 'react';

import styles from './question.module.scss';
import question_icon from '../../../assets/question_icon.svg';

type questionPropstype = { header: string; children: string };

const Question: React.FC<questionPropstype> = ({ header, children }) => {
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
