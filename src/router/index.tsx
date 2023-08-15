import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { About, Login, Main, PageNotFound, Registartion } from '../pages';
import { Layout } from '../components/index';
import Catalog from '../pages/catalog';

const isAuth = true;
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="catalog" element={<Catalog />} />
      {isAuth ? (
        <Route>
          <Route path="login" element={<Navigate to="/" replace />} />
          <Route path="registration" element={<Navigate to="/" replace />} />
        </Route>
      ) : (
        <Route>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registartion />} />
        </Route>
      )}

      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registartion />} />

      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);
