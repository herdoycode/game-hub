import { Box } from "@mui/material";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <Box
      component="video"
      controls
      src={first.data[480]}
      poster={first.preview}
      width={"100%"}
    ></Box>
  ) : null;
};

export default GameTrailer;
