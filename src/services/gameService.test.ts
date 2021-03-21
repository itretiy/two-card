import gameService from './gameService';

// TODO WIP
describe('gameService', () => {
  describe('createRoom', () => {
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

    it('should create new room players without cards', () => {
      const room = gameService.createRoom();

      room.players.forEach((player) => {
        expect(player.cards).toHaveLength(0);
      });
    });
  });

  describe('deal', () => {
    it('should draw 7 cards for each player', () => {
      gameService.createRoom();
      const [playerOne, playerTwo] = gameService.deal();

      expect(playerOne.cards).toHaveLength(7);
      expect(playerTwo.cards).toHaveLength(7);
    });
  });
});
