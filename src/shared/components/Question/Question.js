import React from "react";
import { inject, observer } from "mobx-react";
import moment from "moment";
import { Paper, makeStyles, Avatar } from "@material-ui/core";
import userImage from "assets/img/default-avatar.png";
import style from "./style/style";
import history from "../../../history";

const useStyle = makeStyles(style);

function Question({ question }) {
  const classes = useStyle();
  const {
    username,
    picture,
    id,
    title,
    description,
    createdAt,
    user
  } = question;
  const handleQuestionClick = () => {
    if (localStorage.getItem("isLoggedIn") === "true")
      history.push(`/profile/${user}`);
  };
  const Image =
    picture.length === 0 ? userImage : `http://localhost:8000${picture}`;
  return (
    <Paper style={{ padding: 20, marginTop: 20 }}>
      <div
        style={{ display: "flex", cursor: "pointer" }}
        onClick={handleQuestionClick}
      >
        <Avatar alt="Remy Sharp" src={Image} />
        <div style={{ marginLeft: 10 }}>
          <div style={{ color: "#555554", fontWeight: "900" }}>{username}</div>
          <div style={{ color: "#555554", fontSize: 12 }}>
            {moment(createdAt).format("MMMM Do YYYY, h:mm a")}
          </div>
        </div>
      </div>
      <div className={classes.questionFormTitle}>{title}</div>
      <div className={classes.questionFormSubTitle}>{description}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <div
          class="ui animated button"
          tabindex="0"
          style={{ backgroundColor: "#4174FF", marginTop: 15 }}
          onClick={() => {
            history.push(`/question/${id}`);
          }}
        >
          <div class="visible content" style={{ color: "#FFF" }}>
            See Answers
          </div>
          <div class="hidden content">
            <i class="right arrow icon" style={{ color: "#FFF" }} />
          </div>
        </div>
      </div>
    </Paper>
  );
}

export default inject("store")(observer(Question));
