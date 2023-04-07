import { Typography } from "@mui/material";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;

  return <Typography variant="h2">{heading}</Typography>;
};

export default GameHeading;
