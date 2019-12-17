import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import ResourceForm from "./ResourceForm";

function ResourceDialog({ open, handleClose, addResource }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        id="form-dialog-title"
        style={{ padding: "16px 24px 0px 24px" }}
      >
        Add Resource
      </DialogTitle>
      <DialogContent style={{ width: 600 }}>
        <ResourceForm addResource={addResource} handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
}

export default ResourceDialog;
