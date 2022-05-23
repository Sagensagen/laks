import React from "react";
import { useState } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Card, CardMedia, Button } from "@mui/material";

export const PdfViewDouble = () => {
  const collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: "base",
  });

  const [pdf] = useState(
    importPdf(require.context("../media/report/", false, /\.(png|jpe?g|svg)$/))
  );

  function importPdf(r) {
    let images = [];
    r.keys().map((item, index) => {
      images[index] = r(item);
    });
    images.sort(collator.compare);
    return images;
  }
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(2);

  const handlebrowseFwd = () => {
    setPage1(page1 + 2);
    setPage2(page2 + 2);
  };
  const handlebrowseBwd = () => {
    setPage1(page1 - 2);
    setPage2(page2 - 2);
  };

  return (
    <Card sx={{ display: "flex", borderRadius: 2 }}>
      <Box
        sx={{
          position: "relative",
          transition: "ease-in",
          transitionDuration: 2,
        }}
      >
        <CardMedia
          component="img"
          sx={{ transition: "ease-in", transitionDuration: 2 }}
          image={pdf[page1]}
        />
        {page1 !== 0 ? (
          <Button
            onClick={handlebrowseBwd}
            sx={{
              position: "absolute",
              bottom: "50%",
              left: 0,
              bgcolor: "rgba(0, 0, 0, 0.25)",
              color: "white",
              py: "10px",
              borderRadius: "2px",
            }}
          >
            <ArrowBackIosIcon></ArrowBackIosIcon>
          </Button>
        ) : null}
      </Box>

      <Box sx={{ position: "relative", borderLeft: 0 }}>
        <CardMedia component="img" image={pdf[page2]} />

        {page2 !== pdf.length ? (
          <Button
            onClick={handlebrowseFwd}
            sx={{
              position: "absolute",
              bottom: "50%",

              right: 0,
              bgcolor: "rgba(0, 0, 0, 0.50)",
              color: "white",
              py: "10px",
              borderRadius: "2px",
            }}
          >
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </Button>
        ) : null}
      </Box>
    </Card>
  );
};
