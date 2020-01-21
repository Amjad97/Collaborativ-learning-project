import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Grid, Paper, makeStyles, Avatar } from "@material-ui/core";
import QuestionsResourcesSection from "./QuestionsResourcesSection";
import Image from "assets/img/default-avatar.png";
import style from "../style/style";

const useStyle = makeStyles(style);

function ProfileLayout({ userId, store }) {
  const classes = useStyle();
  const [questionsData, setQuestionsData] = useState([]);
  const [resourcesData, setResourcesData] = useState([]);

  const { fetchUserData, fetchMyData, myprofile, user } = store.userStore;

  useEffect(() => {
    async function getData() {
      await fetchMyData();
      await myprofile.fetchUserQuestions();
      await myprofile.fetchUserResources();
      setQuestionsData(myprofile.questions);
      setResourcesData(myprofile.resources);
    }
    getData();
  }, [fetchMyData, myprofile]);

  const userImage = myprofile.image.length === 0 ? Image : myprofile.image;

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
              <div className={classes.userName}>{myprofile.username}</div>
              <div className={classes.userInformation}>{myprofile.title}</div>
              <div className={classes.userDescription}>{myprofile.description}</div>
              <div className={classes.numQR}>
                <p>{questionsData.length}</p>
                <p className={classes.leftMargin}>Questions</p>
                <p style={{ marginLeft: 30 }}>{resourcesData.length}</p>
                <p className={classes.leftMargin}>Resources</p>
              </div>
            </div>
          </div>
        </Paper>
        <Paper style={{ marginTop: 20 }}>
          <QuestionsResourcesSection
            resources={resourcesData}
            questions={questionsData}
          />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.credentials}>Credentials & Highlights</div>
      </Grid>
    </Grid>
  );
}

export default inject("store")(observer(ProfileLayout));
