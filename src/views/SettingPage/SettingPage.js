import React from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./style/style";

// core components
import NavBar from "shared/components/Navbars/NavBar";

import SettingForm from "./components/SettingForm";
const useStyles = makeStyles(styles);

function SettingPage(props) {
  const classes = useStyles(props);
  const {
    path,
  } = props.match;

  return (
    <div>
      <NavBar path={path} />
      <div className={classes.SettingCard}>
        <SettingForm />
      </div>
    </div>
  );
}

export default inject("store")(observer(SettingPage));
