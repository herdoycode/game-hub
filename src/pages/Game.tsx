import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import useGame from "../hooks/useGame";
const Game = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);

  if (isLoading)
    return (
      <Typography component="p" variant="h4">
        Loading...
      </Typography>
    );

  if (error) return <Typography component="p"> {error.message} </Typography>;

  return (
    <Box p={2}>
      <Typography
        component="h2"
        variant="h4"
        mb={2}
        sx={{ fontWeight: "bold" }}
      >
        Geme: {data?.name}
      </Typography>
      <Typography component="p"> {data?.description_raw} </Typography>
    </Box>
  );
};

export default Game;
