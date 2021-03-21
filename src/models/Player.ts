import Chance from 'chance';
import { nanoid } from 'nanoid';

import Card from './Card';

const chance = new Chance();

export default class Player {
  public readonly id: string;
  public readonly name: string;
  public readonly cards: Card[];

  constructor() {
    this.id = nanoid();
    this.name = chance.name();
    this.cards = [];
  }
}
