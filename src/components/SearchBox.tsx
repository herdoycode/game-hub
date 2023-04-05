import { Box, Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        sx={{ position: "relative", borderRadius: "30px", overflow: "hidden" }}
      >
        <Box
          sx={{
            padding: "0px 15px",
            height: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SearchIcon />
        </Box>
        <InputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          sx={{
            width: "100%",
            padding: "10px",
            paddingLeft: "45px",
          }}
        />
      </Paper>
    </Box>
  );
};

export default SearchBox;
