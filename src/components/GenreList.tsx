import { CircularProgress, Stack } from "@mui/material";
import { Genre, useGenres } from "../hooks/useGenres";
import {
  List,
  ListItem,
  ListItemAvatar,
  Box,
  ListItemText,
} from "@mui/material";
import getOptimizeImg from "../services/ima-url";
import GenreSkeleton from "./GenreListSkeleton";

interface Props {
  onSelecteGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelecteGenre }: Props) => {
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
          }}
        >
          {data.map((genre) => (
            <ListItem
              key={genre.id}
              sx={{ margin: "-5px 0px", cursor: "pointer" }}
              onClick={() => onSelecteGenre(genre)}
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
              <ListItemText primary={genre.name} />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
