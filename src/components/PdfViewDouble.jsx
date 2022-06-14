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
    importPdf(
      require.context("../media/report_jpeg/", false, /\.(png|jpe?g|svg)$/)
    )
  );

  function importPdf(r) {
    let images = [];
    r.keys().map((item, index) => {
      images[index] = r(item);
    });
    images.sort(collator.compare);
    return images;
  }

  const [page1, setPage1] = useState(0);
  // const [page2, setPage2] = useState(2);

  const handlebrowseFwd = () => {
    {
      page1 == 0 ? setPage1(page1 + 1) : setPage1(page1 + 2);
    }
  };
  const handlebrowseBwd = () => {
    setPage1(page1 - 2);
    page1 == pdf.length - 1 ? setPage1(page1 - 1) : setPage1(page1 - 2);
    // setPage2(page2 - 2);
  };
  const handlebrowseFwdMobile = () => {
    setPage1(page1 + 1);
  };
  const handlebrowseBwdMobile = () => {
    setPage1(page1 - 1);
  };

  return (
    <>
      {/* Desktop responsive */}
      <Card
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          },
          bgcolor: "rgba(255, 255, 255, 0.95)",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            sx={{ transition: "ease-in", transitionDuration: 2 }}
            image={pdf[page1]}
          />
          {/* If page1 !=0 add BACK buttton. If==0, add forward button */}
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
          ) : (
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
          )}
        </Box>
        {page1 !== 0 ? (
          <Box sx={{ position: "relative", borderLeft: 0 }}>
            <CardMedia component="img" image={pdf[page1 + 1]} />

            {page1 == pdf.length - 1 ? null : (
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
            )}
          </Box>
        ) : null}
      </Card>

      {/* mobile responsive */}
      <Card
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "flex",
            lg: "none",
            xl: "none",
          },
          // width: "100vw",
          // height: "100vh",
          bgcolor: "transparent",
          borderRadius: 2,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            sx={{ bgcolor: "rgba(255, 255, 255, 1)" }}
            image={pdf[page1]}
          />
          {page1 !== 0 ? (
            <Button
              onClick={handlebrowseBwdMobile}
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
          ) : (
            <Button
              onClick={handlebrowseFwdMobile}
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
          )}
          {page1 !== pdf.length - 1 ? (
            <Button
              onClick={handlebrowseFwdMobile}
              sx={{
                position: "absolute",
                bottom: "50%",
                right: 0,
                bgcolor: "rgba(0, 0, 0, 0.25)",
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
    </>
  );
};
