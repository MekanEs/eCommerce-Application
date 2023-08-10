import React from 'react';
import Banner from '../../components/banner';
import Advantages from '../../components/advantages';
import GoToCatalog from '../../components/goToCatalog';

const Main: React.FC = () => {
  return (
    <div>
      <Banner />
      <Advantages />
      <GoToCatalog />
    </div>
  );
};

export default Main;
