import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";

function ResourceDialog({ open, handleClose }) {
  const [category, setCategory] = React.useState("");

  const handleChange = event => {
    setCategory(event.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle
        id="form-dialog-title"
        style={{ padding: "16px 24px 0px 24px" }}
      >
        Add Resource
      </DialogTitle>
      <DialogContent style={{ width: 500 }}>
        <TextField
          margin="dense"
          id="resource_title"
          label="Resource title"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="resource_description"
          label="Resource description"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="resource_link"
          label="Resource link"
          type="text"
          fullWidth
        />
        <FormControl style={{ minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            onChange={handleChange}
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Web Development">Web Development</MenuItem>
            <MenuItem value="Mobile Development">Mobile Development</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ResourceDialog;
