import React from 'react';
import styles from './product.module.scss';
import createButton from '../../utils/helpers/functions/createButton';
import product from './product.json';

// eslint-disable-next-line max-lines-per-function
const Product: React.FC = (): JSX.Element => {
  const productName = product.masterData.current.name['en-US'];
  const productCategory =
    product.masterData.current.categories[0].obj.name['en-US'];
  const frameMaterial =
    product.masterData.staged.masterVariant.attributes[0].value;
  const wheelSize = product.masterData.staged.masterVariant.attributes[1].value;
  const stock = product.masterData.staged.masterVariant.attributes[2].value;

  const productDescription = product.masterData.current.description['en-US'];
  const productImages = product.masterData.current.masterVariant.images.map(
    (image) => image.url,
  );
  const productPrice =
    product.masterData.current.masterVariant.prices[0].value.centAmount;
  const formattedPrice = (productPrice / 100).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className={styles.container}>
      <div className={styles.general}>
        <div className={styles['general-info']}>
          <h2>{productName}</h2>
          <div className={styles.price}>
            <p className={styles['subtitle']}>Price</p>
            <p>$ {formattedPrice}</p>
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
          <img src={productImages[0]} alt="" />
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

export default Product;
