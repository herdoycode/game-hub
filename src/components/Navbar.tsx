import { Box } from "@mui/material";
import logo from "../assets/logo.webp";
import ThemeSwitch from "./ThemeSwitch";

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
      marginBottom={2}
    >
      <Box component="img" src={logo} width={60} />
      <ThemeSwitch />
    </Box>
  );
};

export default Navbar;
