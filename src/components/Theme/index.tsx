import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark", // remover quando n quiser dark
  },
  custom: {
    leftMenu: {
      width: 240,
    },
    rightMenu: {
      width: 650,
    },
  },
} as ThemeOptions);

export { theme };
