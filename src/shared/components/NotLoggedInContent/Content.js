import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import history from "../../../history";

const styles = theme => ({
  title: {
    padding: 20,
    color: "#4174FF",
    fontWeight: "bold",
    fontSize: 22
  },
  subTitle: {
    paddingLeft: 20,
    color: "#4174FF",
    fontWeight: 300,
    fontSize: 22
  },
  authButtons: {
    display: "flex",
    alignItems: "center",
    color: "#4174FF",
    padding: 20,
    backgroundColor: "#FFF"
  },
  authButon: {
    backgroundColor: "#4174FF",
    color: "white",
    borderRadius: 5,
    width: 100,
    textAlign: "center"
  }
});

const useStyles = makeStyles(styles);

function Content({ content }) {
  const classes = useStyles();

  const LoginSubmit = () => {
    history.push("/login");
  };

  const SignUpSubmit = () => {
    history.push("/signup");
  };

  return (
    <>
      <div className={classes.title}>Login required</div>
      <div className={classes.subTitle}>{content}</div>
      <div className={classNames("ui form", classes.authButtons)}>
        <button className="ui button primary" onClick={LoginSubmit}>
          Login
        </button>
        <button className="ui button primary" onClick={SignUpSubmit}>
          Signup
        </button>
      </div>
    </>
  );
}

export default Content;
