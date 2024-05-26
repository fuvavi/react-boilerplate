import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('../pages/home'));
const Login = React.lazy(() => import('../pages/login'));
const Admin = React.lazy(() => import('../pages/admin'));

export const routes: PathRouteProps[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export const privateRoutes: PathRouteProps[] = [
  {
    path: '/admin',
    element: <Admin />,
  },
];
