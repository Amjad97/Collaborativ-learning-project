import React from "react";
import { Grid, Paper, makeStyles, Avatar } from "@material-ui/core";
import QuestionsResourcesSection from "./QuestionsResourcesSection";
import userImage from "assets/img/default-avatar.png";
import style from "../style/style";

const useStyle = makeStyles(style);

function ProfileLayout() {
  const classes = useStyle();

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={8}>
        <Paper>
          <div className={classes.profileForm}>
            <Avatar
              alt="Remy Sharp"
              src={userImage}
              className={classes.userImage}
            />
            <div style={{ marginLeft: 20 }}>
              <div className={classes.userName}>James Altucher</div>
              <div className={classes.userInformation}>
                Author, entrepreneur, podcaster
              </div>
              <div className={classes.userDescription}>
                James Altucher is the author of the bestselling book Choose
                Yourself, editor at The Altucher Report and host of the popular
                podcast.
              </div>
              <div className={classes.numQR}>
                <p>0</p>
                <p className={classes.leftMargin}>Questions</p>
                <p style={{ marginLeft: 30 }}>0</p>
                <p className={classes.leftMargin}>Resources</p>
              </div>
            </div>
          </div>
        </Paper>
        <Paper style={{ marginTop: 20 }}>
          <QuestionsResourcesSection />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.credentials}>Credentials & Highlights</div>
      </Grid>
    </Grid>
  );
}

export default ProfileLayout;
