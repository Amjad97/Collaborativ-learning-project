import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./style/style";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import LoginForm from "./components/LoginForm";

const useStyles = makeStyles(styles);

function LoginPage(props) {
  const classes = useStyles(props);
  const { path } = props.match;

  return (
    <div>
      <NavBar path={path} />
      <div className={classes.LoginCard}>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
