import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { usePlatforms } from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data } = usePlatforms();
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 200 }} padding={1} marginBottom={1}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> Platforms </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Platforms"
          onChange={handleChange}
        >
          {data.map((item) => (
            <MenuItem key={item.id} value={10}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PlatformSelector;
