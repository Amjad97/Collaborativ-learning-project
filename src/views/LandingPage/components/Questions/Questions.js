import React from "react";
// core components
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider
} from "@material-ui/core";
import image from "assets/img/default-avatar.png";

function Questions() {
  return (
    <>
      <div className="ml-auto mr-auto text-center" style={{ padding: '50px 0px' }}>
        <h2 className="title">Top Questions</h2>
        <div style={{ padding: "0px 40px" }}>
          <List>
            <ListItem>
              <div style={{ display: "block", flex: 1 }}>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>votes</div>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>answers</div>
              </div>
              <ListItemText
                primary="Question Title"
                secondary="lorem ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam."
              />
              <ListItemSecondaryAction>
                <img
                  src={image}
                  style={{ width: "35px", height: "35px" }}
                  alt="avatar"
                />
                <div style={{ fontSize: "10px", color: "grey" }}>JOHN DOE</div>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <div style={{ display: "block", flex: 1 }}>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>votes</div>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>answers</div>
              </div>
              <ListItemText
                primary="Question Title"
                secondary="lorem ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam."
              />
              <ListItemSecondaryAction>
                <img
                  src={image}
                  style={{ width: "35px", height: "35px" }}
                  alt="avatar"
                />
                <div style={{ fontSize: "10px", color: "grey" }}>JOHN DOE</div>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <div style={{ display: "block", flex: 1 }}>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>votes</div>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>answers</div>
              </div>
              <ListItemText
                primary="Question Title"
                secondary="lorem ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam."
              />
              <ListItemSecondaryAction>
                <img
                  src={image}
                  style={{ width: "35px", height: "35px" }}
                  alt="avatar"
                />
                <div style={{ fontSize: "10px", color: "grey" }}>JOHN DOE</div>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <div style={{ display: "block", flex: 1 }}>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>votes</div>
                <div style={{ textAlign: "center" }}>0</div>
                <div style={{ textAlign: "center" }}>answers</div>
              </div>
              <ListItemText
                primary="Question Title"
                secondary="lorem ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
            aliquyam erat, sed diam."
              />
              <ListItemSecondaryAction>
                <img
                  src={image}
                  style={{ width: "35px", height: "35px" }}
                  alt="avatar"
                />
                <div style={{ fontSize: "10px", color: "grey" }}>JOHN DOE</div>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </List>
        </div>
      </div>
    </>
  );
}

export default Questions;
