import React, { useEffect } from 'react';
import styles from './product.module.scss';
import createButton from '../../utils/helpers/functions/createButton';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  fetchProductData,
  selectProductData,
} from '../../store/product/product.slice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Slider from './slider';

// eslint-disable-next-line max-lines-per-function
const Product: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const productData = useSelector(selectProductData);
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (!productData && id) {
      dispatch(fetchProductData(id)).then((action) => {
        if (fetchProductData.rejected.match(action)) {
          navigate('/404');
        }
      });
    }
  });

  if (
    !productData ||
    !productData.masterData.current.masterVariant.attributes ||
    !productData.masterData.current.description ||
    !productData.masterData.current.masterVariant.prices ||
    !productData.masterData.current.masterVariant.images
  ) {
    return <></>;
  }

  const productName = productData.masterData.current.name['en-US'];
  const productCategory =
    productData.masterData.current.categories[0].obj?.name['en-US'];
  const frameMaterial =
    productData.masterData.current.masterVariant.attributes[0].value;
  const wheelSize =
    productData.masterData.current.masterVariant.attributes[1].value;
  const stock =
    productData.masterData.current.masterVariant.attributes[2].value;
  const productDescription =
    productData.masterData.current.description['en-US'];
  const productImages = productData.masterData.current.masterVariant.images.map(
    (image: { url: string }) => image.url,
  );
  const productPrice =
    productData.masterData.current.masterVariant.prices[0].value.centAmount;
  const productDiscountPrice =
    productData.masterData.current.masterVariant.prices[0].discounted?.value
      .centAmount;
  const formattedPrice = formatPrice(productPrice);

  let formattedDiscountPrice;
  if (productDiscountPrice) {
    formattedDiscountPrice = formatPrice(productDiscountPrice);
  }

  return (
    <div className={styles.container}>
      <div className={styles.general}>
        <div className={styles['general-info']}>
          <h2>{productName}</h2>
          <div className={styles.price}>
            <p className={styles['subtitle']}>Price</p>
            {createTagPrice(formattedPrice, formattedDiscountPrice)}
          </div>
          <div className={styles.info}>
            <p className={styles['subtitle']}>Info</p>
            <ul>
              <li className={styles['list-item']}>
                <p className={styles['item-title']}>Category:</p>
                <p className={styles['item-info']}>{productCategory}</p>
              </li>
              <li className={styles['list-item']}>
                <p className={styles['item-title']}>Frame material:</p>
                <p className={styles['item-info']}>{frameMaterial}</p>
              </li>
              <li className={styles['list-item']}>
                <p className={styles['item-title']}>Wheel size:</p>
                <p className={styles['item-info']}>{wheelSize}</p>
              </li>
              <li className={styles['list-item']}>
                <p className={styles['item-title']}>Stock:</p>
                <p className={styles['item-info']}>{stock}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.slider}>
          <Slider images={productImages} />
        </div>
      </div>
      <div className={styles.description}>
        <p className={styles['subtitle']}>Description</p>
        <p>{productDescription}</p>
      </div>
      {createButton('add to cart')}
    </div>
  );
};

function formatPrice(price: number): string {
  return (price / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function createTagPrice(
  price: string,
  discountPrice: string | undefined,
): JSX.Element {
  if (discountPrice) {
    return (
      <>
        <p className={styles.discount}>$ {price}</p>
        <p>{'$ ' + discountPrice}</p>
      </>
    );
  } else {
    return <p>$ {price}</p>;
  }
}

export default Product;
