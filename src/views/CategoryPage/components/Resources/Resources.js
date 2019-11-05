import React from "react";
// core components
import { List, ListItem, ListItemText, Divider, Button } from "@material-ui/core";
import image from "assets/img/default-avatar.png";

function Resources() {
  return (
    <>
      <div
        className="ml-auto mr-auto text-center"
        style={{ padding: "50px 0px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 55px",
            alignItems: "baseline"
          }}
        >
          <h2 className="title">Resources</h2>
          <Button
            variant="contained"
            color="primary"
            style={{ height: "max-content" }}
          >
            Add Resource
          </Button>
        </div>
        <div style={{ padding: "0px 40px" }}>
          <List>
            <ListItem style={{ flex: 1 }}>
              <div style={{ flex: 0.95 }}>
                <ListItemText
                  primary="The Complete Node.js Developer Course"
                  secondary="Learn Node.js by building real-world applications with Node, Express, MongoDB, Jest, and more!"
                />
                <a
                  href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.udemy.com/course/the-complete-nodejs-developer-course-2/
                </a>
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
    </>
  );
}

export default Resources;
