import { Box } from "@mui/material";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <Box
      sx={{
        borderRadius: "5px",
        padding: "2px 15px",
        width: "12px",
        fontSize: "12px",
        border: "1px solid green",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "green",
        background: "rgba(109,200,73,.1)",
      }}
    >
      {score ? score : 0}
    </Box>
  );
};

export default CriticScore;
