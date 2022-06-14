import React from "react";
// import moloenLogoLight from "../media/MoloenSustainabilityPOS.png";
// import moloenLogoDark from "../media/MoloenSustainabilityNEG.png";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Tab,
  Tabs,
  useScrollTrigger,
  createTheme,
} from "@mui/material";

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "rgba(35,35,35,.95)" : "transparent",
      // color: trigger ? "white" : "black",
      transition: trigger ? "0.4s" : "0.4s",
      boxShadow: "none",
      padding: "10px 0px",
    },
  });
};

const ScrollToColor01 = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export const HeaderBar = (props) => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ScrollToColor01>
      <AppBar
        position="fixed"
        sx={{
          // height: "50px",
          display: "absolute",
        }}
      >
        <Toolbar sx={{ height: "7vh" }}>
          {" "}
          <a href="https://moloen.no/v4/">
            {/* <Box component="img" src={moloenLogoLight} width="8rem"></Box> */}
          </a>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "right",
              mr: "12vw",
              ml: "50vw",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" label="Hjem" onClick={props.intro} />
              <Tab value="two" label="Bærekraft" onClick={props.bærekraft} />
              <Tab value="three" label="Partnere" onClick={props.partnere} />
              <Tab value="three" label="Om Oss" onClick={props.whoIsMoloen} />
              <Tab value="four" label="Kontakt" onClick={props.contact} />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </ScrollToColor01>
  );
};
