import React from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Portfolio from 'modules/portfolio/Portfolio';
import CurrentUser from 'pages/CurrentUser/CurrentUser';

import UsersPage from 'src/pages/UsersPage/UsersPage';

const router = createHashRouter([
  {
    path: '/',
    element: <Portfolio />,
  },
  {
    path: '/users',
    children: [
      { index: true, element: <UsersPage /> },
      {
        path: ':userId',
        element: <CurrentUser />,
      },
    ],
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
