import { useLocation } from 'react-router-dom';

const routes = ['/', '/about', '/catalog', '/registration', '/login'];
function isNotFound(): boolean {
  const path = useLocation().pathname;
  return routes.every((el) => path !== el);
}
export default isNotFound;
