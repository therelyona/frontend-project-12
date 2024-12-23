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

  socket.on('newChannel', (newChannel) => {
    dispatch(chatApi.util.updateQueryData('getChannels', undefined, (draft) => {
      draft.push(newChannel);
    }));
  });

  socket.on('removeChannel', (channel) => {
    dispatch(chatApi.util.updateQueryData('getChannels', undefined, (draft) => {
      const index = draft.findIndex((c) => c.id === channel.id);
      if (index !== -1) {
        draft.splice(index, 1);
      }
    }));
  });

  socket.on('renameChannel', (channel) => {
    dispatch(chatApi.util.updateQueryData('getChannels', undefined, (draft) => {
      const currentChannel = draft.find((c) => c.id === channel.id);
      if (currentChannel) {
        currentChannel.name = channel.name;
      }
    }));
  });
};

export default setupWebSocketListeners;
