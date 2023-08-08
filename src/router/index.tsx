import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { About, Login, Main, PageNotFound, Registartion } from '../pages';
import { Layout } from '../components/index';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registartion />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);
