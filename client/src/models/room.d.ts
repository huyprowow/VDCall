interface IRoom {
  _id: string;
  roomName: string;
  roomDescription: string;
  chats: Array<IChat>;
  users: Array<IUser>;
  roomCreatedBy: string;
  dateCreated:Date;
}
