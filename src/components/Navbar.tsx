import { Box, Grid } from "@mui/material";
import logo from "../assets/logo.webp";
import ThemeSwitch from "./ThemeSwitch";
import SearchBox from "./SearchBox";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
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
      <Box component="img" src={logo} width={60} />
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={10} md={8}>
          <SearchBox onSearch={onSearch} />
        </Grid>
      </Grid>
      <ThemeSwitch />
    </Box>
  );
};

export default Navbar;
