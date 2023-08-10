import React from 'react';
import AdvantegeCart from './carts';
import styles from './advantages.module.scss';
import cartImage1 from '../../assets/advantages-1.svg';
import cartImage2 from '../../assets/advantages-2.svg';
import cartImage3 from '../../assets/advantages-3.svg';
import { NavLink } from 'react-router-dom';

const Advantages: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h2>our advantages</h2>
        <p>
          Veros is a trusted company. Our online store offers you a wide range
          of bicycles, as well as a high level of service and fast delivery of
          your purchase to your home at a convenient time for you!
        </p>
      </div>

      <div className={styles.carts_container}>
        <AdvantegeCart imagePath={cartImage1} header="Company guarantee">
          We provide a manufacturer's warranty on all products sold. You don't
          have to go to a remote service center like some other bike shops. All
          questions are considered where you bought the goods.
        </AdvantegeCart>
        <AdvantegeCart imagePath={cartImage2} header="Quality service">
          Most of our staff and all of the Senior Consultant Adjusters are
          experienced riders, so in addition to the standard advice, you can get
          a lot of practical advice on choosing and repairing bikes.
        </AdvantegeCart>
        <AdvantegeCart imagePath={cartImage3} header="High-tech bike workshop">
          Our workshop is equipped with modern high-tech bicycle equipment
          (Pedros, IceToolz). Repair is carried out at a high professional
          level, each operation is carried out very carefully and efficiently.
        </AdvantegeCart>
      </div>
      <button>
        <NavLink to="catalog">go to catalog</NavLink>
      </button>
    </div>
  );
};

export default Advantages;
