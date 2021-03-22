import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import EmptyCard from './EmptyCard';

const PlayerStyled = styled.div<{ isWinner: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  padding: 1em;

  border: ${(props) => (props.isWinner ? '4px solid' : 'none')};
`;

// common styles can be moved to the theme but skipped this part as it's just routine
const PlayerInfo = styled.div`
  margin-bottom: 1em;
  text-shadow: 1px 2px #444;
`;
export interface PlayerProps {
  name: string;
  cards: Card[];
  isWinner: boolean;
}

export default function Player({ name, cards = [], isWinner = false }: PlayerProps) {
  return (
    <PlayerStyled isWinner={isWinner} data-testid="player">
      <PlayerInfo>Player: {name}</PlayerInfo>
      <div>
        {!cards.length && [...Array<undefined>(7)].map((_, index) => <EmptyCard key={index} />)}
        {cards.map((card) => (
          <Card
            suit={card.suit}
            rank={card.rank}
            hasPair={card.hasPair}
            key={`${card.rank}-${card.suit}`}
          />
        ))}
      </div>
    </PlayerStyled>
  );
}
