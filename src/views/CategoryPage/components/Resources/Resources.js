import React from "react";
import { inject, observer } from "mobx-react";
// core components
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import image from "assets/img/default-avatar.png";

import ResourceDialog from "./components/ResourceDialog";

function Resources({ resources, addResource }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          <button className="ui button primary" onClick={handleClickOpen}>
            Add Resource
          </button>
          <ResourceDialog
            addResource={addResource}
            open={open}
            handleClose={handleClose}
          />
        </div>
        <div style={{ padding: "0px 40px" }}>
          <List>
            {resources &&
              resources.map(resource => (
                <div key={resource.id}>
                  <ListItem style={{ flex: 1 }}>
                    <div style={{ flex: 0.95 }}>
                      <ListItemText
                        primary={resource.title}
                        secondary={resource.description}
                      />
                      <a
                        href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.link}
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
                </div>
              ))}
          </List>
        </div>
      </div>
    </>
  );
}

export default inject("store")(observer(Resources));
