import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import QuestionForm from "./QuestionForm";

function QuestionDialog({ open, handleClose, addQuestion }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        id="form-dialog-title"
        style={{ padding: "16px 24px 0px 24px" }}
      >
        Ask Question
      </DialogTitle>
      <DialogContent style={{ width: 600 }}>
        <QuestionForm addQuestion={addQuestion} handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
}

export default QuestionDialog;
