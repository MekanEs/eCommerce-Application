import React, { useEffect } from 'react';
import styles from './product.module.scss';
import createButton from '../../components/form/createButton/createButton';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  fetchProductData,
  selectProductData,
} from '../../store/product/product.slice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Slider from './slider';
import createTagPrice from '../../components/product/tagPrice';

// eslint-disable-next-line max-lines-per-function
const Product: React.FC = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();
  const language = 'en-US';
  let productData = useSelector(selectProductData);

  if (productData && id !== productData.id && id) {
    productData = null;
  }

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

  const productName = productData.masterData.current.name[language];
  const productCategory =
    productData.masterData.current.categories[0].obj?.name[language];
  const frameMaterial =
    productData.masterData.current.masterVariant.attributes[0].value;
  const wheelSize =
    productData.masterData.current.masterVariant.attributes[1].value;
  const stock =
    productData.masterData.current.masterVariant.attributes[2].value;
  const productDescription =
    productData.masterData.current.description[language];
  const productImages = productData.masterData.current.masterVariant.images.map(
    (image: { url: string }) => image.url,
  );
  const productPrice =
    productData.masterData.current.masterVariant.prices[0].value.centAmount;
  const productDiscountPrice =
    productData.masterData.current.masterVariant.prices[0].discounted?.value
      .centAmount;
  const formattedPrice = formatPrice(productPrice, language);

  let formattedDiscountPrice;
  if (productDiscountPrice) {
    formattedDiscountPrice = formatPrice(productDiscountPrice, language);
  }

  return (
    <div className={styles.container}>
      <div className={styles.general}>
        <div className={styles['general-info']}>
          <h2>{productName}</h2>
          <div className={styles.price}>
            <p className={styles['subtitle']}>Price</p>
            {createTagPrice(formattedPrice, formattedDiscountPrice, styles)}
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
      {stock < 1
        ? createButton('add to cart', styles['button'], true)
        : createButton('add to cart', styles['button'])}
    </div>
  );
};

function formatPrice(price: number, language: string): string {
  return (price / 100).toLocaleString(language, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default Product;
