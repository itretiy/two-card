import React from 'react';

import { HistoryItem } from 'features/history/types';

export interface HistoryProps {
  games: HistoryItem[];
}

export default function History({ games = [] }: HistoryProps) {
  return (
    <div>
      <div>history:</div>
      <div>
        {games.map((game) => (
          <div key={game.roomId}>
            room: {game.roomName}, winner: {game.winner?.name || 'none'}
          </div>
        ))}
      </div>
    </div>
  );
}
