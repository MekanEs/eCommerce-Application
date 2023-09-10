import React, { useEffect } from 'react';
import Banner from '../../components/banner';
import Advantages from '../../components/advantages';
import GoToCatalog from '../../components/goToCatalog';
import Faq from '../../components/faq';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { getDiscounts } from '../../store/discount/discount.slice';
import { DiscountBanner } from '../../components';
import { getBasket, getBasketUser } from '../../store/basket/basketSlice';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  useEffect(() => {
    dispatch(getDiscounts());
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      dispatch(getBasketUser());
    } else {
      dispatch(getBasket());
    }
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
