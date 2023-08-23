import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import {
  About,
  Login,
  Main,
  PageNotFound,
  Account,
  Registration,
} from '../pages';
import { Layout } from '../components/index';
import Catalog from '../pages/catalog';
import RequireAuth from './requireAuth/requiereAuth';
import Product from '../pages/product';
import CheckAccountAuth from './accountAuth/accountAuth';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="catalog/:id" element={<Product />} />
      <Route element={<RequireAuth />}>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
      <Route element={<CheckAccountAuth />}>
        <Route path="account" element={<Account />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);
