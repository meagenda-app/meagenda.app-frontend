/* eslint-disable @typescript-eslint/no-empty-function */
import { LeftMenu } from "../../LeftMenu";
import { NavBar } from "../../NavBar";
import { DefaultTemplateProps } from "./types";
import clsx from "clsx";
import React from "react";
import { useStyles } from "./styles";

export const DefaultTemplate = React.memo(
  (
    props: DefaultTemplateProps = {
      children: "",
      persistentLeftMenu: false,
      leftMenuExpanded: true,
      handleLeftMenu: () => {},
    }
  ) => {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <NavBar
          persistentLeftMenu={props.persistentLeftMenu}
          leftMenuExpanded={props.leftMenuExpanded}
          handleMenuLeft={props.handleLeftMenu}
        />
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
