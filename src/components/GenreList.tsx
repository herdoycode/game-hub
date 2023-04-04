import { CircularProgress, Stack } from "@mui/material";
import { useGenres } from "../hooks/useGenres";
import {
  List,
  ListItem,
  ListItemAvatar,
  Box,
  ListItemText,
} from "@mui/material";
import getOptimizeImg from "../services/ima-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  return (
    <>
      {isLoading ? (
        <GenreSkeleton />
      ) : (
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            cursor: "pointer",
          }}
        >
          {data.map((genre) => (
            <ListItem key={genre.id} sx={{ margin: "-5px 0px" }}>
              <ListItemAvatar>
                <Box
                  component="img"
                  src={getOptimizeImg(genre.image_background)}
                  width={35}
                  height={30}
                  borderRadius={1}
                  sx={{ objectFit: "cover" }}
                ></Box>
              </ListItemAvatar>
              <ListItemText primary={genre.name} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
