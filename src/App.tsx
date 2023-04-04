import { useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
          <GenreList onSelecteGenre={(genre) => setSelectedGenre(genre)} />
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={10}>
          <Games selectedGenre={selectedGenre} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
