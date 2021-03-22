// Most frequently used types are placed in global typings
// Here additional module specific types are declared

export interface HistoryItem {
  roomId: Room['id'];
  roomName: Room['name'];
  winner?: Player;
}
