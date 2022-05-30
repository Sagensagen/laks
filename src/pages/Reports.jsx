import { React } from "react";
import backgroudnvideo from "../media/dronefotage.mp4";
import { PdfViewDouble } from "../components/PdfViewDouble";
import { Box, Card, CardMedia } from "@mui/material";

export const Reports = () => {
  return (
    <>
      {/* Desktop responsive pdf*/}
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          bgcolor: "rgba(0, 0, 0, 0.80)",

          height: "100vh",
          width: "100vw",
          color: "white",
        }}
        alignItems="center"
      >
        <Box
          justifyContent="center"
          margin="auto"
          display="flex"
          sx={{
            // width: "60%",
            zIndex: 1000,
            bgcolor: "transparent",
          }}
        >
          <PdfViewDouble></PdfViewDouble>
        </Box>
      </Box>

      {/* Background vid. */}
      <Box display="flex" position="relative" sx={{ height: "100vh" }}>
        <Card sx={{ height: "100vh", zIndex: -1000 }}>
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
