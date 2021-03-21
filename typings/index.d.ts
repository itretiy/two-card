import { TypedUseSelectorHook } from 'react-redux';
import store from 'store';

declare global {
  type RootState = ReturnType<typeof store.getState>;
  type RootDispatch = typeof store.dispatch;

  type RootTypedUseSelectorHook = TypedUseSelectorHook<RootState>;
}
