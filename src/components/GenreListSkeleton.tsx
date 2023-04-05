import { Box, Skeleton } from "@mui/material";

const GenreSkeleton = () => {
  const lists = Array.from(Array(16).keys());
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
