import { Box, Typography } from "@mui/material";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box
        mt={2}
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography variant="h1">Opps!</Typography>
          <Typography variant="h5">
            {isRouteErrorResponse(error)
              ? "This page does not exist."
              : "An unexpected error occurred."}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Error;
