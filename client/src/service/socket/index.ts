import { usersTyping, listeningTyping, sendChatMessage, listeningMessage } from './chat/chat';
import { joinAllRoom } from './room/room';
import { setUserInfo, userJoined } from './user/user';

export const SocketService ={
    User:{
        setUserInfo,
        userJoined
    },
    Room:{
        joinAllRoom
    },
    Chat:{
        usersTyping,
        listeningTyping,
        sendChatMessage,
        listeningMessage
    }
}