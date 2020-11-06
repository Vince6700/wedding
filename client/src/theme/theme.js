import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: "montserrat, Arial",
    h1: {
      fontSize: "5rem",
      fontFamily: "Bilbo-swash-caps, Montserrat, Arial",
    },
  },
  palette: {
    text: {
      primary: "#FFF",
      secondary: "#EEE",
    },
  },
});

export default theme;
