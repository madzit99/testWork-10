import { AppDispatch } from "../../app/store";
import axiosApi from "../../axiosApi";
import { News } from "../../types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk<
  News[],
  undefined,
  { dispatch: AppDispatch }
>("news/fetchAll", async () => {
  const newsResponse = await axiosApi.get<News[]>("/news");
  const news = newsResponse.data;
  return news;
});
