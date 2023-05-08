import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { useGames } from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const Games = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  return (
    <>
      {error && (
        <Typography variant="caption" fontSize={16} color="red">
          {error.message}
        </Typography>
      )}
      <Grid container>
        {isLoading ? (
          <GameCardSkeleton />
        ) : (
          <>
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <Grid item key={game.id} xs={12} sm={6} md={4} lg={3}>
                    <GameCard game={game} />
                  </Grid>
                ))}
              </React.Fragment>
            ))}
          </>
        )}
      </Grid>
      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          variant="outlined"
          color="inherit"
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
};

export default Games;
