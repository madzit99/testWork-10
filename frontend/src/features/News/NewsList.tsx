import { Box, Typography, CircularProgress } from "@mui/material";
import { useAppSelector } from "../../app/Hooks";
import { SelectNews, Selectloading } from "./NewsSlice";
import OneNews from "./OneNews";

const NewsList = () => {
  const news = useAppSelector(SelectNews);
  const loading = useAppSelector(Selectloading);
  return (
    <Box sx={{ width: "50%", mx: "auto", mt: "20px" }}>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : news.length > 0 ? (
        news
          .slice(0)
          .reverse()
          .map((newsone) => (
            <OneNews
              key={newsone.id}
              title={newsone.title}
              image={newsone.image}
              date={newsone.date}
              id={newsone.id}
            />
          ))
      ) : (
        <Typography variant="h4" align="center">
          Нет доступных новостей
        </Typography>
      )}
    </Box>
  );
};

export default NewsList;
