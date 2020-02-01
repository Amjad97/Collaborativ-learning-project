import React from "react";
import moment from "moment";
import { makeStyles, Paper, Avatar } from "@material-ui/core";
import userImage from "assets/img/default-avatar.png";

import styles from "../style/style";
import { inject, observer } from "mobx-react";
const useStyles = makeStyles(styles);

function Question({ question }) {
  const classes = useStyles();
  const { username, picture, title, description, createdAt } = question;
  const Image =
    picture && picture.length === 0
      ? userImage
      : `http://localhost:8000${picture}`;
  return (
    <Paper style={{ padding: 20 }}>
      <div className={classes.questionFormTitle}>{title}</div>
      <div style={{ display: "flex", marginTop: 10 }}>
        <Avatar alt="Remy Sharp" src={Image} />
        <div style={{ marginLeft: 10 }}>
          <div style={{ color: "#555554", fontWeight: "900" }}>{username}</div>
          <div style={{ color: "#555554", fontSize: 12 }}>
            {moment(createdAt).format("MMMM Do YYYY, h:mm a")}
          </div>
        </div>
      </div>
      <div className={classes.questionFormSubTitle}>{description}</div>
    </Paper>
  );
}

export default inject("store")(observer(Question));
