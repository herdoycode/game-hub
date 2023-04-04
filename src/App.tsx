import { Grid, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import Games from "./components/Games";

const App = () => {
  return (
    <>
      <Navbar />

      <Grid container>
        <Grid item md={3} display={{ sm: "none", xs: "none", md: "block" }}>
          <Typography variant="subtitle1"> Aside </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
          <Games />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
