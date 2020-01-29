import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  Popper,
  MenuItem,
  Avatar,
  Grow,
  ClickAwayListener,
  Paper,
  MenuList,
  makeStyles
} from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import { inject, observer } from "mobx-react";
import history from "../../../history";
import userImage from "assets/img/default-avatar.png";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing(2)
  },
  FontColor: {
    color: "#4174FF"
  },
  Button: {
    marginLeft: 10,
    color: "#4174FF",
    textTransform: "lowercase"
  }
}));

function UserMenu({ store }) {
  const classes = useStyle();
  const { fetchMyData, myprofile } = store.userStore;
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const ProfileClick = event => {
    handleClose(event);
    history.push(`/profile`);
  };
  const SettingsClick = event => {
    handleClose(event);
    history.push("/settings");
  };
  const LogoutClick = event => {
    handleClose(event);
    const { logout } = store.userStore;
    logout();
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);

  useEffect(() => {
    async function getData() {
      await fetchMyData();
    }
    getData();
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [fetchMyData, open]);

  const Image =
    myprofile.picture.length === 0
      ? userImage
      : `http://localhost:8000${myprofile.picture}`;

  return (
    <div>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        startIcon={<Avatar src={Image} />}
        endIcon={<KeyboardArrowDown className={classes.FontColor} />}
        onClick={handleToggle}
        className={classes.Button}
      >
        {myprofile.username || "user_name"}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper style={{ width: "8rem" }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={ProfileClick}>Profile</MenuItem>
                  <MenuItem onClick={SettingsClick}>Settings</MenuItem>
                  <MenuItem className={classes.FontColor} onClick={LogoutClick}>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default inject("store")(observer(UserMenu));
