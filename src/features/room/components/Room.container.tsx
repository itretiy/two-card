import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import environment from 'config/environment';
import { playNewGame, addPlayer, removePlayer } from 'features/room/roomSlice';
import Room from './Room';

export default function RoomContainer() {
  const name = (useSelector as RootTypedUseSelectorHook)(({ room }) => room.name);
  const players = (useSelector as RootTypedUseSelectorHook)(({ room }) => room.players);
  const winner = (useSelector as RootTypedUseSelectorHook)(({ room }) => room.winner);

  const dispatch = useDispatch<RootDispatch>();
  useEffect(() => {
    dispatch(playNewGame());
  }, [dispatch]);

  const handleDeal = useCallback(() => {
    dispatch(playNewGame());
  }, [dispatch]);
  const handleAddPlayer = useCallback(() => {
    dispatch(addPlayer());
  }, [dispatch]);
  const handleRemovePlayer = useCallback(() => {
    dispatch(removePlayer());
  }, [dispatch]);

  return (
    <Room
      name={name}
      players={players}
      winner={winner}
      onDeal={handleDeal}
      canAdd={players.length < environment.maxPlayers}
      onAddPlayer={handleAddPlayer}
      canRemove={players.length > environment.minPlayers}
      onRemovePlayer={handleRemovePlayer}
    />
  );
}
