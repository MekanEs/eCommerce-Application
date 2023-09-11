import { useLocation } from 'react-router-dom';

const routes = [
  /^\/$/,
  /\/about/,
  /\/catalog/,
  /\/registration/,
  /\/login/,
  /\/account/,
  /\/cart/,
  /\/catalog\/\w\d/,
];

function isNotFound(): boolean {
  const path: string = useLocation().pathname;
  return routes.every((el) => !el.test(path));
}
export default isNotFound;
