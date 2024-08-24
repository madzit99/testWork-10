import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comments, CommentsMutation } from "../../types";
import axiosApi from "../../axiosApi";
import { AppDispatch } from "../../app/store";

export const fetchComments = createAsyncThunk<
  Comments[],
  string | undefined,
  { dispatch: AppDispatch }
>("comments/fetchAll", async (news_id) => {
  const commentsResponse = await axiosApi.get<Comments[]>(
    `/comments?news_id=${news_id}`
  );
  const comments = commentsResponse.data;
  return comments;
});

export const deleteComment = createAsyncThunk<
  void,
  { commentId: string },
  { dispatch: AppDispatch }
>("comments/deleteComment", async ({ commentId }) => {
  try {
    await axiosApi.delete(`/comments/${commentId}`);
    return;
  } catch (error) {
    return console.log("Ошибка! Не удалось удалить комментарий.", error);
  }
});

export const createComment = createAsyncThunk<
  CommentsMutation,
  CommentsMutation,
  { dispatch: AppDispatch }
>("comments/create", async (commentData) => {
  try {
    const response = await axiosApi.post("/comments", commentData);
    return response.data;
  } catch (error) {
    return console.log("Ошибка! Не удалось создать комментарий.", error);
  }
});
