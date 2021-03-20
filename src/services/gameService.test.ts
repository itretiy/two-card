import * as gameService from './gameService';

describe('gameService', () => {
  it('should create new game with new full standard deck', () => {
    const game = gameService.createGame();

    expect(game.name).toBeDefined();
    expect(game.deck).toBeDefined();
    expect(game.deck.cards).toHaveLength(52);
  });

  it('should create new player with no cards', () => {
    const player = gameService.createPlayer();

    expect(player.name).toBeDefined();
    expect(player.cards).toHaveLength(0);
  });
});
