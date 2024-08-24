import { createSlice } from "@reduxjs/toolkit";
import { Comments } from "../../types";
import { RootState } from "../../app/store";
import { createComment, fetchComments } from "./CommentsThunks";

interface commentsState {
  comments: Comments[];
  loading: boolean;
}

const initialState: commentsState = {
  comments: [],
  loading: false,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, { payload: items }) => {
      state.loading = false;
      state.comments = items;
    });
    builder.addCase(fetchComments.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(createComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createComment.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(createComment.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const commentsReducer = commentsSlice.reducer;

export const selectComments = (state: RootState) => state.comments.comments;
export const selectCommentsLoading = (state: RootState) =>
  state.comments.loading;
