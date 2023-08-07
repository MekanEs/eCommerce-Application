import {
  Route,
  RouteObject,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import { About, Login, Main, PageNotFound, Registartion } from '../../pages';
import { Layout } from '../../App';

const Root: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registartion />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
const routes: RouteObject[] = [{ path: '*', Component: Root }];
export const router = createBrowserRouter(routes);
