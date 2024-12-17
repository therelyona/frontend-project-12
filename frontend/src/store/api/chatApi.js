import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: () => 'channels',
    }),
    getMessages: builder.query({
      query: () => 'messages',
    }),
    addMessages: builder.mutation({
      query: (newMessage) => ({
        url: 'messages',
        method: 'POST',
        body: newMessage,
      }),
    }),
  }),
});

export const {
  useGetChannelsQuery,
  useGetMessagesQuery,
  useAddMessagesMutation,
} = chatApi;
