import { Avatar, IconButton } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import MenuUser from "../../../features/MenuUser";
import { LeftMenu } from "../../LeftMenu";
import { NavBar } from "../../NavBar";
import { useStyles } from "./styles";
import { DefaultTemplateProps } from "./types";

export const DefaultTemplate = React.memo(
  (
    props: DefaultTemplateProps = {
      children: "",
      persistentLeftMenu: false,
      leftMenuExpanded: true,
      handleLeftMenu: () => {},
      title: "",
    }
  ) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <NavBar
          persistentLeftMenu={props.persistentLeftMenu}
          leftMenuExpanded={props.leftMenuExpanded}
          handleMenuLeft={props.handleLeftMenu}
          title={props.title}
        >
          <MenuUser />
        </NavBar>
        <LeftMenu
          persistentLeftMenu={props.persistentLeftMenu}
          expanded={props.leftMenuExpanded}
          handleLeftMenu={props.handleLeftMenu}
        />
        <main
          className={
            props.persistentLeftMenu
              ? clsx(classes.contentPersistent, {
                  [classes.contentShift]: props.leftMenuExpanded,
                })
              : classes.content
          }
        >
          <div className={classes.toolbar} />
          {props.children}
        </main>
      </div>
    );
  }
);
