import { RootState } from "../../app/store";
import { FullNewsInterface, News } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./NewsThunks";

interface NewsState {
  news: News[];
  oneNews: FullNewsInterface | null;
  loading: boolean;
}

const initialState: NewsState = {
  news: [],
  oneNews: null,
  loading: false,
};

const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload: items }) => {
      state.loading = false;
      state.news = items;
    });
    builder.addCase(fetchNews.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const newsReducer = NewsSlice.reducer;

export const SelectNews = (state: RootState) => state.news.news;
export const SelectOneNews = (state: RootState) => state.news.oneNews;
export const Selectloading = (state: RootState) => state.news.loading;
