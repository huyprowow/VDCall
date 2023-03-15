import { create } from "zustand";
type roomState = {
  rooms: IRoom[];
  setRooms: (rooms: IRoom[]) => void;
};
export const useRoomStore = create<roomState>((set) => ({
  rooms: [],
  setRooms: (rooms: IRoom[]) => set({ rooms }),
}));
