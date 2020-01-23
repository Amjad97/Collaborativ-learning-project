import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { makeStyles, Avatar } from "@material-ui/core";
import classNames from "classnames";
import userImage from "assets/img/default-avatar.png";
import styles from "../style/style";

const useStyles = makeStyles(styles);

function AddAnswer({ addAnswer, questionId, store }) {
  const classes = useStyles();
  const [answer, setAnswer] = useState("");
  const { myprofile } = store.userStore;

  const handleSubmit = () => {
    addAnswer &&
      answer.length > 0 &&
      addAnswer({
        question: questionId,
        answer: answer
      }).finally(() => {
        setAnswer("");
      });
  };
  const Image =
    myprofile.picture.length === 0
      ? userImage
      : `http://localhost:8000${myprofile.picture}`;
  return (
    <div className={classNames("ui form", classes.answerForm)}>
      <Avatar alt="Remy Sharp" src={Image} />
      <div className={classNames("field", classes.answerInput)}>
        <input
          placeholder="Add answer.."
          onChange={e => setAnswer(e.target.value)}
          value={answer}
        />
      </div>
      <button className="ui button primary" onClick={handleSubmit}>
        Add answer
      </button>
    </div>
  );
}

export default inject("store")(observer(AddAnswer));
