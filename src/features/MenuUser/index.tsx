import {
  Avatar,
  Divider,
  IconButton,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useState } from "react";
// import { useUser } from "../../hooks/User";
import { FeatureUserMenuProps } from "./types";

export default function MenuUser({}: FeatureUserMenuProps) {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  // const { user: { id } } = useUser();

  const handleClose = () => {
    setAnchor(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  return (
    <>
      <IconButton
        aria-label="display more actions"
        edge="end"
        color="inherit"
        onClick={handleClick}
        size="small"
      >
        <Avatar sizes="small" src="https://ui-avatars.com/api/?name=henrique" />
      </IconButton>
      <Menu
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem>
          <ListItemAvatar>
            <Avatar
              alt="henrique weiand"
              src="https://ui-avatars.com/api/?name=henrique"
            />
          </ListItemAvatar>
          <ListItemText
            primary={"henrique weiand"}
            secondary={"henriqueweiand@gmail.com"}
          />
        </MenuItem>
        <Divider light />
        <MenuItem>
          <ListItemText
            primary={"Rede Mesquita"}
            secondary={"Centro - Brusque/SC"}
          />
        </MenuItem>
        <MenuItem>Sair</MenuItem>
      </Menu>
    </>
  );
}
