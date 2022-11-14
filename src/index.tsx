import React from 'react';
import { createRoot } from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';

import App from 'components/App/App';

const AppComponent = () => (
  <>
    <CssBaseline />
    <App />
  </>
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<AppComponent />);
