import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: theme.custom.rightMenu.width,
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: theme.custom.rightMenu.width,
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      width: theme.custom.rightMenu.width,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
    },
  })
);
