import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootDispatch } from 'store';
import { Player, Room } from './types';
import gameService from 'services/gameService';
import { addHistory } from 'features/history/historySlice';

interface RoomState {
  name: string;
  players: Player[];
  winner?: Player;
}

const initialState: RoomState = {
  name: '',
  players: [],
};

const { reducer, actions } = createSlice({
  name: 'room',
  initialState,
  reducers: {
    createRoom(state, action: PayloadAction<Room>) {
      state.name = action.payload.name;
      state.players = action.payload.players;
      state.winner = undefined;
    },
    setWinner(state, action: PayloadAction<Player>) {
      state.winner = action.payload;
    },
    setPlayers(state, action: PayloadAction<Player[]>) {
      state.players = action.payload;
    },
    pushPlayer(state, action: PayloadAction<Player>) {
      state.players.push(action.payload);
    },
    popPlayer(state) {
      state.players.pop();
    },
  },
});

export const { createRoom, setWinner, setPlayers, pushPlayer, popPlayer } = actions;

export const playNewGame = () => (dispatch: RootDispatch) => {
  const room = gameService.createRoom();
  dispatch(createRoom(room));

  const players = gameService.deal();
  dispatch(setPlayers(players));

  const winner = gameService.getWinner();
  if (winner) {
    dispatch(setWinner(winner));
  }

  dispatch(
    addHistory({
      roomId: room.id,
      roomName: room.name,
      winner,
    }),
  );
};

export const addPlayer = () => (dispatch: RootDispatch) => {
  const player = gameService.addPlayer();

  dispatch(pushPlayer(player));
};

export const removePlayer = () => (dispatch: RootDispatch) => {
  gameService.removePlayer();

  dispatch(popPlayer());
};

export default reducer;
