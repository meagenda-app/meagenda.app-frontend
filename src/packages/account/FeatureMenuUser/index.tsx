import {
  Avatar,
  Divider,
  IconButton,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import UpdateIcon from "@material-ui/icons/Update";
import React, { useState } from "react";
import FormsChangeNetwoking from "../forms/FormsChangeNetwoking";
// import { useUser } from "../../hooks/User";
import { FeatureUserMenuProps } from "./types";

export default function MenuUser({}: FeatureUserMenuProps) {
  const [changeNetworkingDialog, setchangeNetworkingDialog] =
    useState<boolean>(false);
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  // const { user: { id } } = useUser();

  const handleDialog = () => {
    setchangeNetworkingDialog(!changeNetworkingDialog);
    handleClose();
  };

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
        <MenuItem onClick={() => handleDialog()}>
          <ListItemIcon>
            <UpdateIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={"Trocar unidade"} />
        </MenuItem>
        <MenuItem>
          <ListItemText
            primary={"Rede Mesquita"}
            secondary={"Centro - Brusque/SC"}
          />
        </MenuItem>
        <Divider light />
        <MenuItem>Sair</MenuItem>
      </Menu>

      {changeNetworkingDialog && (
        <Dialog
          fullWidth={true}
          maxWidth="sm"
          open={changeNetworkingDialog}
          onClose={handleDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <FormsChangeNetwoking />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
