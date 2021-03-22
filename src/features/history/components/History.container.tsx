import React from 'react';
import { useSelector } from 'react-redux';

import History from './History';

export default function HistoryContainer() {
  const games = (useSelector as RootTypedUseSelectorHook)(({ history }) => history.games);

  return <History games={games} />;
}
