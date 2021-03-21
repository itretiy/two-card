import React from 'react';

import { Card } from 'features/room/types';

export interface PlayerProps {
  name: string;
  cards: Card[];
}

export default function Player({ name, cards = [] }: PlayerProps) {
  return (
    <div>
      <div>player: {name}</div>
      <div>
        cards:{' '}
        {cards.map((card) => (
          <span key={`${card.rank}-${card.suit}`}>
            {card.rank}-{card.suit}{' '}
          </span>
        ))}
      </div>
    </div>
  );
}
