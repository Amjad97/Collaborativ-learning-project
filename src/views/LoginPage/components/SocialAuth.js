import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "reactstrap";

import styles from "../style/style";
const useStyles = makeStyles(styles);

function SocialAuth() {
  const classes = useStyles();

  return (
    <div className={classes.socialAuth}>
      <Button
        className="btn-icon btn-round"
        color="info"
        href="#pablo"
        onClick={e => e.preventDefault()}
      >
        <i className="fab fa-facebook-square"></i>
      </Button>
      <Button
        className="btn-icon btn-round"
        color="info"
        href="#pablo"
        onClick={e => e.preventDefault()}
      >
        <i className="fab fa-twitter"></i>
      </Button>
      <Button
        className="btn-icon btn-round"
        color="info"
        href="#pablo"
        onClick={e => e.preventDefault()}
      >
        <i className="fab fa-google-plus"></i>
      </Button>
    </div>
  );
}

export default SocialAuth;
