import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@material-ui/core";
import {
  AvForm,
  AvField,
  AvRadioGroup,
  AvRadio
} from "availity-reactstrap-validation";

function QuestionDialog({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        id="form-dialog-title"
        style={{ padding: "16px 24px 0px 24px" }}
      >
        Ask Question
      </DialogTitle>
      <DialogContent style={{ width: 600 }}>
        <AvForm>
          <AvField
            errorMessage="This Fiels is required"
            name="question_title"
            placeholder="Question title"
            type="text"
            required
          />
          <AvField
            errorMessage="This Fiels is required"
            name="question_description"
            placeholder="Question Description"
            type="text"
            required
          />
          <AvRadioGroup
            inline
            name="category"
            label="category"
            required
          >
            <AvRadio label="English" value="English" />
            <AvRadio label="Web development" value="Web development" />
            <AvRadio label="Mobile development" value="Mobile development" />
          </AvRadioGroup>
        </AvForm>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Ask
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default QuestionDialog;
