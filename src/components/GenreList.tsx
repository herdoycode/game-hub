import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import getOptimizeImg from "../services/ima-url";
import useGameQueryStore from "../store";
import GenreSkeleton from "./GenreListSkeleton";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const { data, isLoading } = useGenres();
  return (
    <>
      <Typography variant="h4" marginLeft={2}>
        {" "}
        Genres{" "}
      </Typography>
      {isLoading ? (
        <GenreSkeleton />
      ) : (
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          {data?.results.map((genre) => (
            <ListItem
              key={genre.id}
              sx={{ margin: "-5px 0px", cursor: "pointer" }}
              onClick={() => setGenreId(genre.id)}
            >
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
              <ListItemText
                primary={genre.name}
                sx={{
                  color: `${genreId === genre.id ? "darkgray" : ""}`,
                }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
