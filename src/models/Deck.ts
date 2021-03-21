import shuffle from 'lodash.shuffle';

import Card, { Suit, Rank } from 'models/Card';

export default class Deck {
  public cards: Card[] = [];

  constructor() {
    Object.keys(Suit).forEach((suit) => {
      Object.keys(Rank).forEach((rank) => {
        this.cards.push(new Card(Suit[suit as keyof typeof Suit], Rank[rank as keyof typeof Rank]));
      });
    });
  }

  shuffle() {
    this.cards = shuffle(this.cards);

    return this.cards;
  }

  draw(count = 7) {
    return this.cards.splice(-count, count);
  }
}
