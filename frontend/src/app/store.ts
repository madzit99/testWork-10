import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "../features/News/NewsSlice";
import { commentsReducer } from "../features/Comments/CommentsSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    comments: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
