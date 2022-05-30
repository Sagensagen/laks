import React from "react";
import { Grid, Box, Typography, Paper, IconButton, Stack } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import NewspaperIcon from "@mui/icons-material/Newspaper";
export const FooterNavigation = () => {
  return (
    <Box
      display="flex"
      position="relative"
      sx={{
        backgroundColor: "#1c1c1c",

        margin: 0,
        bottom: 0,
        // height: "10vh",
      }}
      alignContent="flex-end"
    >
      <Grid container spacing={0} sx={{ alignContent: "center" }}>
        <Grid
          item
          sx={{
            display: {
              xs: "none",
              sm: "none",
              lg: "flex",
              xl: "flex",
            },
          }}
          xs={6}
          md={8}
        >
          <Grid container xs={12}>
            <Grid item xs={6}>
              <Paper
                sx={{
                  // height: "200%",
                  display: "flex",
                  bgcolor: "transparent",
                  justifyContent: "center",
                }}
                elevation={0}
              >
                <Stack>
                  <Typography variant="h6">Gratanglaks AS</Typography>

                  <Typography variant="body2">Kystkulturveien 1747</Typography>
                  <Typography variant="body2">9470 Gratangen</Typography>
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{
                  // height: "200%",
                  display: "flex",
                  bgcolor: "transparent",
                  justifyContent: "center",
                }}
                elevation={0}
              >
                <Stack>
                  <Typography variant="h6">Moloen AS</Typography>

                  <Typography variant="body2">Strandvegen 73</Typography>
                  <Typography variant="body2">9007 Tromsø</Typography>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper
            sx={{
              // height: "200%",
              display: "flex",
              bgcolor: "transparent",
              justifyContent: "center",
            }}
            elevation={0}
          >
            <IconButton
              size="large"
              sx={{ color: "white" }}
              aria-label="Example"
            >
              <InstagramIcon sx={{ fontSize: 32 }}></InstagramIcon>
            </IconButton>
            <IconButton
              size="large"
              sx={{ color: "white" }}
              aria-label="Example"
            >
              <FacebookIcon sx={{ fontSize: 32 }}></FacebookIcon>
            </IconButton>
            <IconButton
              size="large"
              sx={{ color: "white" }}
              aria-label="Example"
            >
              <NewspaperIcon sx={{ fontSize: 32 }}></NewspaperIcon>
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
