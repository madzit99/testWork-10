import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { NavLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { apiURL } from "../../constants";

interface Props {
  title: string;
  image: string | null;
  date: Date;
  id: string;
}

const OneNews: React.FC<Props> = ({ title, image, date, id }) => {
  const formattedDate = dayjs(date).format("YYYY-MM-DD HH:mm");
  let defaultImage =
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";

  if (image) {
    defaultImage = apiURL + "/" + image;
  }

  return (
    <Card sx={{ mb: "15px" }}>
      <CardMedia
        component="img"
        sx={{
          display: "block",
          width: "100%",
          height: "auto",
          maxHeight: "500px",
          mx: "auto",
        }}
        image={defaultImage}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textTransform: "uppercase", fontWeight: "700" }}
        >
          {title}
        </Typography>
        <Typography variant="h6" component="div">
          {formattedDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" sx={{ mr: "20px" }}>
          <NavLink
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
            to={`/news/${id}`}
          >
            Прочитать полностью
          </NavLink>
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
};

export default OneNews;
