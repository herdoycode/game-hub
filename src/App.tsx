import { useState } from "react";
import { Grid, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
            selectedGenre={GameQuery.genre}
            onSelecteGenre={(genre) => setGameQuery({ ...GameQuery, genre })}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={10}>
          <Box
            component="div"
            sx={{ display: "flex", width: "100%" }}
            marginBottom={5}
          >
            <PlatformSelector
              selectedPlatform={GameQuery.platform}
              onSelectePlatform={(platform) =>
                setGameQuery({ ...GameQuery, platform })
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
