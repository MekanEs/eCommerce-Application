import React from 'react';
import Banner from '../../components/banner';
import Advantages from '../../components/advantages';
import GoToCatalog from '../../components/goToCatalog';
import Faq from '../../components/faq';
import { DiscountBanner } from '../../components';

const Main: React.FC = () => {
  return (
    <div>
      <Banner />
      <Advantages />
      <DiscountBanner />
      <GoToCatalog />
      <Faq />
    </div>
  );
};

export default Main;
