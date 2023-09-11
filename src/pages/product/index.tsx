import React, { useEffect } from 'react';
import styles from './product.module.scss';
import { CreateButton } from '../../components/form/createButton/createButton';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  fetchProductData,
  selectProductData,
} from '../../store/product/product.slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import Slider from '../../components/product/slider';
import createTagPrice from '../../components/product/price/tagPrice';
import formatPrice from '../../utils/helpers/formatPrice/formatPrice';

// eslint-disable-next-line max-lines-per-function
const Product: React.FC = (): JSX.Element => {
  const { key } = useParams();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.catalog.products);
  const navigate: NavigateFunction = useNavigate();
  const language = 'en-US';
  let productData = useSelector(selectProductData);
  if (productData && key !== productData.key && key) {
    productData = null;
  }

  useEffect(() => {
    if (!productData && key) {
      dispatch(fetchProductData(key)).then((action) => {
        if (fetchProductData.rejected.match(action)) {
          navigate('/404');
        }
      });
    }
  }, [key, products]);
  const masterData = productData && productData.masterData.current;
  if (
    !masterData ||
    !masterData.masterVariant.attributes ||
    !masterData.description ||
    !masterData.masterVariant.prices ||
    !masterData.masterVariant.images
  ) {
    return <></>;
  }

  const productName = masterData.name[language];
  const productCategory = masterData.categories[0].obj?.name[language];
  const [frameMaterial, wheelSize, stock] = masterData.masterVariant.attributes;
  const productDescription = masterData.description[language];
  const productImages = masterData.masterVariant.images.map(
    (image: { url: string }) => image.url,
  );
  const productPrice = masterData.masterVariant.prices[0].value.centAmount;
  const productDiscountPrice =
    masterData.masterVariant.prices[0].discounted?.value.centAmount;
  const formattedPrice = formatPrice(productPrice, language);

  const formattedDiscountPrice: string | undefined = productDiscountPrice
    ? formatPrice(productDiscountPrice, language)
    : undefined;
  const attributes = ['Category:', 'Frame material:', 'Wheel size:', 'Stock:'];
  const values = [
    productCategory,
    frameMaterial.value,
    wheelSize.value,
    stock.value,
  ];
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
              {attributes.map((el, index) => {
                return (
                  <li key={index} className={styles['list-item']}>
                    <p className={styles['item-title']}>{el}</p>
                    <p className={styles['item-info']}>{values[index]}</p>
                  </li>
                );
              })}
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
      {stock.value < 1 ? (
        <CreateButton
          label={'add to cart'}
          className={styles['button']}
          disabled={true}
        />
      ) : (
        <CreateButton label={'add to cart'} className={styles['button']} />
      )}
    </div>
  );
};

export default Product;
