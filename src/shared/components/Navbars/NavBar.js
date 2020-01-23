import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { isEqual } from "lodash";
import classNames from "classnames";
import history from "../../../history";
import SearchBar from "../SearchBar/SearchBar";
import UserMenu from "../UserMenu/UserMenu";

// reactstrap components
import { Navbar, NavLink } from "reactstrap";

import styles from "../styles/style";
const useStyles = makeStyles(styles);

function NavBar({ path, categoryId, categoryRef, isLoggedIn }) {
  const classes = useStyles();
  const isAuthPage =
    (path && path.includes("login")) || path.includes("signup");
  const isHomePage = path && path.includes("home");
  const id = categoryId ? categoryId : 1;

  const LoggedIn = isEqual(isLoggedIn, "true");
  return (
    <>
      <Navbar
        className={classNames("fixed-top", classes.navBarBackground)}
        expand="lg"
      >
        <span className={classes.navBarContainer}>
          <div
            className={classes.navBarText}
            onClick={() => {
              history.push("/home");
              window.scrollTo(0, 0);
            }}
          >
            SHARE WITH ME
          </div>
          {!isAuthPage && (
            <div
              className={
                LoggedIn
                  ? classNames("ui icon input", classes.navBarInput)
                  : classNames("ui icon input", classes.navBarHomeInput)
              }
            >
              <SearchBar />
              <i className={classNames("search icon", classes.navBarIcon)} />
            </div>
          )}
          {!isAuthPage && !isHomePage && (
            <span className={LoggedIn ? classes.navBarItems :classes.navBarItems2}>
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
          {isHomePage && (
            <span
              className={
                LoggedIn
                  ? classNames(
                      classes.navBarHomeItems,
                      classes.navBarHomeItems2
                    )
                  : classes.navBarHomeItems
              }
            >
              <div
                className={
                  path.includes("home")
                    ? classes.navBarItemSelected
                    : classes.navBarItem
                }
                onClick={() =>
                  window.scrollTo(0, categoryRef.current.offsetTop)
                }
              >
                CATEGORIES
              </div>
              <div className={classes.navBarItem}>ABOUT</div>
            </span>
          )}
          {LoggedIn ? (
            <UserMenu />
          ) : isHomePage ? (
            <>
              <NavLink to="/login" tag={Link} className={classes.navBarButtons}>
                LOGIN
              </NavLink>
              <NavLink
                to="/signup"
                tag={Link}
                className={classes.navBarButtons}
              >
                SIGNUP
              </NavLink>
            </>
          ) : null}
        </span>
      </Navbar>
    </>
  );
}

export default NavBar;
