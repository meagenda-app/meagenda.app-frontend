import React from "react";
import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { useUser } from "../../hooks/User";
import { ThemeProps } from "./types";

const themeConfig = (theme: "dark" | "light") =>
  createMuiTheme({
    palette: {
      type: theme,
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

export default function Theme({ children }: ThemeProps) {
  const {
    user: { theme },
  } = useUser();

  return (
    <ThemeProvider theme={themeConfig(theme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
