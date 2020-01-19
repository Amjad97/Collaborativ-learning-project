import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import history from "../../../history";
import SearchBar from "../SearchBar/SearchBar";
import UserMenu from "../UserMenu/UserMenu";

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
  const id = categoryId ? categoryId : 1;
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
            <div className={classNames("ui icon input", classes.navBarInput)}>
              <SearchBar />
              <i className={classNames("search icon", classes.navBarIcon)} />
            </div>
          )}
          {!isAuthPage && (
            <span className={classes.navBarItems}>
              <div className={classes.navBarHeaderItem}>
                <div
                  className={classes.navBarItem}
                  onClick={() => history.push("/home")}
                >
                  HOME
                </div>
                <div
                  className={
                    (path && path.includes("questions")) ||
                    path.includes("question")
                      ? classes.navBarItemSelected
                      : classes.navBarItem
                  }
                  onClick={() => history.push(`/questions/${id}`)}
                >
                  QUESTIONS
                </div>
                <div
                  className={
                    path && path.includes("resources")
                      ? classes.navBarItemSelected
                      : classes.navBarItem
                  }
                  onClick={() => history.push(`/resources/${id}`)}
                >
                  RESOURCES
                </div>
              </div>
            </span>
          )}
          {!isAuthPage && <UserMenu />}
        </span>
      </Navbar>
    </>
  );
}

export default NavBar;
