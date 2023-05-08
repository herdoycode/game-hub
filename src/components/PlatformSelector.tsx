import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Platform } from "../hooks/useGames";
import { usePlatforms } from "../hooks/usePlatforms";
import usePlatform from "./../hooks/usePlatform";

interface Props {
  onSelectePlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectePlatform, selectedPlatformId }: Props) => {
  const { data } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  return (
    <Box component="div" sx={{ minWidth: 180 }} marginRight={2}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {selectedPlatform?.name || "Platform"}
        </InputLabel>
        <Select label="Platforms" defaultValue="">
          {data?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectePlatform(platform)}
              value={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PlatformSelector;
