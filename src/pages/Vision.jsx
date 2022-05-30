import { React } from "react";

import { Box, Card, CardMedia, Typography, Paper } from "@mui/material";
import salmonimg from "../media/salmon.jpg";
import "../App.css";

export const Vision = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          bgcolor: "rgba(0, 0, 0, 0.13)",
          height: "100vh",
        }}
        alignItems="center"
      >
        <Box
          // alignItems="center"
          // margin="auto"
          display="flex"
          sx={{
            // width: "80%",
            zIndex: 1000,
          }}
        >
          <Paper
            sx={{
              ml: "2rem",
              bgcolor: "rgba(0,0,0,0.0)",
              color: "text.secondary",
              // height: "60%",
              width: "50%",
            }}
            elevation={0}
          >
            <Typography variant="h3">Vision</Typography>
            <Typography variant="h6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Typography>
          </Paper>
        </Box>
      </Box>

      <Card
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          zIndex: -1000,
        }}
      >
        <CardMedia component="img" src={salmonimg}></CardMedia>
      </Card>
    </>
  );
};
