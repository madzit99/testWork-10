import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { CommentsMutation } from "../../types";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { selectCommentsLoading } from "./CommentsSlice";
import { createComment, fetchComments } from "./CommentsThunks";

interface Props {
  idNews: string;
}

const CommentsForm: React.FC<Props> = ({ idNews }) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectCommentsLoading);
  const [state, setState] = useState<CommentsMutation>({
    newsId: "",
    author: "",
    text: "",
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      newsId: idNews,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(createComment(state));
    await dispatch(fetchComments(idNews));
    setState((prevState) => ({
      ...prevState,
      author: "",
      text: "",
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{ width: "50%", mx: "auto" }}
      >
        <Grid item xs={6} sx={{ ml: "-16px" }}>
          <TextField
            id="author"
            label="Author"
            name="author"
            value={state.author}
            onChange={inputChangeHandler}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sx={{ ml: "-16px" }}>
          <TextField
            id="text"
            label="Text"
            name="text"
            value={state.text}
            onChange={inputChangeHandler}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sx={{ ml: "-16px" }}>
          <LoadingButton
            type="submit"
            variant="contained"
            disabled={isLoading}
            loading={isLoading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
          >
            Post!
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default CommentsForm;
