import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import history from "../../../history";
// reactstrap components
import { Navbar, NavLink } from "reactstrap";

import styles from "../styles/style";
const useStyles = makeStyles(styles);

function NavBar({ path }) {
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
            className={
              path.includes("home")
                ? classes.navBarItemSelected
                : classes.navBarItem
            }
          >
            CATEGORIES
          </div>
          <div className={classes.navBarItem}>ABOUT</div>
          <NavLink to="/login" tag={Link} className={classes.navBarButtons}>
            LOGIN
          </NavLink>
          <NavLink to="/signup" tag={Link} className={classes.navBarButtons}>
            SIGNUP
          </NavLink>
        </span>
      </Navbar>
    </>
  );
}

export default NavBar;
