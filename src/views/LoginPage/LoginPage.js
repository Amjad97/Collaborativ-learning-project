import React from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./style/style";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import LoginForm from "./components/LoginForm";

import ReactNotification from "react-notifications-component";

const useStyles = makeStyles(styles);

function LoginPage(props) {
  const classes = useStyles(props);
  const { path } = props.match;
  const { login } = props.store.userStore;

  return (
    <div>
      <ReactNotification />
      <NavBar path={path} />
      <div className={classes.LoginCard}>
        <LoginForm login={login} />
      </div>
    </div>
  );
}

export default inject("store")(observer(LoginPage));
