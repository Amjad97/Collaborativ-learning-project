import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./style/style";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import Footer from "shared/components/Footer/Footer";

import SettingForm from "./components/SettingForm"
const useStyles = makeStyles(styles);

function SettingPage(props) {
  const classes = useStyles(props);
  const { path } = props.match;

  return (
    <div>
      <NavBar path={path} />
      <div className={classes.SettingCard}>
        <SettingForm />
      </div>
      <Footer className={classes.Footer} color="#4174FF" />
    </div>
  );
}

export default SettingPage;
