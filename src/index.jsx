import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyles from './globalStyles';

const AppComponent = () => (
  <>
    <GlobalStyles />
    <App />
  </>
);

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<AppComponent />);
