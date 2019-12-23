import React from "react";
import { withStyles } from "@material-ui/core";
import {
  Dialog,
  Typography,
  IconButton
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from "@material-ui/icons/Close";
import ResourceForm from "./ResourceForm";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  resourceFormTitle: {
    color: "#4174FF",
    fontWeight: "bold",
    fontSize: 30
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography className={classes.resourceFormTitle}>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

function ResourceDialog({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title" onClose={handleClose}>
        What's your resource ?
      </DialogTitle>
      <DialogContent style={{ width: 600 }} dividers>
        <ResourceForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
}

export default ResourceDialog;
