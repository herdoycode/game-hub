import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { usePlatforms } from "../hooks/usePlatforms";
import useGameQueryStore from "../store";
import usePlatform from "./../hooks/usePlatform";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const { data } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  return (
    <Box component="div" sx={{ minWidth: 180 }} marginRight={2}>
      <FormControl fullWidth>
        <InputLabel>{selectedPlatform?.name || "Platforms"}</InputLabel>
        <Select
          value={selectedPlatform?.id}
          label={selectedPlatform?.name || "Platforms"}
        >
          {data?.results.map((p) => (
            <MenuItem onClick={() => setPlatformId(p.id)} value={p.id}>
              {p.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PlatformSelector;
