import React from "react";
import moment from "moment";
import { makeStyles, Paper, Avatar } from "@material-ui/core";
import userImage from "assets/img/default-avatar.png";

import styles from "../style/style";
import { inject, observer } from "mobx-react";
const useStyles = makeStyles(styles);

function Question({ question, numOfAnswers }) {
  const classes = useStyles();

  return (
    <Paper style={{ padding: 20 }}>
      <div className={classes.questionFormTitle}>
        Why do people explain a link between obesity and poverty by saying that
        fast?
      </div>
      <div style={{ display: "flex", marginTop: 10 }}>
        <Avatar alt="Remy Sharp" src={userImage} />
        <div style={{ marginLeft: 10 }}>
          <div style={{ color: "#555554", fontWeight: "900" }}>Anonymous</div>
          <div style={{ color: "#555554", fontSize: 12 }}>Nov 17, 2017</div>
        </div>
      </div>
      <div className={classes.questionFormSubTitle}>
        Ask yourself this questions “Why are the more White homeless than
        Mexican homeless in the US?” Shouldn’t it be the other way around?
        Especially since there is a huge percentage of illegals (who can’t even
        work a normal job?) The American will say “I earn min. wage. I can’t
        afford anything. It’s the only developed country that treats its
        citizens like shiz. I can only afford to eat shiz to ….
      </div>
    </Paper>
  );
}

export default inject("store")(observer(Question));
