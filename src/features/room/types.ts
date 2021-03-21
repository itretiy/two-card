export interface Card {
  suit: string;
  rank: string;
  hasPair?: boolean;
}

export interface Player {
  id: string;
  name: string;
  cards: Card[];
}

export interface Room {
  id: string;
  name: string;
  players: Player[];
}
