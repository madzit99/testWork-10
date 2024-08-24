import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { apiURL } from "../../constants";
import { SelectOneNews } from "./NewsSlice";
import { selectComments } from "../Comments/CommentsSlice";
import { fetchOneNews } from "./NewsThunks";
import { deleteComment, fetchComments } from "../Comments/CommentsThunks";
import Comments from "../Comments/Comments";
import CommentsForm from "../Comments/CommentsForm";

const FullNews = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id?: string }>();
  const fullNews = useAppSelector(SelectOneNews);
  const comments = useAppSelector(selectComments);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneNews(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      dispatch(fetchComments(id));
    }
  }, [dispatch, id]);

  const formattedDate = dayjs(fullNews?.date).format("YYYY-MM-DD HH:mm:ss");

  let defaultImage =
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";

  if (fullNews?.image) {
    defaultImage = apiURL + "/" + fullNews.image;
  }

  const handleCommentDelete = async (commentId: string) => {
    await dispatch(deleteComment({ commentId: commentId }));
    await dispatch(fetchComments(id));
  };

  const idNews = id || "";

  return (
    <>
      <Card sx={{ mb: "15px", width: "50%", mx: "auto", mt: "20px" }}>
        <CardMedia
          component="img"
          sx={{
            display: "block",
            width: "100%",
            height: "auto",
            maxWidth: "650px",
            mx: "auto",
          }}
          image={defaultImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {fullNews?.title}
          </Typography>
          <Typography variant="h6" component="div">
            {formattedDate}
          </Typography>
          <Typography variant="h5" component="div">
            {fullNews?.text}
          </Typography>
        </CardContent>
      </Card>
      <CommentsForm idNews={idNews} />
      <Comments onDelete={handleCommentDelete} />
    </>
  );
};

export default FullNews;
