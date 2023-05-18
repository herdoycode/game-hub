import { Grid, Typography } from "@mui/material";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "../hooks/useGames";

const Games = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const fetchGamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <>
      {error && (
        <Typography variant="caption" fontSize={16} color="red">
          {error.message}
        </Typography>
      )}
      <InfiniteScroll
        dataLength={fetchGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={"Loading..."}
      >
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
      </InfiniteScroll>
    </>
  );
};

export default Games;
