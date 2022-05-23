import React from "react";
import { useState, useEffect } from "react";
import backgroudnvideo from "../media/drone22.mp4";
import wavesImg from "../media/wavesImg.jpg";

import { Box, Card, CardMedia, Typography, Grid, Divider } from "@mui/material";

const data = [
  {
    title: "Matvaretrygghet",
    text: "  Vi i Gratanglaks er opptatt av at maten vi produserer skal væretrygg å spise. Den skal være sporbar fra egg til konsument. Vårproduksjon er underlagt strenge kontroller og grenseverdier.Biologiske og kjemiske stoffer i matvarer blir vurdert systematiskgjennom produksjonen. Vi er underlagt mange krav og forskriftersom går på mattrygghet. Mattilsynet tar jevnlig ut prøver som bliranalysert. Gratanglaks kjører sporingstester minst 2 ganger årligfor å kontrollere og sikre at sporing fungerer. Oppdrettsfiskenfår et fôr som er best mulig tilpasset dens behov for ernæring.Fôrprodusenter er veldig nøye med å velge ut råstoffer til sittfôr. De følger strenge regler og bestemmelser i forhold til hvilkefiskeslag som benyttes, samt at råstoffet skal komme frabærekraftige og kvote regulerte fiskerier. I henhold til norsk lovbruker ikke Gratanglaks genmodifiserte organismer i produksjon avlaks eller i fôr. Vil du vite mer om næringen? Besøk vårtvisningssenter, Blue Vision, på Kystens Hus i Tromsø!",
  },
  {
    title: "Hvem er vi?",
    text: "Gratanglaks er et lokaleid selskap som har produsert laks siden1984. Vår drift er i hovedsak lokalisert i Astafjorden ogVågsfjorden, med hovedkontor i Gratangen. Vårt mål er å drive enbærekraftig produksjon som sikrer god fiskevelferd, samtidig somvi skaper lokale og regionale ringvirkninger gjennomsysselsetting, vekst og nye prosjekter. Vi har i dag 8 konsesjonerhvor 1 av disse er visning og 2 er grønn, 2 ordinære og 3konsesjoner tilknyttet Seacalx. Lokalitetene våre ligger primært iGratangen og i Harstad kommune. Vi produserer rundt 7000 tonn laksårlig, med ca. 30 ansatte. Til tross for at vi er et lite selskapså har vi store visjoner og jobber kontinuerlig med utvikling ogforbedring. Vi har i samarbeid med flere oppdrettere i områdetbygd opp en helintegrert virksomhet fra smolt til slakt gjennomselskapene Astafjord Smolt, Håløy Havservice, Brønnbåt Nord ogAstafjord Slakteri. Les mer om selskapene her.",
  },
];

export const HomeComponent = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  useEffect(() => {
    const gameStartInternal = setInterval(() => {
      setSlideIdx((t) => (t + 1) % data.length);
    }, 10000);

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
              md: "none",
              lg: "none",
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
              md: "flex",
              lg: "flex",
              xl: "none",
            },
          }}
          component="img"
          src={wavesImg}
        ></CardMedia>
      </Card>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          height: "100vh",
          width: "100%",
          background: "linear-gradient(to bottom, transparent, #0c0c0c)",
        }}
      >
        <Box position="absolute" mt="20%">
          <Typography variant="h1">Gratang Laks?</Typography>
          <Divider position="absolute" sx={{ bgcolor: "gray" }}></Divider>
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
              lg: "none",
              xl: "flex",
            },
            alignContent: "flex-end",
          }}
        >
          <Grid item xs={4} align="center">
            <Typography variant="h4">Matvaretrygghet</Typography>
            <Divider sx={{ bgcolor: "gray" }}></Divider>
            <Typography variant="subtitle1">
              Vi i Gratanglaks er opptatt av at maten vi produserer skal være
              trygg å spise. Den skal være sporbar fra egg til konsument. Vår
              produksjon er underlagt strenge kontroller og grenseverdier.
              Biologiske og kjemiske stoffer i matvarer blir vurdert systematisk
              gjennom produksjonen. Vi er underlagt mange krav og forskrifter
              som går på mattrygghet. Mattilsynet tar jevnlig ut prøver som blir
              analysert. Gratanglaks kjører sporingstester minst 2 ganger årlig
              for å kontrollere og sikre at sporing fungerer. Oppdrettsfisken
              får et fôr som er best mulig tilpasset dens behov for ernæring.
              Fôrprodusenter er veldig nøye med å velge ut råstoffer til sitt
              fôr. De følger strenge regler og bestemmelser i forhold til hvilke
              fiskeslag som benyttes, samt at råstoffet skal komme fra
              bærekraftige og kvote regulerte fiskerier. I henhold til norsk lov
              bruker ikke Gratanglaks genmodifiserte organismer i produksjon av
              laks eller i fôr. Vil du vite mer om næringen? Besøk vårt
              visningssenter, Blue Vision, på Kystens Hus i Tromsø!
            </Typography>
          </Grid>
          <Grid item xs={4} align="center">
            <Typography variant="h4">Hvem er vi?</Typography>
            <Divider sx={{ bgcolor: "gray" }}></Divider>
            <Typography variant="subtitle1">
              Gratanglaks er et lokaleid selskap som har produsert laks siden
              1984. Vår drift er i hovedsak lokalisert i Astafjorden og
              Vågsfjorden, med hovedkontor i Gratangen. Vårt mål er å drive en
              bærekraftig produksjon som sikrer god fiskevelferd, samtidig som
              vi skaper lokale og regionale ringvirkninger gjennom
              sysselsetting, vekst og nye prosjekter. Vi har i dag 8 konsesjoner
              hvor 1 av disse er visning og 2 er grønn, 2 ordinære og 3
              konsesjoner tilknyttet Seacalx. Lokalitetene våre ligger primært i
              Gratangen og i Harstad kommune. Vi produserer rundt 7000 tonn laks
              årlig, med ca. 30 ansatte. Til tross for at vi er et lite selskap
              så har vi store visjoner og jobber kontinuerlig med utvikling og
              forbedring. Vi har i samarbeid med flere oppdrettere i området
              bygd opp en helintegrert virksomhet fra smolt til slakt gjennom
              selskapene Astafjord Smolt, Håløy Havservice, Brønnbåt Nord og
              Astafjord Slakteri. Les mer om selskapene her.
            </Typography>
          </Grid>
          <Grid item xs={4} align="center">
            <Typography variant="h4">Samfunn</Typography>
            <Divider sx={{ bgcolor: "gray" }}></Divider>
            <Typography variant="subtitle1">
              Gratanglaks er opptatt av å gi tilbake til lokalsamfunn og bidra
              til vekst. Her kan du se videoer fra ulike områder av vår
              virksomhet, samt lese om våre samarbeidspartnere.
            </Typography>
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
              lg: "flex",
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
