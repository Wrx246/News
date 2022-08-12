import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App';

const Global = createGlobalStyle`
@font-face {
  font-family: "helvetica";
  src: url(./assets/fonts/oswald/oswald-regular.woff2);
}
@font-face {
  font-family: "sofia";
  src: url(./assets/fonts/sofiaPro/SofiaProRegular.woff2);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'helvetica';
  font-style: normal;
  font-weight: 400;
}
body {
  height: 100%;
}
`;

const theme = {
  font: {
    primary: 'helvetica',
    secondary: 'sofia',
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
