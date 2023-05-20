import useScreenshots from "../hooks/useScreenshots";
import { Box, Grid } from "@mui/material";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <Grid container>
      <Grid container spacing={1}>
        {data?.results.map((file) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={file.id}>
            <Box component="img" src={file.image} width="100%"></Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default GameScreenshots;
