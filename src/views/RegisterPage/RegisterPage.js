import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./style/style";

// core components
import NavBar from "shared/components/Navbars/NavBar";

import RegisterForm from "./components/RegisterForm";

const useStyles = makeStyles(styles);

function SignUp(props) {
  const classes = useStyles(props);
  const { path } = props.match;

  return (
    <div>
      <NavBar path={path} />
      <div className={classes.SignUpCard}>
        <RegisterForm />
      </div>
    </div>
  );
}

export default SignUp;
