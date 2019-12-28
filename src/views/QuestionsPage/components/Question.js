import React from "react";
import { Paper, makeStyles, Avatar } from "@material-ui/core";
import userImage from "assets/img/default-avatar.png";
import style from "../style/style";
import history from "../../../history";

const useStyle = makeStyles(style);

function Question() {
  const classes = useStyle();

  return (
    <Paper style={{ padding: 20, marginTop: 20 }}>
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
            history.push("/question");
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

export default Question;
