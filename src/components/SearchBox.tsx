import { Box, Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { FormEvent, useRef, useState } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBox = ({ onSearch }: Props) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(text);
  };

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
        <form onSubmit={handleSubmit}>
          <InputBase
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{
              width: "100%",
              padding: "10px",
              paddingLeft: "45px",
            }}
          />
        </form>
      </Paper>
    </Box>
  );
};

export default SearchBox;
