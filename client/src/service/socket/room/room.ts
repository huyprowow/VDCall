import { notificationCustom } from '../../../component/Message/Notification/notificationCustom';
import { EVENTS } from '../events/event';
import { socket } from './../socket';
export const joinAllRoom=(listRoomJoin:string[])=>{
    socket.emit(
        EVENTS.JOIN_ALL_ROOM,
        { rooms: listRoomJoin },
        (response: any) => {
          notificationCustom("success", "Join all room success");
        }
      );
}