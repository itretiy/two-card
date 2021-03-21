import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import room from 'features/room/roomSlice';
import history from 'features/history/historySlice';

export const store = configureStore({
  reducer: {
    room,
    history,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
// TODO directly use useDispatch<RootDispatch>() ?
export const useAppDispatch = () => useDispatch<RootDispatch>();
// TODO directly use TypedUseSelectorHook<RootState> ?
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
