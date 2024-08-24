import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { useNavigate } from "react-router-dom";
import { Selectloading } from "./NewsSlice";
import { NewsMutation } from "../../types";
import { createNews, fetchNews } from "./NewsThunks";
import FileInput from "../../components/FileInput/FileInput";

const NewsForm = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(Selectloading);
  const navigate = useNavigate();

  const [state, setState] = useState<NewsMutation>({
    title: "",
    text: "",
    image: null,
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setState((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(createNews(state));
    await dispatch(fetchNews());
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{ width: "50%", mx: "auto" }}
      >
        <Grid item xs={6}>
          <TextField
            id="title"
            label="Заголовок новости"
            name="title"
            value={state.title}
            onChange={inputChangeHandler}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="text"
            label="Текст новости"
            name="text"
            value={state.text}
            onChange={inputChangeHandler}
            fullWidth
            required
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            background: "#fff",
            pl: "0",
            pb: "16px",
            pr: "16px",
            ml: "16px",
            mt: "15px",
            borderRadius: "10px",
          }}
        >
          <FileInput
            onChange={fileInputChangeHandler}
            name="image"
            label="Изображение новости"
          />
        </Grid>
        <Grid item xs={6}>
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

export default NewsForm;
