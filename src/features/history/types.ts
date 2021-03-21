import { Player, Room } from 'features/room/types';

export interface HistoryItem {
  roomId: Room['id'];
  roomName: Room['name'];
  winner?: Player;
}
