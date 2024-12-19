import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import activeChannelReducer from './slices/activeChannelSlice';
import { chatApi } from './api/chatApi';
import setupWebSocketListeners from './api/webSocketHandler';

const store = configureStore({
  reducer: {
    [chatApi.reducerPath]: chatApi.reducer,
    activeChannel: activeChannelReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chatApi.middleware),
});

setupWebSocketListeners(store);
setupListeners(store.dispatch);

export default store;
