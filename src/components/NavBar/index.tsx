/* eslint-disable @typescript-eslint/no-empty-function */
import { Hidden, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { NavBarProps } from "./types";
import clsx from "clsx";
import React from "react";
import { useStyles } from "./styles";

export const NavBar = React.memo(
  (
    props: NavBarProps = {
      persistentLeftMenu: false,
      leftMenuExpanded: false,
      handleMenuLeft: () => {},
      title: "",
    }
  ) => {
    const classes = useStyles();

    return (
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.leftMenuExpanded,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleMenuLeft}
            edge="start"
            className={
              !props.persistentLeftMenu &&
              clsx(classes.menuButton, {
                [classes.hide]: props.leftMenuExpanded,
              })
            }
          >
            <MenuIcon />
          </IconButton>

          {!!props.title && (
            <Typography
              variant="h6"
              noWrap
              style={{ marginRight: 15, flexGrow: 1 }}
            >
              {props.title}
            </Typography>
          )}
          {props.children}
        </Toolbar>
      </AppBar>
    );
  }
);
