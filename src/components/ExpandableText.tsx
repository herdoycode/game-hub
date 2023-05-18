import { Button, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit)
    return <Typography component="p">{children}</Typography>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Typography component="p">
      {summary}
      <Button size="small" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Typography>
  );
};

export default ExpandableText;
