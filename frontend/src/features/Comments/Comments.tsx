import { useAppSelector } from "../../app/Hooks";
import { selectComments } from "./CommentsSlice";
import { Box, Typography } from "@mui/material";
import OneComment from "./OneComment";

interface Props {
  onDelete: (commentId: string) => void;
}

const Comments: React.FC<Props> = ({ onDelete }) => {
  const comments = useAppSelector(selectComments);

  return (
    <div>
      {comments && comments.length > 0 ? (
        <Box sx={{ width: "50%", mx: "auto" }}>
          {comments.map((comment) => (
            <OneComment
              key={comment.id}
              author={comment.author}
              text={comment.text}
              onDelete={() => onDelete(comment.id)}
            />
          ))}
        </Box>
      ) : (
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Нет доступных комментариев.
        </Typography>
      )}
    </div>
  );
};

export default Comments;
