import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <Box p={3}>
        <Typography variant="h1">Opps!</Typography>
        <Typography variant="h5">This page not exist!</Typography>
      </Box>
    </>
  );
};

export default Error;
