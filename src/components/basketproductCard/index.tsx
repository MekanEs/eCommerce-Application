import React from 'react';
import { Cart, LineItem } from '@commercetools/platform-sdk';
import styles from './basketProdyuctCard.module.scss';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeLineItem } from '../../store/basket/basketSlice';
import closeIcon from '../../assets/img/svg/closeIcon.svg';
import CartPrice from './price';
import ProductAttributes from './attributes';
import Quantity from './quantity';

type basketProductCardTypeProps = {
  el: LineItem;
  basket: Cart;
  key: number;
};

const BasketProductCard: React.FC<basketProductCardTypeProps> = ({
  el,
  basket,
  key,
}) => {
  const dispatch = useAppDispatch();
  const handleClick = (): void => {
    dispatch(
      removeLineItem({
        CartId: basket.id,
        lineItemID: [el],
        version: basket.version,
      }),
    );
  };
  return (
    <div key={key} className={styles.productCard}>
      <div className={styles.image}>
        {el.variant.images && (
          <img src={el.variant.images[0].url} alt="product image" />
        )}
      </div>
      <div className={styles.info}>
        <p className={styles.productName}>{el.name['en-US']}</p>
        <ProductAttributes product={el} />
        <Quantity key={key} cart={basket} lineItem={el} />
        <CartPrice lineItem={el} />
      </div>
      <button className={styles.removeBtn} onClick={handleClick}>
        <img src={closeIcon} alt="close" />
      </button>
    </div>
  );
};

export default BasketProductCard;
