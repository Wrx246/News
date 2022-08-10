import React from 'react';
import ReactDOM from 'react-dom/client';
import styled, { createGlobalStyle } from 'styled-components';
import App from './App';

const Global = createGlobalStyle`
@font-face {
  font-family: "oswald";
  src: url(./assets/fonts/oswald/oswald-regular.woff2);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'oswald';
  font-style: normal;
  font-weight: 400;
}
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Global />
    <App />
  </>
);
