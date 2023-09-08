import React, { useEffect } from 'react';
import Banner from '../../components/banner';
import Advantages from '../../components/advantages';
import GoToCatalog from '../../components/goToCatalog';
import Faq from '../../components/faq';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { getDiscounts } from '../../store/discount/discount.slice';
import { DiscountBanner } from '../../components';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDiscounts());
  }, [dispatch]);

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
