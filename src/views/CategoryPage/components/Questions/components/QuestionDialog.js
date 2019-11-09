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

function QuestionDialog({ open, handleClose }) {
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
        Ask Question
      </DialogTitle>
      <DialogContent style={{ width: 500 }}>
        <TextField
          margin="dense"
          id="question_title"
          label="Question title"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="question_description"
          label="Question Description"
          type="text"
          fullWidth
          multiline={true}
        />
        <FormControl style={{minWidth: 200}}>
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
          Ask
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default QuestionDialog;
