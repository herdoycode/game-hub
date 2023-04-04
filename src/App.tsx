import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Games from "./components/Games";
import GenreList from "./components/GenreList";

const App = () => {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid
          item
          md={3}
          display={{ sm: "none", xs: "none", md: "block" }}
          paddingX={2}
        >
          <GenreList />
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <Games />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
