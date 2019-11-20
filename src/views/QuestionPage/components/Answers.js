import React from "react";

import { Divider, makeStyles } from "@material-ui/core";
import image from "assets/img/default-avatar.png";
import styles from "../style/style";

const useStyles = makeStyles(styles);

function Answers() {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", marginTop: 30 }}>
      <img
        src={image}
        style={{ width: "35px", height: "35px", margin: 10 }}
        alt="avatar"
      />
      <div>
        <p className={classes.answer}>
          Google can't explain this to you, as you said, but Google would be so
          happy if they invented React. Here is the React project.
        </p>
        <span>Wednesday, November 20, 2019, 8:32 PM</span>
        <Divider style={{ marginTop: 15 }} />
      </div>
    </div>
  );
}

export default Answers;
