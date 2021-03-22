import React from 'react';
import styled from 'styled-components';

import Button from 'components/Button';
import Player from './Player';

const RoomHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
`;

const RoomButton = styled(Button)`
  width: 270px;
  margin-right: 1em;
`;

// common styles can be moved to the theme but skipped this part as it's just routine
const RoomInfo = styled.div`
  font-size: 24px;
  text-shadow: 1px 2px #444;
`;

const Players = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export interface RoomProps {
  name: string;
  players: Player[];
  winner?: Player;
  onDeal: () => void;
  canAdd: boolean;
  onAddPlayer: () => void;
  canRemove: boolean;
  onRemovePlayer: () => void;
}

export default function Game({
  name,
  players = [],
  winner,
  onDeal,
  canAdd,
  onAddPlayer,
  canRemove,
  onRemovePlayer,
}: RoomProps) {
  return (
    <>
      <RoomHeader>
        <RoomInfo>Room: {name}</RoomInfo>
      </RoomHeader>
      <Buttons>
        <RoomButton onClick={onDeal} data-testid="button.deal">
          Deal Cards
        </RoomButton>
        <RoomButton onClick={onAddPlayer} disabled={!canAdd} data-testid="button.addPlayer">
          Add Player
        </RoomButton>
        <RoomButton
          onClick={onRemovePlayer}
          disabled={!canRemove}
          data-testid="button.removePlayer"
        >
          Remove Player
        </RoomButton>
      </Buttons>
      <Players>
        {players.map((player) => (
          <Player
            name={player.name}
            cards={player.cards}
            isWinner={player.id === winner?.id}
            key={player.name}
          />
        ))}
      </Players>
    </>
  );
}
