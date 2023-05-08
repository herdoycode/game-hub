import { useState } from "react";
import { Grid, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Navbar
        onSearch={(searchText) => setGameQuery({ ...GameQuery, searchText })}
      />
      <Grid container>
        <Grid
          item
          md={3}
          lg={2}
          display={{ sm: "none", xs: "none", md: "block" }}
          paddingX={2}
        >
          <GenreList
            selectedGenreId={GameQuery.genreId}
            onSelecteGenre={(genre) =>
              setGameQuery({ ...GameQuery, genreId: genre.id })
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={10}>
          <Box component="div" marginBottom={2}>
            <GameHeading gameQuery={GameQuery} />
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", width: "100%" }}
            marginBottom={5}
          >
            <PlatformSelector
              selectedPlatformId={GameQuery.platformId}
              onSelectePlatform={(platform) =>
                setGameQuery({ ...GameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...GameQuery, sortOrder })
              }
            />
          </Box>
          <Games gameQuery={GameQuery} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
