import { getChats, sendChatMessage } from "./chat";
import { getRoomService } from "./room";
import { signIn } from "./signIn";
import { signUp } from "./signUp";
export const ApiService = {
  signIn,
  signUp,
  getRoomService,
  getChats,
  sendChatMessage,
};
