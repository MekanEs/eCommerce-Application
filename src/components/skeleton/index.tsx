import ContentLoader from 'react-content-loader';

interface SkeletonTextProps {
  variant: 'text';
}

interface SkeletonShapeProps {
  variant: 'rect' | 'circle';
  width: number;
  height: number;
}

type SkeletonProps = SkeletonTextProps | SkeletonShapeProps;

const Skeleton = (props: SkeletonProps) => (
  <ContentLoader
    speed={2}
    width={290}
    height={500}
    viewBox="0 0 290 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="4" height="500" />
    <rect x="0" y="0" rx="0" ry="0" width="290" height="4" />
    <rect x="286" y="0" rx="0" ry="0" width="4" height="500" />
    <rect x="0" y="496" rx="0" ry="0" width="290" height="4" />
    <rect x="29" y="14" rx="0" ry="0" width="232" height="40" />
    <rect x="10" y="64" rx="0" ry="0" width="270" height="171" />
    <rect x="55" y="245" rx="0" ry="0" width="180" height="105" />
    <rect x="15" y="366" rx="0" ry="0" width="260" height="48" />
    <rect x="15" y="426" rx="0" ry="0" width="260" height="48" />
  </ContentLoader>
);

export default Skeleton;
