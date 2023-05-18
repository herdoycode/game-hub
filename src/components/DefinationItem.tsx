import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinationItem = ({ term, children }: Props) => {
  return (
    <Box my={5}>
      <Typography
        component="dt"
        fontSize="22"
        fontWeight="bold"
        color="#757575"
      >
        {term}
      </Typography>
      <Typography component="dd">{children}</Typography>
    </Box>
  );
};

export default DefinationItem;
