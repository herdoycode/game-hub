import { Grid, Typography } from "@mui/material";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useGames } from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const Games = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
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
            {data.map((game) => (
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
