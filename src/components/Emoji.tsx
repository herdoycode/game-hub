import { Box } from "@mui/material";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: any = {
    3: { src: meh, alt: "meh", width: 30 },
    4: { src: thumbsUp, alt: "recommended", width: 30 },
    5: { src: bullsEye, alt: "exceptional", width: 40 },
  };

  return <Box component="img" {...emojiMap[rating]} />;
};

export default Emoji;
