export default function createTagPrice(
  price: string,
  discountPrice: string | undefined,
  styles: {
    readonly [key: string]: string;
  },
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
