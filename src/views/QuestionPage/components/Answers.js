import React from "react";
import moment from "moment";
import { inject, observer } from "mobx-react";
import { makeStyles, Avatar, Divider } from "@material-ui/core";
import userImage from "assets/img/default-avatar.png";
import styles from "../style/style";

const useStyles = makeStyles(styles);

function Answers({ answer }) {
  const classes = useStyles();

  return (
    <div className={classes.answersSection}>
      <div style={{ display: "flex", marginTop: 10 }}>
        <Avatar alt="Remy Sharp" src={userImage} />
        <div style={{ marginLeft: 10 }}>
          <div style={{ color: "#555554", fontWeight: "900" }}>Anonymous</div>
          <div style={{ color: "#555554", fontSize: 12 }}>Nov 17, 2017</div>
        </div>
      </div>
      <div className={classes.answerText}>
        Ask yourself this questions “Why are the more White homeless than
        Mexican homeless in the US?” Shouldn’t it be the other way around?
        Especially since there is a huge percentage of illegals (who can’t even
        work a normal job?) The American will say “I earn min. wage. I can’t
        afford anything. It’s the only developed country that treats its
        citizens like shiz. I can only afford to eat shiz to ….
      </div>
      <Divider style={{ marginTop: 10 }} />
      <div style={{ display: "flex", marginTop: 10 }}>
        <Avatar alt="Remy Sharp" src={userImage} />
        <div style={{ marginLeft: 10 }}>
          <div style={{ color: "#555554", fontWeight: "900" }}>Anonymous</div>
          <div style={{ color: "#555554", fontSize: 12 }}>Nov 17, 2017</div>
        </div>
      </div>
      <div className={classes.answerText}>
        Ask yourself this questions “Why are the more White homeless than
        Mexican homeless in the US?” Shouldn’t it be the other way around?
        Especially since there is a huge percentage of illegals (who can’t even
        work a normal job?) The American will say “I earn min. wage. I can’t
        afford anything. It’s the only developed country that treats its
        citizens like shiz. I can only afford to eat shiz to ….
      </div>
      <Divider style={{ marginTop: 10 }} />
      <div style={{ display: "flex", marginTop: 10 }}>
        <Avatar alt="Remy Sharp" src={userImage} />
        <div style={{ marginLeft: 10 }}>
          <div style={{ color: "#555554", fontWeight: "900" }}>Anonymous</div>
          <div style={{ color: "#555554", fontSize: 12 }}>Nov 17, 2017</div>
        </div>
      </div>
      <div className={classes.answerText}>
        Ask yourself this questions “Why are the more White homeless than
        Mexican homeless in the US?” Shouldn’t it be the other way around?
        Especially since there is a huge percentage of illegals (who can’t even
        work a normal job?) The American will say “I earn min. wage. I can’t
        afford anything. It’s the only developed country that treats its
        citizens like shiz. I can only afford to eat shiz to ….
      </div>
      <Divider style={{ marginTop: 10 }} />
      <div style={{ display: "flex", marginTop: 10 }}>
        <Avatar alt="Remy Sharp" src={userImage} />
        <div style={{ marginLeft: 10 }}>
          <div style={{ color: "#555554", fontWeight: "900" }}>Anonymous</div>
          <div style={{ color: "#555554", fontSize: 12 }}>Nov 17, 2017</div>
        </div>
      </div>
      <div className={classes.answerText}>
        Ask yourself this questions “Why are the more White homeless than
        Mexican homeless in the US?” Shouldn’t it be the other way around?
        Especially since there is a huge percentage of illegals (who can’t even
        work a normal job?) The American will say “I earn min. wage. I can’t
        afford anything. It’s the only developed country that treats its
        citizens like shiz. I can only afford to eat shiz to ….
      </div>
      <Divider style={{ marginTop: 10 }} />
    </div>
  );
}

export default inject("store")(observer(Answers));
