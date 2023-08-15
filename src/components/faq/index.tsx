import React from 'react';
import styles from './faq.module.scss';
import Question from './question';

const Faq: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h2>faq</h2>
        <p>
          Explore our extensive list of frequently asked questions, providing
          answers to common queries regarding bikes and cycling accessories.
        </p>
      </div>
      <div className={styles.questions_container}>
        <Question header="What are the River City Bicycles store and holiday hours?">
          Normal store hours are: Monday - Friday 10:00am - 6:00pm, Saturday
          10:00am - 5:00pm, Sunday noon-5:00pm
        </Question>
        <Question header="Do I need to wear a mask?">
          Masks are recommended but not required for both staff and customers.
        </Question>
        <Question header="Do I need to make an appointment for service?">
          No. However, we do encourage appointments to help cut down on any
          potential wait time.
        </Question>
        <Question header="How do I find the right bike?">
          We're here to help, both online and in store. Contact us with any
          questions.
        </Question>
        <Question header="Can I test ride a bike?">
          Yes. You can test ride bikes. Of our stores have test tracks with
          rubberized floors.
        </Question>
        <Question header="Do you buy used bikes or offer trade-ins?">
          We do not. Resale values will be much higher than what we would offer
          for trade-in.
        </Question>
      </div>
    </div>
  );
};

export default Faq;
