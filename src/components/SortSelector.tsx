import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-ratting", label: "Average ratting" },
  ];

  return (
    <Box sx={{ minWidth: 190 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> Order by </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Order by"
          defaultValue=""
        >
          {sortOrders.map((sortOrder) => (
            <MenuItem
              key={sortOrder.label}
              value={sortOrder.label}
              onClick={() => setSortOrder(sortOrder.value)}
            >
              {sortOrder.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelector;
