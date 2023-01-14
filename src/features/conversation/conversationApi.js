import { apiSlice } from "../apiSlice";

export const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) => `/conversations?participants_like=${email}&_sort=timestamp&_order=desc=1&_page=1&_limit=5`,
    }),
  }),
});

export const {useGetConversationsQuery} = conversationApi;