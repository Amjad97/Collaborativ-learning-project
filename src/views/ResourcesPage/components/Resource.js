import React from "react";
import {
  Card,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Avatar,
  makeStyles
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import userImage from "assets/img/default-avatar.png";
import style from "../style/style";

const useStyle = makeStyles(style);

function Resource() {
  const classes = useStyle();

  return (
    <Card style={{ marginTop: 20 }}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
        >
          <div style={{ marginBottom: 20 }}>
            <div className={classes.resourceFormTitle}>
              Why do people explain a link between obesity and poverty by saying
              that fast?
            </div>
            <div style={{ display: "flex", marginTop: 10 }}>
              <Avatar alt="Remy Sharp" src={userImage} />
              <div style={{ marginLeft: 10 }}>
                <div style={{ color: "#555554", fontWeight: "900" }}>
                  Anonymous
                </div>
                <div style={{ color: "#555554", fontSize: 12 }}>
                  Nov 17, 2017
                </div>
              </div>
            </div>
            <div style={{ display: "flex", marginTop: 20 }}>
              <div>
                <div style={{ fontWeight: "bold", color: "#555554" }}>
                  Category
                </div>
                <div style={{ fontWeight: "bold", color: "#555554" }}>
                  Platform
                </div>
              </div>
              <div style={{ marginLeft: 20 }}>
                <div style={{ color: "#555554" }}>English Learning</div>
                <div style={{ color: "#555554" }}>Youtube</div>
              </div>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ display: "block" }}>
          <div>
            Ask yourself this questions “Why are the more White homeless than
            Mexican homeless in the US?” Shouldn’t it be the other way around?
            Especially since there is a huge percentage of illegals (who can’t
            even work a normal job?) The American will say “I earn min. wage. I
            can’t afford anything. It’s the only developed country that treats
            its citizens like shiz. I can only afford to eat shiz to survive.”
            The immigrant will say “Holly, there’s so many opportunities here.
            What can I do to jump from $7.25 to $9? How can Americans afford to
            always eat out? How do I see myself in the future and how hard do I
            need to work to achieve it?” Ask yourself this questions “Why are
            the more White homeless than Mexican homeless in the US?” Shouldn’t
            it be the other way around? Especially since there is a huge
            percentage of illegals (who can’t even work a normal job?) The
            American will say “I earn min. wage. I can’t afford anything. It’s
            the only developed country that treats its citizens like shiz. I can
            only afford to eat shiz to survive.” The immigrant will say “Holly,
            there’s so many opportunities here. What can I do to jump from $7.25
            to $9? How can Americans afford to always eat out? How do I see
            myself in the future and how hard do I need to work to achieve it?”
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
            >
              <div class="visible content" style={{ color: "#FFF" }}>
                Browse
              </div>
              <div class="hidden content">
                <i class="right arrow icon" style={{ color: "#FFF" }} />
              </div>
            </div>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Card>
  );
}

export default Resource;
