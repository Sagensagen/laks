import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  responsiveFontSizes,
} from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Sans-serif",
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
        <div className="main">
          {/* //{" "} */}
          {/* <Router> */}
          {/* //{" "} */}
          {/* <Routes> */}
          {/* // <Route path="/" element={<Home />} /> */}
          {/* //{" "} */}
          {/* </Routes> */}
          {/* //{" "} */}
          {/* </Router> */}
          {/* //{" "} */}
          <Home></Home>
        </div>{" "}
      </ThemeProvider>
    </>
  );
}

export default App;
