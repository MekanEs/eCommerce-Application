import React from 'react';
import styles from './productCard.module.scss';

import { productType } from '../../../../types/catalogTypes';
import { useNavigate } from 'react-router-dom';
import Price from './price';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import {
  addProductUser,
  addProductAnonym,
} from '../../../../store/basket/basketSlice';

type productTypeProps = { product: productType };

const ProductCard: React.FC<productTypeProps> = ({ product }) => {
  const attributes = ['Frame material', 'Wheel size', 'Stock'];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const basket = useAppSelector((state) => state.basket.basket);
  const basketStatus = useAppSelector((state) => state.basket.status);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const addProduct = (
    basketId: string,
    productId: string,
    version: number,
  ): void => {
    if (isAuth) {
      console.log('user');
      dispatch(
        addProductUser({
          CartId: basketId,
          productID: productId,
          version: version,
        }),
      );
    } else {
      console.log('anonym');
      dispatch(
        addProductAnonym({
          CartId: basketId,
          productID: productId,
          version: version,
        }),
      );
    }
  };
  return (
    <div
      onClick={(): void => {
        navigate(`/catalog/${product.key}`);
      }}
      key={product.id}
    >
      <div key={product.id} className={styles.product_cart}>
        <div className={styles.productName}>{product.name}</div>

        <img src={product.images && product.images[0]} alt="product image" />

        <div className={styles.attributes}>
          <span>
            {product.categories &&
              product.categories.map((el) => el.name).join('>')}
          </span>
          {product.atributes?.map((attribute, index) => (
            <div key={index}>
              <span>{attributes[index]}</span>: <span>{attribute.value}</span>
            </div>
          ))}
        </div>
        <Price price={product.price} />
        <button
          onClick={(e): void => {
            e.stopPropagation();

            if (basket) {
              addProduct(basket.id, product.id, basket.version);
            }
          }}
          disabled={
            product.atributes &&
            product.atributes[2].value === 0 &&
            basketStatus === 'fullfilled'
              ? true
              : false
          }
          className={styles.addToCart}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
