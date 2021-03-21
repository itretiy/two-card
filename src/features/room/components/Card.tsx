import React from 'react';

export interface RoomProps {
  suit: string;
  rank: string;
  hasPair?: boolean;
}

export default function Card({ suit, rank, hasPair = false }: RoomProps) {
  const card = `${suit}_${rank}`;

  return (
    <img
      style={{ border: hasPair ? '5px solid' : 'none' }}
      // TODO move to .env
      src={`http://h3h.net/images/cards/${card}.svg`}
      alt={card}
    />
  );
}
