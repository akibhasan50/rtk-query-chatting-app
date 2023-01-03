import { configureStore } from "@reduxjs/toolkit";
import { apiSlicer } from "../features/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import conversationSliceReducer from "../features/conversation/conversationSlice";
import messagesSliceReducer from "../features/messages/messagesSlice";

export const store = configureStore({
  reducer: {
    [apiSlicer.reducerPath]: apiSlicer.reducer,
    auth: authSliceReducer,
    messages: messagesSliceReducer,
    conversation: conversationSliceReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlicer.middleware),
});
