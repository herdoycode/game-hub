import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box p={4}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
