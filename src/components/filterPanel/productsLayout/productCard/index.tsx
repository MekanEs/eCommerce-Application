import React from 'react';
import styles from './productCard.module.scss';

import { productType } from '../../../../types/catalogTypes';
import { useNavigate } from 'react-router-dom';
import Price from './price';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import {
  addProduct,
  removeLineItem,
} from '../../../../store/basket/basketSlice';
import { isKey } from '../../../../utils/helpers/isKeyOfObj';
import classNames from 'classnames';
import { LineItem } from '@commercetools/platform-sdk';
import CartBtn from './buttonCart';

type productTypeProps = { product: productType };

// eslint-disable-next-line max-lines-per-function
const ProductCard: React.FC<productTypeProps> = ({ product }) => {
  const attributes = {
    'Frame material:': product.atributes?.filter(
      (el) => el.name === 'frameMaterial',
    )[0].value,
    'Wheel size:': product.atributes?.filter((el) => el.name === 'wheelSize')[0]
      .value,
    'Stock:': product.atributes?.filter((el) => el.name === 'stock')[0].value,
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const basket = useAppSelector((state) => state.basket.basket);
  let ProductItem: undefined | LineItem;
  let flagBasket = false;
  basket &&
    basket.lineItems.map((elem) => {
      if (elem.productId === product.id) {
        flagBasket = true;
        ProductItem = elem;
      }
    });

  const addLineItem = (
    basketId: string,
    productId: string,
    version: number,
  ): void => {
    dispatch(
      addProduct({
        CartId: basketId,
        productID: productId,
        version: version,
      }),
    );
  };
  return (
    <div
      onClick={(): void => {
        navigate(`/catalog/${product.key}`);
      }}
      key={product.id}
      className={styles.product_container}
    >
      <div key={product.id} className={styles.product_cart}>
        <div className={styles.productName}>{product.name}</div>

        <img src={product.images && product.images[0]} alt="product image" />

        <div className={styles.attributes}>
          <span>
            {product.categories &&
              product.categories.map((el) => el.name).join('>')}
          </span>
          <ul>
            {Object.keys(attributes).map((el, index) => {
              if (isKey<typeof attributes>(el)) {
                return (
                  <li key={index}>
                    <p className={styles.name}>{el}</p>
                    <p>{attributes[el]}</p>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <Price price={product.price} />
        {attributes['Stock:'] === 0 ? (
          <CartBtn
            label={'sold out'}
            className={classNames(styles['addToCart'], styles['soldOut'])}
            disabled={true}
          />
        ) : flagBasket ? (
          <CartBtn
            label={'drop from cart'}
            disabled={false}
            className={classNames(styles['addToCart'], styles['removeToCart'])}
            onClick={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
            ): void => {
              e.stopPropagation();
              if (basket) {
                if (ProductItem)
                  dispatch(
                    removeLineItem({
                      CartId: basket.id,
                      lineItemID: [ProductItem],
                      version: basket.version,
                    }),
                  );
              }
            }}
          />
        ) : (
          <CartBtn
            label={'add to cart'}
            className={styles['addToCart']}
            onClick={(e): void => {
              e.stopPropagation();

              if (basket) {
                addLineItem(basket.id, product.id, basket.version);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
