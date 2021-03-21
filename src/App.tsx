/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';
import Layout from 'components/Layout';
import Room from 'features/room/components/Room.container';
import History from 'features/history/components/History.container';
import GlobalStyle from './GlobalStyle';

export default function App() {
  return (
    <Provider store={store}>
      <Layout side={<History />}>
        <Room />
      </Layout>
      <GlobalStyle />
    </Provider>
  );
}
