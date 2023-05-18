import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ThemeSwitch from "./ThemeSwitch";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      paddingX={2}
      paddingY={2}
      marginBottom={2}
    >
      <Link to="/" style={{ cursor: "pointer" }}>
        <Box component="img" src={logo} width={60} />
      </Link>
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={10} md={8}>
          <SearchBox />
        </Grid>
      </Grid>
      <ThemeSwitch />
    </Box>
  );
};

export default Navbar;
