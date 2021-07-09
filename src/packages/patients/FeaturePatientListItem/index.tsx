import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import AccountIcon from "@material-ui/icons/AccountCircle";

import { FeaturePatientListItemProps } from "./types";

const FeaturePatientListItem = React.memo(
  ({ data, onClick }: FeaturePatientListItemProps) => {
    return (
      <ListItem button onClick={() => onClick(data)}>
        <ListItemAvatar>
          <Avatar>
            <AccountIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={data.firstName + " " + data.lastName}
          secondary={data.email}
        />
      </ListItem>
    );
  }
);

export default FeaturePatientListItem;
