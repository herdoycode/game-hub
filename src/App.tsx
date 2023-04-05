import { useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Navbar />
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
          <PlatformSelector
            selectedPlatform={GameQuery.platform}
            onSelectePlatform={(platform) =>
              setGameQuery({ ...GameQuery, platform })
            }
          />
          <Games gameQuery={GameQuery} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
