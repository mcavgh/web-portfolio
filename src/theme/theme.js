import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: "#ff4901",
      main: "#ff4901",
      dark: "#82ada9",
    },
    secondary: {
      light: "#62727b",
      main: "#37474f",
      dark: "#102027",
    },
    background: {
      default: "#ff4901",
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',      
    ].join(','),
  },
});

export default theme;
