import { io } from 'socket.io-client';
import { chatApi } from './chatApi';

const setupWebSocketListeners = (store) => {
  const { dispatch } = store;
  const socket = io();

  socket.on('newMessage', (newMessage) => {
    dispatch(chatApi.util.updateQueryData('getMessages', undefined, (draft) => {
      draft.push(newMessage);
    }));
  });
};

export default setupWebSocketListeners;
