import { useParams } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import ExpandableText from "../components/ExpandableText";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
const Game = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGame(slug!);

  if (isLoading)
    return (
      <Typography component="p" variant="h4">
        Loading...
      </Typography>
    );

  if (!data) return null;

  return (
    <Box>
      <Typography
        component="h2"
        variant="h4"
        mb={2}
        sx={{ fontWeight: "bold" }}
      >
        Geme: {data?.name}
      </Typography>
      <ExpandableText>{data?.description_raw}</ExpandableText>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <GameAttributes game={data} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box my={5}>
            <GameTrailer gameId={data.id} />
            <GameScreenshots gameId={data.id} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Game;
