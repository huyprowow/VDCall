import { userTyping } from './../service/socket/chat/chat';
import { create } from "zustand";
type roomState = {
  rooms: IRoom[];
  setRooms: (rooms: IRoom[]) => void;
  userTyping: IUserTyping;
  currentRoom: IRoom;
  setCurrentRoom: (currentRoom: IRoom) => void;
  setUserTyping: (userTyping: IUserTyping) => void;
};

export const useRoomStore = create<roomState>((set) => ({
  rooms: [],
  setRooms: (rooms: IRoom[]) => set({ rooms }),
  currentRoom: {} as IRoom,
  setCurrentRoom: (currentRoom: IRoom) => set({ currentRoom }),
  userTyping:{} as IUserTyping,
  setUserTyping: (userTyping: IUserTyping) => set({ userTyping }),
}));
