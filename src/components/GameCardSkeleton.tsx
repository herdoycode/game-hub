import * as React from "react";
import { Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

export default function GameCardSkeleton() {
  const length = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <React.Fragment>
      <Grid container>
        {length.map((l) => (
          <Grid item xs={12} sm={6} md={4} lg={3} padding={1} key={l}>
            <Card sx={{ width: "100%", borderRadius: 2 }}>
              <Skeleton
                sx={{ height: 170, width: "100%" }}
                animation="wave"
                variant="rectangular"
              />

              <CardContent>
                <React.Fragment>
                  <Box sx={{ display: "flex" }}>
                    <Skeleton
                      animation="wave"
                      height={35}
                      style={{ marginBottom: 6, flex: 4 }}
                    />
                    <Box sx={{ flex: 3 }}></Box>
                    <Skeleton
                      animation="wave"
                      height={35}
                      style={{ marginBottom: 6, flex: 1 }}
                    />
                  </Box>
                  <Skeleton
                    animation="wave"
                    height={35}
                    style={{ marginBottom: 6, flex: 1 }}
                  />
                </React.Fragment>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
