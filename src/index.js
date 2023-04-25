import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/Theme';
import { GlobalStyle } from 'utils/GlobalStyles';
import { App } from './components/App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  /* <Provider store={store}> */
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
  /* </Provider> */
  // </React.StrictMode>
);
