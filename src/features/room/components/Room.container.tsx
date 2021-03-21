import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { RootDispatch, useTypedSelector } from 'store';
import { playNewGame, addPlayer, removePlayer } from 'features/room/roomSlice';
import Room from './Room';

export default function RoomContainer() {
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

  const name = useTypedSelector(({ room }) => room.name);
  const players = useTypedSelector(({ room }) => room.players);
  const winner = useTypedSelector(({ room }) => room.winner);

  return (
    <Room
      name={name}
      players={players}
      winner={winner}
      onDeal={handleDeal}
      onAddPlayer={handleAddPlayer}
      onRemovePlayer={handleRemovePlayer}
    />
  );
}
