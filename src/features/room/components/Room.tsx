import React from 'react';
import styled from 'styled-components';

import { Player as PlayerType } from 'features/room/types';
import Button from 'components/Button';
import Player from './Player';

const RoomHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
`;

const ButtonsPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
`;

const RoomButton = styled(Button)`
  width: 270px;
  margin-right: 1em;
`;

const RoomInfo = styled.div`
  font-size: 24px;
  text-shadow: 1px 2px #444;
`;

const PlayersPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export interface RoomProps {
  name: string;
  players: PlayerType[];
  winner?: PlayerType;
  onDeal: () => void;
  onAddPlayer: () => void;
  onRemovePlayer: () => void;
}

export default function Game({
  name,
  players = [],
  winner,
  onDeal,
  onAddPlayer,
  onRemovePlayer,
}: RoomProps) {
  return (
    <>
      <RoomHeader>
        <RoomInfo>Room: {name}</RoomInfo>
      </RoomHeader>
      <ButtonsPanel>
        <RoomButton onClick={onDeal}>Deal cards</RoomButton>
        <RoomButton onClick={onAddPlayer}>Add Player</RoomButton>
        <RoomButton onClick={onRemovePlayer}>Remove Player</RoomButton>
      </ButtonsPanel>
      <PlayersPanel>
        {players.map((player) => (
          <Player
            name={player.name}
            cards={player.cards}
            isWinner={player.id === winner?.id}
            key={player.name}
          />
        ))}
      </PlayersPanel>
    </>
  );
}
