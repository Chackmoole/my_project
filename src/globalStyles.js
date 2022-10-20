import { createGlobalStyle } from 'styled-components';

import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset};
  body,
  html {
    font-family: Arial sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 1.2;
    box-sizing: border-box;
  };

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  };

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s, opacity 0.3s;
    cursor: pointer;
    outline: 0;
  };

  textarea {
    resize: none;
  };

  img {
    max-width: 100%;
    height: auto;
  };
`;

export default GlobalStyles;
