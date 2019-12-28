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
  const isAuthPage =
    (path && path.includes("login")) ||
    path.includes("signup") ||
    path.includes("forgot-password") ||
    path.includes("reset-password");
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
          {!isAuthPage && (
            <span className={classes.navBarContainer}>
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
                  (path && path.includes("questions")) ||
                  path.includes("question")
                    ? classes.navBarItemSelected
                    : classes.navBarItem
                }
                onClick={() => history.push(`/questions/${categoryId}`)}
              >
                QUESTIONS
              </div>
              <div
                className={
                  path && path.includes("resources")
                    ? classes.navBarItemSelected
                    : classes.navBarItem
                }
                onClick={() => history.push(`/resources/${categoryId}`)}
              >
                RESOURCES
              </div>
            </span>
          )}
        </span>
      </Navbar>
    </>
  );
}

export default NavBar;
