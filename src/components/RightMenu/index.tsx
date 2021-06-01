/* eslint-disable @typescript-eslint/no-empty-function */
import Drawer from "@material-ui/core/Drawer";
import { RightMenuProps } from "./types";
import clsx from "clsx";
import React from "react";
import { useStyles } from "./styles";

export const RightMenu = React.memo(
  ({
    children,
    expanded = false,
    handleRightMenu = () => {},
  }: RightMenuProps) => {
    const classes = useStyles();

    return (
      <Drawer
        onClose={handleRightMenu}
        anchor="right"
        open={expanded}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: expanded,
          [classes.drawerClose]: !expanded,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: expanded,
            [classes.drawerClose]: !expanded,
          }),
        }}
      >
        {children}
      </Drawer>
    );
  }
);
