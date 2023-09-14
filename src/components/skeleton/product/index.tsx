import ContentLoader from 'react-content-loader';
import styles from './product.module.scss';

const SkeletonProduct = (): JSX.Element => (
  <ContentLoader
    className={styles['container']}
    speed={2}
    width={1098}
    height={744}
    viewBox="0 0 1098 744"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="4" height="744" />
    <rect x="0" y="0" rx="3" ry="3" width="1098" height="4" />
    <rect x="1094" y="0" rx="3" ry="3" width="4" height="744" />
    <rect x="0" y="740" rx="3" ry="3" width="1098" height="4" />
    <rect x="30" y="30" rx="3" ry="3" width="259" height="490" />
    <rect x="309" y="30" rx="3" ry="3" width="758" height="470" />
    <rect x="30" y="535" rx="3" ry="3" width="1038" height="99" />
    <rect x="30" y="664" rx="3" ry="3" width="320" height="40" />
  </ContentLoader>
);

export const SkeletonProductMini = (): JSX.Element => (
  <ContentLoader
    className={styles['container']}
    speed={2}
    width={740}
    height={1147}
    viewBox="0 0 740 1147"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="4" height="1147" />
    <rect x="0" y="0" rx="3" ry="3" width="740" height="4" />
    <rect x="736" y="0" rx="3" ry="3" width="4" height="1147" />
    <rect x="0" y="1143" rx="3" ry="3" width="740" height="4" />
    <rect x="123" y="30" rx="0" ry="0" width="494" height="450" />
    <rect x="30" y="490" rx="0" ry="0" width="680" height="423" />
    <rect x="30" y="923" rx="0" ry="0" width="680" height="114" />
    <rect x="210" y="1067" rx="0" ry="0" width="320" height="40" />
  </ContentLoader>
);

export default SkeletonProduct;
