import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";

import { TextFieldWithEditProps } from "./types";
import { useStyles } from "./styles";

const TextFieldWithEdit = ({
  defaultValue,
  label = "",
  handleEdit,
}: TextFieldWithEditProps) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <TextField
        fullWidth
        defaultValue={defaultValue}
        disabled
        variant="filled"
        label={label}
        color="secondary"
        type="text"
        helperText="Para alterar clique no lápis ao lado"
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        title="Alterar"
        onClick={() => handleEdit(true)}
      >
        <EditIcon />
      </IconButton>
    </Paper>
  );
};

export default TextFieldWithEdit;
