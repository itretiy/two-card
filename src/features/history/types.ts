export interface HistoryItem {
  roomId: Room['id'];
  roomName: Room['name'];
  winner?: Player;
}
