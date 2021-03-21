import React from 'react';

import { Card as CardType } from 'features/room/types';
import Card from './Card';

export interface PlayerProps {
  name: string;
  cards: CardType[];
}

export default function Player({ name, cards = [] }: PlayerProps) {
  return (
    <div>
      <div>player: {name}</div>
      <div>
        {cards.map((card) => (
          <Card
            suit={card.suit}
            rank={card.rank}
            hasPair={card.hasPair}
            key={`${card.rank}-${card.suit}`}
          />
        ))}
      </div>
    </div>
  );
}
