// TODO check
// import { Suit, Rank } from 'models/Card';

export interface Card {
  suit: string;
  rank: string;
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
