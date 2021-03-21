import React from 'react';

import { useTypedSelector } from 'store';
import History from './History';

export default function HistoryContainer() {
  const games = useTypedSelector(({ history }) => history.games);

  return <History games={games} />;
}
