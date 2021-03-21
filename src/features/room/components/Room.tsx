import React from 'react';

import { Player as PlayerType } from 'features/room/types';
import Player from './Player';

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
    <div>
      <div>room: {name}</div>
      {winner && <div>winner: {winner.name}</div>}
      <div>
        players:{' '}
        {players.map((player) => (
          <Player key={player.name} name={player.name} cards={player.cards} />
        ))}
      </div>
      <div>
        <button onClick={onDeal} className="play-button">
          Deal cards
        </button>
      </div>
      <div>
        <button onClick={onAddPlayer} className="play-button">
          Add Player
        </button>
      </div>
      <div>
        <button onClick={onRemovePlayer} className="play-button">
          Remove Player
        </button>
      </div>
    </div>
  );
}
