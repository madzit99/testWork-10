import { AppDispatch } from "../../app/store";
import axiosApi from "../../axiosApi";
import { FullNewsInterface, News, NewsMutation } from "../../types";
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

export const fetchOneNews = createAsyncThunk<
  FullNewsInterface,
  string,
  { dispatch: AppDispatch }
>("news/fetchOne", async (id: string) => {
  const newsResponse = await axiosApi.get<FullNewsInterface>(`/news/${id}`);
  const news = newsResponse.data;
  return news;
});

export const createNews = createAsyncThunk(
  "news/create",
  async (newsData: NewsMutation) => {
    const formData = new FormData();
    formData.append("text", newsData.text);
    formData.append("title", newsData.title);
    if (newsData.image) {
      formData.append("image", newsData.image);
    }

    const response = await axiosApi.post("/news", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  }
);

export const deleteNews = createAsyncThunk<
  void,
  { newsId: string },
  { dispatch: AppDispatch }
>("comments/deleteComment", async ({ newsId }) => {
  try {
    await axiosApi.delete(`/news/${newsId}`);
    return;
  } catch (error) {
    return console.log("Ошибка!Не удалось удалить новость", error);
  }
});
