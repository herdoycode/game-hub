import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getOptimizeImg from "../services/ima-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Box padding={1}>
      <Card sx={{ borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="Cart thumbnail"
          image={getOptimizeImg(game.background_image)}
        />

        <CardActions>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            marginTop={1}
          >
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </Box>
        </CardActions>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: "700" }}
          >
            {game.name}
          </Typography>
          <Emoji rating={game.rating_top} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default GameCard;
