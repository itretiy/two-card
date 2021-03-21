import { configureStore } from '@reduxjs/toolkit';

import room from 'features/room/roomSlice';
import history from 'features/history/historySlice';

export const store = configureStore({
  reducer: {
    room,
    history,
  },
});

export default store;
