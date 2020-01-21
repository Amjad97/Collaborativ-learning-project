import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Card, CardContent, Avatar } from "@material-ui/core";
import Formsy from "formsy-react";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "assets/img/default-avatar.png";
import Input from "shared/components/Input/Input";
import InputFile from "./InputFlie";
import CustomButton from "shared/components/CustomButton/CustomButton";
import styles from "../style/style";

import ReactNotification from "react-notifications-component";
import Utils from "shared/utils/UtilFunctions";
const useStyles = makeStyles(styles);

function SettingForm(props) {
  const classes = useStyles();
  const { updateUserData, fetchMyData, myprofile } = props.store.userStore;
  const [userData, setUserData] = useState({});
  useEffect(() => {
    async function getData() {
      await fetchMyData();
      setUserData(myprofile);
    }
    getData();
  }, [fetchMyData, myprofile]);

  const [userImage, setUserImage] = useState(userData.image);
  const [userName, setUserName] = useState(userData.username);
  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [title, setTitle] = useState(userData.title);
  const [description, setDescription] = useState(userData.description);
  const [canSubmit, setCanSubmit] = useState(false);
  const [disableControls, setDisableControls] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    setDisableControls(true);
    setDisableControls(false);
    Utils.addNotification("Update Profile", "Update successfully", "success");
    // updateUserData &&
    //   updateUserData({}).finally(() => {
    //     setDisableControls(false);
    //   });
  };
  const Image = myprofile.image.length === 0 ? avatar : userData.image;
  console.log(userData);
  return (
    <Card className={classes.SettingForm}>
      <ReactNotification />
      <CardContent className={classes.CardContent}>
        <div className={classes.SettingText}>Settings</div>
        <div className={classes.CardForm}>
          <div className={classes.imageForm}>
            <Avatar
              alt="Remy Sharp"
              src={Image}
              className={classes.userImage}
            />
            <div className={classes.uploadIcon}>
              <InputFile />
            </div>
          </div>
          <Formsy
            onValidSubmit={handleSubmit}
            onValid={() => setCanSubmit(true)}
            onInvalid={() => setCanSubmit(false)}
            className={classes.form}
          >
            <div className="ui form">
              <div className="field">
                <Input
                  name="userName"
                  type="text"
                  validations="isExisty"
                  value={userName}
                  placeholder="User Name"
                  onChange={e => setUserName(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div className="field">
                  <Input
                    name="FirstName"
                    type="text"
                    value={firstName}
                    placeholder="First Name"
                    onChange={e => setFirstName(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="field">
                  <Input
                    name="lastName"
                    type="text"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={e => setLastName(e.target.value)}
                    autoComplete="off"
                  />
                </div>
              </span>
              <div className="field">
                <Input
                  name="title"
                  type="text"
                  value={title}
                  placeholder="Your Title"
                  onChange={e => setTitle(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="field">
                <Input
                  style={{ height: "8em" }}
                  name="Description"
                  type="textarea"
                  value={description}
                  placeholder="Description"
                  onChange={e => setDescription(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  padding: 8,
                  alignItems: "center",
                  justifyContent: "flex-end"
                }}
              >
                <CustomButton
                  isLoading={disableControls}
                  disabled={!canSubmit}
                  onClick={handleSubmit}
                  style={{ maxWidth: 100, minWidth: 50 }}
                >
                  Save
                </CustomButton>
              </div>
            </div>
          </Formsy>
        </div>
      </CardContent>
    </Card>
  );
}

export default inject("store")(observer(SettingForm));
