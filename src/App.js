import "./App.css";
import "./test.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  responsiveFontSizes,
} from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Railway",
    },
    palette: {
      primary: { main: "rgba(255,255,255,.8)" },
      text: { primary: "rgba(255,255,255,.8)", secondary: "rgba(0,0,0,.8)" },

      background: {
        paper: "#1c1c1c",
      },
    },
  });
  let responsiveTheme = responsiveFontSizes(theme);
  return (
    <>
      <ThemeProvider theme={responsiveTheme}>
        <CssBaseline></CssBaseline>
        <div classNameName="main">
          <LandingPage></LandingPage>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
