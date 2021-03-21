/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from 'store';
import theme from 'config/theme';
import Layout from 'components/Layout';
import Room from 'features/room/components/Room.container';
import History from 'features/history/components/History.container';
import GlobalStyle from './GlobalStyle';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout side={<History />}>
          <Room />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}
