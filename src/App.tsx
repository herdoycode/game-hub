import { Grid, Typography } from "@mui/material";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid
          item
          md={3}
          display={{ sm: "none", xs: "none", md: "block" }}
          bgcolor="goldenrod"
        >
          <Typography variant="subtitle1"> Aside </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={9} bgcolor="green">
          <Typography variant="subtitle1"> Aside </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
