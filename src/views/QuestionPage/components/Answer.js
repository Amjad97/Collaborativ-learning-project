import React from "react";
import moment from "moment";
import { inject, observer } from "mobx-react";
import { makeStyles, Avatar, Divider } from "@material-ui/core";
import userImage from "assets/img/default-avatar.png";
import styles from "../style/style";

const useStyles = makeStyles(styles);

function Answer({ answer }) {
  const classes = useStyles();
  const { username } = answer;
  return (
    <div className={classes.answersSection}>
      <div style={{ display: "flex", marginTop: 10 }}>
        <Avatar alt="Remy Sharp" src={userImage} />
        <div style={{ marginLeft: 10 }}>
          <div style={{ color: "#555554", fontWeight: "900" }}>{username}</div>
          <div style={{ color: "#555554", fontSize: 12 }}>
            {moment(answer.createdAt).format("MMMM Do YYYY, h:mm a")}
          </div>
        </div>
      </div>
      <div className={classes.answerText}>{answer.answer}</div>
      <Divider style={{ marginTop: 10 }} />
    </div>
  );
}

export default inject("store")(observer(Answer));
