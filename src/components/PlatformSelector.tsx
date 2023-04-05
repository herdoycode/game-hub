import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Platform } from "../hooks/useGames";
import { usePlatforms } from "../hooks/usePlatforms";

interface Props {
  onSelectePlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectePlatform, selectedPlatform }: Props) => {
  const { data } = usePlatforms();

  return (
    <Box sx={{ maxWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {selectedPlatform?.name || "Platforms"}
        </InputLabel>
        <Select label="Platforms" defaultValue="">
          {data.map((platform) => (
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
