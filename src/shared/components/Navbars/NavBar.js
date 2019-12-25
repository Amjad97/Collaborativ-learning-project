import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import history from "../../../history";

// reactstrap components
import { Navbar } from "reactstrap";

import styles from "../styles/style";
const useStyles = makeStyles(styles);

function NavBar({ categoryId, path }) {
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
          <div
            className={classes.navBarItem}
            onClick={() => history.push("/home")}
          >
            CATEGORIES
          </div>
          <div
            className={
              path.includes("questions")
                ? classes.navBarItemSelected
                : classes.navBarItem
            }
            onClick={() => history.push(`/questions/${categoryId}`)}
          >
            QUESTIONS
          </div>
          <div
            className={
              path.includes("resources")
                ? classes.navBarItemSelected
                : classes.navBarItem
            }
            onClick={() => history.push(`/resources/${categoryId}`)}
          >
            RESOURCES
          </div>
        </span>
      </Navbar>
    </>
  );
}

export default NavBar;
