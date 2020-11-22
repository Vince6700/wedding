import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: "Montserrat, Arial",
    h1: {
      fontSize: "8rem",
      fontFamily: "Bilbo Swash Caps, Montserrat, Arial",
      "@media (max-width:600px)": {
        fontSize: "5rem",
      },
    },
    h3: {
      fontSize: "2rem",
      fontFamily: "Montserrat, Arial",
      "@media (max-width:600px)": {
        fontSize: "1.8rem",
      },
    },
  },
  palette: {
    primary: {
      main: "#8fbd9f",
      light: "#c0f0d0",
      dark: "#618d71",
    },
    text: {
      primary: "#FFF",
      secondary: "#EEE",
    },
  },
  overrides: {
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "rgba(238, 238, 238, 0.3)",
      },
    },
  },
});

export default theme;
