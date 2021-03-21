import { Card as CardModel, Player as PlayerModel, Room as RoomModel } from 'models';
import { hasPair, getPairsCount } from './gameService.utils';

class GameService {
  private room = new RoomModel();

  createRoom() {
    this.room = new RoomModel();

    return this.mapRoom(this.room);
  }

  deal() {
    return this.mapPlayers(this.room.deal());
  }

  getPlayers() {
    return this.mapPlayers(this.room.players);
  }

  addPlayer() {
    if (this.room.players.length === 7) return;

    return this.mapPlayer(this.room.addPlayer());
  }

  removePlayer() {
    const removedPlayer = this.room.removePlayer();
    if (!removedPlayer) return;

    return this.mapPlayer(removedPlayer);
  }

  getWinner() {
    const { players } = this.room;
    const ranks = players
      .map((player) => ({
        player,
        pairsCount: getPairsCount(player.cards),
      }))
      .sort(
        ({ pairsCount: pairsCountA }, { pairsCount: pairsCountB }) => pairsCountB - pairsCountA,
      );

    return ranks[0]?.pairsCount !== 0 && ranks[0]?.pairsCount !== ranks[1]?.pairsCount
      ? this.mapPlayer(ranks[0].player)
      : undefined;
  }

  private mapCards(cards: CardModel[] = []): Card[] {
    return cards.map((card) => ({
      suit: card.suit,
      rank: card.rank,
      hasPair: hasPair(card, cards),
    }));
  }

  private mapPlayers(players: PlayerModel[] = []): Player[] {
    return players.map((player) => this.mapPlayer(player));
  }

  private mapPlayer(player: PlayerModel): Player {
    return {
      id: player.id,
      name: player.name,
      cards: this.mapCards(player.cards),
    };
  }

  private mapRoom(room: RoomModel): Room {
    return {
      id: room.id,
      name: room.name,
      players: this.mapPlayers(room.players),
    };
  }
}

export default new GameService();
