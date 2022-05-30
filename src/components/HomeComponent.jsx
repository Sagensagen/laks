import React from "react";
import { useState, useEffect } from "react";
import backgroudnvideo from "../media/drone22.mp4";
import wavesImg from "../media/wavesImg.jpg";

import { Box, Card, CardMedia, Typography, Grid, Divider } from "@mui/material";

const data = [
  {
    title: "Matvaretrygghet",
    text: "  Vi i Gratanglaks er opptatt av at maten vi produserer skal væretrygg å spise. Den skal være sporbar fra egg til konsument. Vårproduksjon er underlagt strenge kontroller og grenseverdier.Biologiske og kjemiske stoffer i matvarer blir vurdert systematiskgjennom produksjonen. ",
  },
  {
    title: "Hvem er vi?",
    text: "Gratanglaks er et lokaleid selskap som har produsert laks siden1984. Vår drift er i hovedsak lokalisert i Astafjorden ogVågsfjorden, med hovedkontor i Gratangen. Vårt mål er å drive enbærekraftig produksjon som sikrer god fiskevelferd, samtidig somvi skaper lokale og regionale ringvirkninger gjennomsysselsetting, vekst og nye prosjekter. Vi har i dag 8 konsesjonerhvor 1 av disse er visning og 2 er grønn, 2 ordinære og 3konsesjoner tilknyttet Seacalx.",
  },
  {
    title: "Samfunn",
    text: "Gratanglaks er opptatt av å gi tilbake til lokalsamfunn og bidra til vekst. Her kan du se videoer fra ulike områder av vår virksomhet, samt lese om våre samarbeidspartnere.",
  },
];

export const HomeComponent = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  useEffect(() => {
    const gameStartInternal = setInterval(() => {
      setSlideIdx((t) => (t + 1) % data.length);
    }, 5000);

    return () => {
      clearInterval(gameStartInternal);
    };
  }, []);
  return (
    <Box display="flex" position="relative">
      <Card
        sx={{
          height: "100vh",
          zIndex: -1000,
        }}
      >
        <CardMedia
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
          component="video"
          autoPlay
          muted
          loop
          src={backgroudnvideo}
        ></CardMedia>
        <CardMedia
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
            },
            width: "100vw",
            height: "100vh",
          }}
          component="img"
          src={wavesImg}
        ></CardMedia>
      </Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          background: "linear-gradient(to bottom, transparent, #0c0c0c)",
        }}
      >
        <Box sx={{ alignContent: "center", mt: "10vh" }}>
          <Typography variant="h1" component="h1">
            Gratanglaks
          </Typography>
          <Divider sx={{ bgcolor: "gray" }}></Divider>
        </Box>

        <Grid
          container
          spacing={10}
          mb={5}
          ml={3}
          mr={12}
          xs={12}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
            alignContent: "flex-end",
          }}
        >
          <Grid item xs={4} align="center">
            <Typography variant="h4">{data[0].title}</Typography>
            <Divider sx={{ bgcolor: "gray" }}></Divider>
            <Typography variant="subtitle1">{data[0].text}</Typography>
          </Grid>
          <Grid item xs={4} align="center">
            <Typography variant="h4">{data[1].title}</Typography>
            <Divider sx={{ bgcolor: "gray" }}></Divider>
            <Typography variant="subtitle1">{data[1].text}</Typography>
          </Grid>
          <Grid item xs={4} align="center">
            <Typography variant="h4">{data[2].title}</Typography>
            <Divider sx={{ bgcolor: "gray" }}></Divider>
            <Typography variant="subtitle1">{data[2].text}</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={10}
          ml={3}
          mr={12}
          mb={5}
          xs={12}
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "none",
            },
            alignContent: "flex-end",
          }}
        >
          <Grid item xs={12} md={12} align="center">
            <Typography variant="h4">{data[slideIdx].title}</Typography>
            <Divider sx={{ bgcolor: "gray" }}></Divider>
            <Typography variant="subtitle1">{data[slideIdx].text}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
