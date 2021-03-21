import Chance from 'chance';
import { nanoid } from 'nanoid';

import Deck from './Deck';
import Player from './Player';

const chance = new Chance();

// NOTE: players are stateful
let players = [new Player(), new Player()];

export default class Room {
  public readonly id: string;
  public readonly name: string;
  private deck: Deck;

  constructor() {
    this.id = nanoid();
    this.name = chance.word();
    this.deck = new Deck();
  }

  get players() {
    return players;
  }

  set players(newPlayers: Player[]) {
    players = newPlayers;
  }

  deal(): Player[] {
    this.deck.shuffle();

    const playersWithCards = players.map((player) => ({
      ...player,
      cards: this.deck.draw(),
    }));
    players = playersWithCards;

    return players;
  }

  addPlayer(): Player {
    const newPlayer = new Player();
    players = [...players, newPlayer];

    return newPlayer;
  }

  removePlayer(): Player | undefined {
    const removedPlayer = players[players.length - 1];
    const newPlayers = players.slice(0, -1);
    players = newPlayers;

    return removedPlayer;
  }
}
