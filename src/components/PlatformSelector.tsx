import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { usePlatforms } from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
import usePlatform from "./../hooks/usePlatform";

const PlatformSelector = () => {
  const { data } = usePlatforms();
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  return (
    <Box sx={{ minWidth: 190 }} mr={2}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {selectedPlatform?.name || "Platform"}
        </InputLabel>
        <Select
          id="demo-simple-select"
          label={selectedPlatform?.name || "Platform"}
          defaultValue=""
        >
          {data?.results.map((p, i) => (
            <MenuItem
              key={i}
              value={p.name}
              onClick={() => setPlatformId(p.id)}
            >
              {p.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PlatformSelector;
