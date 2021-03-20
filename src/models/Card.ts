export enum Suit {
  Clubs = 'CLUBS',
  Diamonds = 'DIAMONDS',
  Hearts = 'HEARTS',
  Spades = 'SPADES',
}

export enum Rank {
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Jack = 11,
  Queen = 12,
  King = 13,
  Ace = 14,
}

export default class Card {
  public readonly suit: Suit;
  public readonly rank: Rank;

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
  }
}
