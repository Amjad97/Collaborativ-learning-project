import React from "react";
import { inject, observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./style/style";

// core components
import NavBar from "shared/components/Navbars/NavBar";

import RegisterForm from "./components/RegisterForm";

const useStyles = makeStyles(styles);

function SignUp(props) {
  const classes = useStyles(props);
  const { path } = props.match;
  const { register } = props.store.userStore;
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <div>
      <NavBar path={path} isLoggedIn={isLoggedIn} />
      <div className={classes.SignUpCard}>
        <RegisterForm register={register} />
      </div>
    </div>
  );
}

export default inject("store")(observer(SignUp));
