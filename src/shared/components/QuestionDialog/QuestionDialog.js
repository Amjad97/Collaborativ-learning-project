import React from "react";
import { withStyles } from "@material-ui/core";
import { Dialog, Typography, IconButton } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";
import QuestionForm from "./QuestionForm";

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
  questionFormTitle: {
    color: "#4174FF",
    fontWeight: "bold",
    fontSize: 30
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography className={classes.questionFormTitle}>{children}</Typography>
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

function QuestionDialog({ open, handleClose, addQuestion }) {
  return (
    <Dialog disableBackdropClick open={open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title" onClose={handleClose}>
        What's your question ?
      </DialogTitle>
      <DialogContent style={{ width: 600 }} dividers>
        <QuestionForm addQuestion={addQuestion} handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
}

export default QuestionDialog;
