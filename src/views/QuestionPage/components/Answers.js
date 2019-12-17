import React from "react";
import { inject, observer } from "mobx-react";

import { Divider, makeStyles } from "@material-ui/core";
import image from "assets/img/default-avatar.png";
import styles from "../style/style";

const useStyles = makeStyles(styles);

function Answers({ answer }) {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", marginTop: 30 }}>
      <img
        src={image}
        style={{ width: "35px", height: "35px", margin: 10 }}
        alt="avatar"
      />
      <div>
        <p className={classes.answer}>{answer.answer}</p>
        <span>{answer.created_at}</span>
        <Divider style={{ marginTop: 15 }} />
      </div>
    </div>
  );
}

export default inject("store")(observer(Answers));
