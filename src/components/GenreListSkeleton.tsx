import { ListItem, List, Box, ListItemAvatar, Skeleton } from "@mui/material";

const GenreSkeleton = () => {
  const lists = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    12,
    13,
    14,
    15,
    "a",
    "b",
    "c",
    "d",
  ];
  return (
    <Box component="div" paddingX={2}>
      {lists.map((l) => (
        <Box
          key={l}
          component="div"
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Skeleton width={35} height={55} />
          <Skeleton width={"60%"} height={25} />
        </Box>
      ))}
    </Box>
  );
};

export default GenreSkeleton;
