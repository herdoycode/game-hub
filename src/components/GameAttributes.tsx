import { Grid, Typography } from "@mui/material";
import CriticScore from "./CriticScore";
import DefinationItem from "./DefinationItem";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <Grid container>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <DefinationItem term="Platform">
          {game.parent_platforms.map((p) => (
            <Typography key={p.platform.id}> {p.platform.name} </Typography>
          ))}
        </DefinationItem>
        <DefinationItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinationItem>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <DefinationItem term="Genres">
          {game.genres.map((g) => (
            <Typography key={g.id}> {g.name} </Typography>
          ))}
        </DefinationItem>
        <DefinationItem term="Publishers">
          {game.publishers.map((p) => (
            <Typography key={p.id}> {p.name} </Typography>
          ))}
        </DefinationItem>
      </Grid>
    </Grid>
  );
};

export default GameAttributes;
