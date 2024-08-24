import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Toolbar = () => {
  return (
    <Box sx={{ bgcolor: "#1976D2" }}>
      <Box
        sx={{
          width: "50%",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          component={Link}
          to="/"
          sx={{ fontSize: "24px", fontWeight: "700", color: "white" }}
        >
          Новости
        </Button>
        <Button
          component={Link}
          to="/create"
          sx={{ fontSize: "24px", fontWeight: "700", color: "white" }}
        >
          Создать новость
        </Button>
      </Box>
    </Box>
  );
};

export default Toolbar;
