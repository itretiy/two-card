import Chance from 'chance';

import { Deck, Card } from 'models';

const chance = new Chance();

// TODO draft
export type Game = {
  name: string;
  deck: Deck;
};

export const createGame = (): Game => {
  return {
    name: chance.word(),
    deck: new Deck(),
  };
};

export type Player = {
  name: string;
  cards: Card[];
};

export const createPlayer = (): Player => {
  return {
    name: chance.name(),
    cards: [],
  };
};
