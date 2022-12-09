import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import MainPage from 'src/pages/MainPage/MainPage';
import UsersPage from 'src/pages/UsersPage/UsersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/users',
    element: <UsersPage />,
  },
]);

const AppComponent = () => (
  <>
    <CssBaseline />
    <RouterProvider router={router} />
  </>
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<AppComponent />);
