import { TypedUseSelectorHook } from 'react-redux';

import store from 'store';
import { Card as CardModel, Player as PlayerModel, Room as RoomModel } from 'models';

declare global {
  // redux types
  type RootState = ReturnType<typeof store.getState>;
  type RootDispatch = typeof store.dispatch;

  type RootTypedUseSelectorHook = TypedUseSelectorHook<RootState>;

  // app types
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
