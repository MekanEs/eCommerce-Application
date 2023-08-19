import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { About, Login, Main, PageNotFound, Registration } from '../pages';
import { Layout } from '../components/index';
import Catalog from '../pages/catalog';
import RequireAuth from './requireAuth/requiereAuth';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="catalog" element={<Catalog />} />
      <Route element={<RequireAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);
