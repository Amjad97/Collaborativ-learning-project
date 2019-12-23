import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import history from "../../../history";

// reactstrap components
import { Navbar } from "reactstrap";

import styles from "../styles/style";
const useStyles = makeStyles(styles);

function NavBar() {
  const classes = useStyles();
  return (
    <>
      <Navbar
        className={classNames("fixed-top", classes.navBarBackground)}
        expand="lg"
      >
        <span className={classes.navBarContainer}>
          <div
            className={classes.navBarText}
            onClick={() => history.push("/home")}
          >
            SHARE WITH ME
          </div>
          <div className={classNames("ui icon input", classes.navBarInput)}>
            <input
              type="text"
              placeholder="Search for Questions and Resources "
            />
            <i className={classNames("search icon", classes.navBarIcon)} />
          </div>
          <div className={classes.navBarItem}>CATEGORIES</div>
          <div className={classes.navBarItem}>QUESTIONS</div>
          <div className={classes.navBarItem}>RESOURCES</div>
        </span>
      </Navbar>
    </>
  );
}

export default NavBar;
