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
import formatPrice from '../../utils/helpers/formatPrice/formatPrice';
import { isKey } from '../../utils/helpers/isKeyOfObj';
import { TagPrice, Slider } from '../../components';
import SkeletonProduct, {
  SkeletonProductMini,
} from '../../components/skeleton/product';

// eslint-disable-next-line max-lines-per-function
const Product: React.FC = (): JSX.Element => {
  const { key } = useParams();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.catalog.products);
  const navigate: NavigateFunction = useNavigate();
  const sizeWindows = window.innerWidth;
  const language = 'en-US';
  let productData = useSelector(selectProductData);
  if (productData && key !== productData.key && key) {
    productData = null;
  }

  useEffect(() => {
    sizeWindows;
  }, []);

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
    return (
      <div className={styles['container-skeleton']}>
        {sizeWindows > 1000 ? <SkeletonProduct /> : <SkeletonProductMini />}
      </div>
    );
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

  const values = {
    'Category:': productCategory,
    'Frame material:': frameMaterial.value,
    'Wheel size:': wheelSize.value,
    'Stock:': stock.value,
  };

  return (
    <div className={styles.container}>
      <div className={styles.general}>
        <div className={styles['general-info']}>
          <h2>{productName}</h2>
          <div className={styles.price}>
            <p className={styles['subtitle']}>Price</p>
            <TagPrice
              price={formattedPrice}
              discountPrice={formattedDiscountPrice}
              styles={styles}
            />
          </div>
          <div className={styles.info}>
            <p className={styles['subtitle']}>Info</p>
            <ul>
              {Object.keys(values).map((el, index) => {
                if (isKey<typeof values>(el)) {
                  return (
                    <li key={index} className={styles['list-item']}>
                      <p className={styles['item-title']}>{el}</p>
                      <p className={styles['item-info']}>{values[el]}</p>
                    </li>
                  );
                }
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
