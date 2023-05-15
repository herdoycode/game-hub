import { Grid, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

const App = () => {
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
          <GenreList />
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={10}>
          <Box component="div" marginBottom={2}>
            <GameHeading />
          </Box>
          <Box
            component="div"
            sx={{ display: "flex", width: "100%" }}
            marginBottom={5}
          >
            <PlatformSelector />
            <SortSelector />
          </Box>
          <Games />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
