/* eslint-disable @typescript-eslint/no-empty-function */
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { DateRange, LibraryBooks, PowerSettingsNew } from "@material-ui/icons";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import clsx from "clsx";
import React from "react";
import ButtonLink from "../ButtonLink";
import { useStyles } from "./styles";
import { LeftMenuProps } from "./types";

export const LeftMenu = React.memo(
  (
    props: LeftMenuProps = {
      persistentLeftMenu: false,
      expanded: false,
      handleLeftMenu: () => {},
    }
  ) => {
    const classes = useStyles();

    return (
      <Drawer
        className={
          props.persistentLeftMenu
            ? classes.drawer
            : clsx(classes.drawer, {
                [classes.drawerOpen]: props.expanded,
                [classes.drawerClose]: !props.expanded,
              })
        }
        classes={
          props.persistentLeftMenu
            ? {
                paper: classes.drawerPaper,
              }
            : {
                paper: clsx({
                  [classes.drawerOpen]: props.expanded,
                  [classes.drawerClose]: !props.expanded,
                }),
              }
        }
        open={props.expanded}
        anchor="left"
        variant={props.persistentLeftMenu ? "persistent" : "permanent"}
        // className={clsx(classes.drawer, {
        //   [classes.drawerOpen]: props.expanded,
        //   [classes.drawerClose]: !props.expanded,
        // })}
        // classes={{
        //   paper: clsx({
        //     [classes.drawerOpen]: props.expanded,
        //     [classes.drawerClose]: !props.expanded,
        //   }),
        // }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={props.handleLeftMenu}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button component={ButtonLink} href="/schedule" key="Agenda">
            <ListItemIcon>
              <DateRange />
            </ListItemIcon>
            <ListItemText primary="Agenda" />
          </ListItem>

          <ListItem
            button
            component={ButtonLink}
            href="/patients"
            key="Pacientes"
          >
            <ListItemIcon>
              <LibraryBooks />
            </ListItemIcon>
            <ListItemText primary="Pacientes" />
          </ListItem>

          <ListItem button key="Sair">
            <ListItemIcon>
              <PowerSettingsNew />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </List>
      </Drawer>
    );
  }
);
