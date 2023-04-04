import { Grid, Typography } from "@mui/material";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const Games = () => {
  const { error, games, isLoading } = useGames();
  return (
    <>
      {error && (
        <Typography variant="caption" fontSize={16} color="red">
          {error}
        </Typography>
      )}
      <Grid container>
        {isLoading ? (
          <GameCardSkeleton />
        ) : (
          <>
            {games.map((game) => (
              <Grid item key={game.id} xs={12} sm={6} md={4} lg={3}>
                <GameCard game={game} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </>
  );
};

export default Games;
