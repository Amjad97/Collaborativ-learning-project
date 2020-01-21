import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import moment from "moment";
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
import style from "./style/style";

const useStyle = makeStyles(style);

function Resource({ resource, categories }) {
  const classes = useStyle();
  const [categoryName, setCategoryName] = useState("");
  const {
    username,
    title,
    description,
    platform,
    link,
    category,
    createdAt
  } = resource;

  useEffect(() => {
    const categoryItem = categories.filter(item => item.id === category);
    setCategoryName(categoryItem[0].name);
  }, [category, categories]);

  return (
    <Card style={{ marginTop: 20 }}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
        >
          <div style={{ marginBottom: 20 }}>
            <div className={classes.resourceFormTitle}>{title}</div>
            <div style={{ display: "flex", marginTop: 10 }}>
              <Avatar alt="Remy Sharp" src={userImage} />
              <div style={{ marginLeft: 10 }}>
                <div style={{ color: "#555554", fontWeight: "900" }}>
                  {username}
                </div>
                <div style={{ color: "#555554", fontSize: 12 }}>
                  {moment(createdAt).format("MMMM Do YYYY, h:mm a")}
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
                <div style={{ color: "#555554" }}>{categoryName}</div>
                <div style={{ color: "#555554" }}>{platform}</div>
              </div>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ display: "block" }}>
          <div>{description}</div>
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
              onClick={() => window.open(link)}
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

export default inject("store")(observer(Resource));
