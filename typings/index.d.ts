import { TypedUseSelectorHook } from 'react-redux';

import store from 'store';
import CardModel from 'models/Card';
import PlayerModel from 'models/Player';
import RoomModel from 'models/Room';

declare global {
  // common react-redux types
  type RootState = ReturnType<typeof store.getState>;
  type RootDispatch = typeof store.dispatch;
  type RootTypedUseSelectorHook = TypedUseSelectorHook<RootState>;

  // common app types
  type Card = Pick<CardModel, 'suit' | 'rank'> & {
    hasPair?: boolean;
  };
  type Player = Pick<PlayerModel, 'id' | 'name'> & {
    cards: Card[];
  };
  type Room = Pick<RoomModel, 'id' | 'name'> & {
    players: Player[];
  };
}
