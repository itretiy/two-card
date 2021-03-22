import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HistoryItem } from 'features/history/types';

interface HistoryState {
  games: HistoryItem[];
}

const initialState: HistoryState = {
  games: [],
};

const { reducer, actions } = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistory(state, action: PayloadAction<HistoryItem>) {
      state.games = [action.payload, ...state.games];
    },
  },
});

export const { addHistory } = actions;

export default reducer;
