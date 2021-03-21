import gameService from './gameService';
import Room from 'models/Room';
import Deck from 'models/Deck';
import Player from 'models/Player';
import Card, { Suit, Rank } from 'models/Card';

describe('gameService', () => {
  describe('.createRoom', () => {
    it('should create new room with 2 players', () => {
      const room = gameService.createRoom();

      expect(room.id).toBeDefined();
      expect(room.name).toBeDefined();
      expect(room.players).toHaveLength(2);
    });

    it('should every time create a new room', () => {
      const roomA = gameService.createRoom();
      const roomB = gameService.createRoom();

      expect(roomA.id).not.toEqual(roomB.id);
    });

    it('should have players without cards', () => {
      const room = gameService.createRoom();

      room.players.forEach((player) => {
        expect(player.cards).toHaveLength(0);
      });
    });
  });

  describe('.deal', () => {
    it('should call Room.prototype.deal()', () => {
      const dealSpy = jest.spyOn(Room.prototype, 'deal');

      gameService.deal();

      expect(dealSpy).toBeCalled();

      dealSpy.mockRestore();
    });

    it('should draw 7 cards for each player from shuffled deck', () => {
      const shuffleSpy = jest.spyOn(Deck.prototype, 'shuffle');
      const drawSpy = jest.spyOn(Deck.prototype, 'draw');

      const [playerOne, playerTwo] = gameService.deal();

      expect(shuffleSpy).toBeCalled();
      expect(drawSpy).toBeCalledTimes(2);
      expect(playerOne.cards).toHaveLength(7);
      expect(playerTwo.cards).toHaveLength(7);

      shuffleSpy.mockRestore();
      drawSpy.mockRestore();
    });
  });

  describe('.winner', () => {
    it('should not return winner if no one has pair', () => {
      const getPlayersSpy = jest.spyOn(Room.prototype, 'players', 'get');
      const playerA = new Player();
      playerA.cards.push(new Card(Suit.Clubs, Rank.Two), new Card(Suit.Clubs, Rank.Three));
      const playerB = new Player();
      playerB.cards.push(new Card(Suit.Clubs, Rank.Four), new Card(Suit.Clubs, Rank.Five));
      getPlayersSpy.mockReturnValue([playerA, playerB]);

      const winner = gameService.getWinner();

      expect(winner).toBeUndefined();

      getPlayersSpy.mockRestore();
    });

    it('should not return winner if both have equal pairs count', () => {
      const getPlayersSpy = jest.spyOn(Room.prototype, 'players', 'get');
      const playerA = new Player();
      playerA.cards.push(new Card(Suit.Clubs, Rank.Two), new Card(Suit.Diamonds, Rank.Two));
      const playerB = new Player();
      playerB.cards.push(new Card(Suit.Hearts, Rank.Two), new Card(Suit.Spades, Rank.Two));
      getPlayersSpy.mockReturnValue([playerA, playerB]);

      const winner = gameService.getWinner();

      expect(winner).toBeUndefined();

      getPlayersSpy.mockRestore();
    });

    it('should return winner if one has more pairs', () => {
      const getPlayersSpy = jest.spyOn(Room.prototype, 'players', 'get');
      const playerA = new Player();
      playerA.cards.push(new Card(Suit.Clubs, Rank.Two), new Card(Suit.Diamonds, Rank.Two));
      const playerB = new Player();
      playerB.cards.push(new Card(Suit.Hearts, Rank.Two), new Card(Suit.Spades, Rank.Three));
      getPlayersSpy.mockReturnValue([playerA, playerB]);

      const winner = gameService.getWinner();

      expect(winner).not.toBeUndefined();
      expect(winner?.id).toEqual(playerA.id);

      getPlayersSpy.mockRestore();
    });
  });
});
