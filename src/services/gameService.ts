import { Room, Player, Card } from 'models';
import { hasPair, getPairsCount } from './gameService.utils';

export type CardData = Pick<Card, 'suit' | 'rank'> & {
  hasPair?: boolean;
};
export type PlayerData = Pick<Player, 'id' | 'name'> & {
  cards: CardData[];
};
export type RoomData = Pick<Room, 'id' | 'name'> & {
  players: PlayerData[];
};

class GameService {
  private room: Room = new Room();

  createRoom() {
    this.room = new Room();

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

  private mapCards(cards: Card[] = []): CardData[] {
    return cards.map((card) => ({
      suit: card.suit,
      rank: card.rank,
      hasPair: hasPair(card, cards),
    }));
  }

  private mapPlayers(players: Player[] = []): PlayerData[] {
    return players.map((player) => this.mapPlayer(player));
  }

  private mapPlayer(player: Player): PlayerData {
    return {
      id: player.id,
      name: player.name,
      cards: this.mapCards(player.cards),
    };
  }

  private mapRoom(room: Room): RoomData {
    return {
      id: room.id,
      name: room.name,
      players: this.mapPlayers(room.players),
    };
  }
}

export default new GameService();
