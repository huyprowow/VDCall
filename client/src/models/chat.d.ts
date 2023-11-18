interface IChat {
  _id: string;
  chatMessage: string;
  dateCreated: Date;
  user: IUser;
}
