import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/App/App';
import CssBaseline from '@mui/material/CssBaseline';

const AppComponent = () => (
  <>
    <CssBaseline />
    <App />
  </>
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<AppComponent />);
