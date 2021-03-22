import React from 'react';
import styled from 'styled-components';

import { HistoryItem } from 'features/history/types';

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HistoryHeader = styled.div`
  font-size: 24px;
  margin-bottom: 1em;
  text-shadow: 1px 2px #444;
`;

const RoomInfo = styled.div`
  padding-bottom: 0.5em;
  border-bottom: 1px solid;
  margin-bottom: 0.5em;

  &:last-child {
    border-bottom: none;
  }
`;

export interface HistoryProps {
  games: HistoryItem[];
}

export default function History({ games = [] }: HistoryProps) {
  return (
    <HistoryStyled>
      <HistoryHeader>History:</HistoryHeader>
      <div>
        {games.map((game) => (
          <RoomInfo key={game.roomId}>
            Room: {game.roomName}, Winner: {game.winner?.name || 'None'}
          </RoomInfo>
        ))}
      </div>
    </HistoryStyled>
  );
}
