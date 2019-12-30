import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import history from "../../../history";
import SearchBar from "../SearchBar/SearchBar";

// reactstrap components
import { Navbar, NavLink } from "reactstrap";

import styles from "../styles/style";
const useStyles = makeStyles(styles);

function NavBar({ path, categoryRef }) {
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
            onClick={() => {
              history.push("/home");
              window.scrollTo(0, 0);
            }}
          >
            SHARE WITH ME
          </div>
          <div className={classNames("ui icon input", classes.navBarInput)}>
            <SearchBar />
            <i className={classNames("search icon", classes.navBarIcon)} />
          </div>
          <span className={classes.navBarHomeItems}>
            <div className={classes.navBarHeaderItem}>
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
            </div>
          </span>
        </span>
      </Navbar>
    </>
  );
}

export default NavBar;
