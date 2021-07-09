import { Avatar, IconButton } from "@material-ui/core";
import clsx from "clsx";
import React, { useCallback } from "react";
import MenuUser from "../../account/FeatureMenuUser";
import { useUser } from "../../../contexts/hooks/User";
import { LeftMenu } from "../../structure/LeftMenu";
import { NavBar } from "../../structure/NavBar";
import { useStyles } from "./styles";
import { DefaultTemplateProps } from "./types";

export const DefaultTemplate = React.memo(
  (
    props: DefaultTemplateProps = {
      children: "",
      persistentLeftMenu: false,
      title: "",
    }
  ) => {
    const classes = useStyles();
    const {
      user: { leftMenuExpanded },
      setUser,
    } = useUser();

    const handleLeftMenu = useCallback(() => {
      setUser({
        leftMenuExpanded: !leftMenuExpanded,
      });
    }, [leftMenuExpanded]);

    return (
      <div className={classes.root}>
        <NavBar
          persistentLeftMenu={props.persistentLeftMenu}
          leftMenuExpanded={leftMenuExpanded}
          handleMenuLeft={handleLeftMenu}
          title={props.title}
        >
          <MenuUser />
        </NavBar>
        <LeftMenu
          persistentLeftMenu={props.persistentLeftMenu}
          expanded={leftMenuExpanded}
          handleLeftMenu={handleLeftMenu}
        />
        <main
          className={
            props.persistentLeftMenu
              ? clsx(classes.contentPersistent, {
                  [classes.contentShift]: leftMenuExpanded,
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
