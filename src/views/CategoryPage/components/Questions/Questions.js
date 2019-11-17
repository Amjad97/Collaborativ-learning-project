import React from "react";
// core components
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Button
} from "@material-ui/core";
import history from "../../../../history";
import image from "assets/img/default-avatar.png";

import QuestionDialog from "./components/QuestionDialog";

function Questions() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div
        style={{ padding: "50px 0px" }}
        onClick={() => history.push("/question-page")}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 55px",
            alignItems: "baseline"
          }}
        >
          <h2 className="title">Questions</h2>
          <Button
            variant="contained"
            color="primary"
            style={{ height: "max-content" }}
            onClick={handleClickOpen}
          >
            Ask Question
          </Button>
          <QuestionDialog open={open} handleClose={handleClose} />
        </div>
        <div style={{ padding: "0px 40px" }}>
          <List>
            <ListItem style={{ flex: 1 }}>
              <div style={{ display: "block", flex: 0.1 }}>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>votes</div>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>answers</div>
              </div>
              <div style={{ flex: 0.85 }}>
                <ListItemText
                  primary="Question Title"
                  secondary="lorem ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam.  lorem ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam.  lorem ipsum"
                />
                <div
                  style={{
                    backgroundColor: "grey",
                    padding: 10,
                    width: "fit-content",
                    margin: 5,
                    borderRadius: 10,
                    color: "white",
                    fontSize: 12
                  }}
                >
                  Web Development
                </div>
              </div>
              <div
                style={{
                  flex: 0.05,
                  display: "grid",
                  justifyContent: "center"
                }}
              >
                <div>
                  <img
                    src={image}
                    style={{ width: "35px", height: "35px", margin: 10 }}
                    alt="avatar"
                  />
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "grey"
                  }}
                >
                  JOHN DOE
                </div>
              </div>
            </ListItem>
            <Divider />
            <ListItem style={{ flex: 1 }}>
              <div style={{ display: "block", flex: 0.1 }}>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>votes</div>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>answers</div>
              </div>
              <div style={{ flex: 0.85 }}>
                <ListItemText
                  primary="Question Title"
                  secondary="lorem ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam.  lorem ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam.  lorem ipsum"
                />
                <div
                  style={{
                    backgroundColor: "grey",
                    padding: 10,
                    width: "fit-content",
                    margin: 5,
                    borderRadius: 10,
                    color: "white",
                    fontSize: 12
                  }}
                >
                  Web Development
                </div>
              </div>
              <div
                style={{
                  flex: 0.05,
                  display: "grid",
                  justifyContent: "center"
                }}
              >
                <div>
                  <img
                    src={image}
                    style={{ width: "35px", height: "35px", margin: 10 }}
                    alt="avatar"
                  />
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "grey"
                  }}
                >
                  JOHN DOE
                </div>
              </div>
            </ListItem>
            <Divider />
            <ListItem style={{ flex: 1 }}>
              <div style={{ display: "block", flex: 0.1 }}>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>votes</div>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>answers</div>
              </div>
              <div style={{ flex: 0.85 }}>
                <ListItemText
                  primary="Question Title"
                  secondary="lorem ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam.  lorem ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam.  lorem ipsum"
                />
                <div
                  style={{
                    backgroundColor: "grey",
                    padding: 10,
                    width: "fit-content",
                    margin: 5,
                    borderRadius: 10,
                    color: "white",
                    fontSize: 12
                  }}
                >
                  Web Development
                </div>
              </div>
              <div
                style={{
                  flex: 0.05,
                  display: "grid",
                  justifyContent: "center"
                }}
              >
                <div>
                  <img
                    src={image}
                    style={{ width: "35px", height: "35px", margin: 10 }}
                    alt="avatar"
                  />
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "grey"
                  }}
                >
                  JOHN DOE
                </div>
              </div>
            </ListItem>
            <Divider />
            <ListItem style={{ flex: 1 }}>
              <div style={{ display: "block", flex: 0.1 }}>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>votes</div>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>answers</div>
              </div>
              <div style={{ flex: 0.85 }}>
                <ListItemText
                  primary="Question Title"
                  secondary="lorem ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam.  lorem ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam.  lorem ipsum"
                />
                <div
                  style={{
                    backgroundColor: "grey",
                    padding: 10,
                    width: "fit-content",
                    margin: 5,
                    borderRadius: 10,
                    color: "white",
                    fontSize: 12
                  }}
                >
                  Web Development
                </div>
              </div>
              <div
                style={{
                  flex: 0.05,
                  display: "grid",
                  justifyContent: "center"
                }}
              >
                <div>
                  <img
                    src={image}
                    style={{ width: "35px", height: "35px", margin: 10 }}
                    alt="avatar"
                  />
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "grey"
                  }}
                >
                  JOHN DOE
                </div>
              </div>
            </ListItem>
            <Divider />
          </List>
        </div>
      </div>
  );
}

export default Questions;
