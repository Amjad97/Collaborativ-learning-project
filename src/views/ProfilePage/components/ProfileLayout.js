import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Grid, Paper, makeStyles, Avatar } from "@material-ui/core";
import QuestionsResourcesSection from "./QuestionsResourcesSection";
import avatar from "assets/img/default-avatar.png";
import style from "../style/style";

const useStyle = makeStyles(style);

function ProfileLayout({ userId, store }) {
  const classes = useStyle();
  const [questionsData, setQuestionsData] = useState([]);
  const [resourcesData, setResourcesData] = useState([]);
  const [data, setData] = useState({});
  const { fetchUserData, fetchMyData, myprofile, user } = store.userStore;
  const { fetchCategories, categories } = store.categoriesStore;

  useEffect(() => {
    async function getData(userId) {
      if (!userId) {
        await fetchMyData();
        setData(myprofile);
        await myprofile.fetchMyQuestions();
        await myprofile.fetchMyResources();
        setQuestionsData(myprofile.questions);
        setResourcesData(myprofile.resources);
      } else {
        await fetchUserData(userId);
        setData(user);
        await user.fetchUserQuestions(userId);
        await user.fetchUserResources(userId);
        setQuestionsData(user.questions);
        setResourcesData(user.resources);
      }
      await fetchCategories();
    }
    getData(userId);
  }, [fetchMyData, fetchUserData, fetchCategories, myprofile, user, userId]);

  const myImage =
    myprofile.picture.length === 0
      ? avatar
      : `http://localhost:8000${myprofile.picture}`;

  const userImage =
    user.picture.length === 0 ? avatar : `http://localhost:8000${user.picture}`;

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={8}>
        <Paper>
          <div className={classes.profileForm}>
            <Avatar
              alt="Remy Sharp"
              src={userId ? userImage : myImage}
              className={classes.userImage}
            />
            <div style={{ marginLeft: 20 }}>
              <div className={classes.userName}>{data.username}</div>
              <div className={classes.userInformation}>{data.title}</div>
              <div className={classes.userDescription}>{data.description}</div>
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
            categories={categories}
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
