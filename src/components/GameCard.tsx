import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Box padding={1}>
      <Card sx={{ borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          image={game.background_image}
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
            <Box
              sx={{
                borderRadius: "20px",
                padding: "0px 15px",
                width: "12px",
                fontSize: "12px",
                border: "1px solid green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0, 109, 0, 0.1)",
              }}
            >
              {game.metacritic}
            </Box>
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default GameCard;
