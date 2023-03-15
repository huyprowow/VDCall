import { joinAllRoom } from './room/room';
import { setUserInfo, userJoined } from './user/user';

export const SocketService ={
    User:{
        setUserInfo,
        userJoined
    },
    Room:{
        joinAllRoom
    }
}