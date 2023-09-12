import React from 'react';

type tagPricePropsType = {
  price: string;
  discountPrice: string | undefined;
  styles: {
    readonly [key: string]: string;
  };
};
const TagPrice: React.FC<tagPricePropsType> = ({
  price,
  discountPrice,
  styles,
}) => {
  return discountPrice ? (
    <>
      <p className={styles.discount}>$ {price}</p>
      <p>{'$ ' + discountPrice}</p>
    </>
  ) : (
    <p>$ {price}</p>
  );
};

export default TagPrice;
