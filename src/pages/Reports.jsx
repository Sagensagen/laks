import { React } from "react";
import backgroudnvideo from "../media/dronefotage.mp4";
import { PdfViewDouble } from "../components/PdfViewDouble";
import { Box, Card, CardMedia } from "@mui/material";

export const Reports = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          // bgcolor: "rgba(255, 255, 255, 0.15)",
          bgcolor: "rgba(0, 0, 0, 0.80)",

          height: "90vh",
          width: "100%",
          color: "white",
        }}
        alignItems="center"
      >
        <Box
          margin="auto"
          display="flex"
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "85%",
              lg: "80%",
              xl: "75%",
            },
            // width: "60%",
            zIndex: 1000,
            bgcolor: "transparent",
          }}
        >
          <PdfViewDouble></PdfViewDouble>
        </Box>
      </Box>

      <Box display="flex" position="relative" sx={{ height: "90vh" }}>
        <Card sx={{ height: "90vh", zIndex: -1000 }}>
          <CardMedia
            component="video"
            autoPlay
            muted
            loop
            src={backgroudnvideo}
          ></CardMedia>
        </Card>
      </Box>
    </>
  );
};
