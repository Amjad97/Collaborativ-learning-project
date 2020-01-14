import React, { useState } from "react";
import {
  Button,
  Icon,
  ListItemIcon,
  ListItemText,
  Popover,
  MenuItem,
  Typography,
  withStyles,
  Avatar
} from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";
import classNames from "classnames";
import userImage from "assets/img/default-avatar.png";

const styles = () => ({
  accountIcon: {
    color: "white",
    fontSize: "3rem",
    marginRight: "-15px",
    marginLeft: "15px"
  },
  userIcon: {
    fontSize: "3rem",
    margin: "auto"
  },
  popupContainer: {
    background: "#FFF",
    borderRadius: 10,
    boxShadow: "unset",
    "& $span": {
      color: "black !important",
      fontSize: "1.4rem",
      marginLeft: 10,
      marginRight: 10
    }
  },
  link: {
    textDecoration: "none"
  },
  typography: {
    marginLeft: "1rem",
    "& span": {
      fontSize: "1.5rem"
    }
  },
  icon: { marginLeft: ".85rem" },
  listItemIcon: {
    marginRight: 0
  },
  listItem: {
    "&:hover": {
      background: "#D8DEE3"
    }
  },
  userMenu: {
    borderRadius: 0
  },
  hovered: {
    background: "#404040"
  }
});

function UserMenu(props) {
  const { classes } = props;
  const [userMenu, setUserMenu] = useState(null);
  const [active, setActive] = useState(false);

  return (
    <React.Fragment>
      <Button
        className="h-64"
        classes={{
          text: classes.userMenu,
          root: active ? classes.hovered : null
        }}
        onClick={() => {
          setUserMenu(true);
          setActive(true);
        }}
        disableRipple
        id="btn-profile"
      >
        <ListItemIcon classes={{ root: classes.listItemIcon }}>
          <Avatar alt="Remy Sharp" src={userImage} />
        </ListItemIcon>

        <div
          className={classNames(
            classes.typography,
            "hidden md:flex flex-col items-start"
          )}
        >
          <Typography component="span" className="normal-case font-200 flex">
            {"amjad"}
          </Typography>
        </div>
      </Button>

      <Popover
        open={Boolean(userMenu)}
        anchorEl={userMenu}
        onClose={() => {
          setUserMenu(null);
          setActive(false);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        classes={{
          paper: props.classes.popupContainer
        }}
      >
        {"" !== "guest" && (
          <div id="user-menu-items">
            <MenuItem
              onClick={() => {
                setUserMenu(null);
                setActive(false);
              }}
              component={Link}
              to="/profile/account"
              className={classes.listItem}
            >
              <ListItemText
                className="pl-0"
                primary="Company Account"
                id="btn-company-account"
              />
            </MenuItem>
            <MenuItem
              onClick={() => {
                setUserMenu(null);
                setActive(false);
              }}
              component={Link}
              to="/company"
              className={classes.listItem}
            >
              <ListItemText
                className="pl-0"
                primary="Company Settings"
                id="btn-company-settings"
              />
            </MenuItem>
            <MenuItem
              onClick={() => {
                this.props.history.push("/");
                setUserMenu(null);
                setActive(false);
              }}
              className={classes.listItem}
            >
              <ListItemText
                className="plsetting-0"
                primary="Sign out"
                id="btn-sign-out"
              />
            </MenuItem>
          </div>
        )}
      </Popover>
    </React.Fragment>
  );
}

export default withRouter(
  withStyles(styles, { withTheme: true })(inject("store")(observer(UserMenu)))
);
