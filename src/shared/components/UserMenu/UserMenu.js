import React, { useState, useRef } from "react";
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
    color: "#4174FF"
  }
}));

function UserMenu(props) {
  const classes = useStyle();
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
    history.push("/profile/1");
  };
  const SettingsClick = event => {
    handleClose(event);
    history.push("/settings/1");
  };
  const LogoutClick = event => {
    handleClose(event);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        startIcon={<Avatar src={userImage} />}
        endIcon={<KeyboardArrowDown className={classes.FontColor} />}
        onClick={handleToggle}
        className={classes.Button}
      >
        Amjad
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
                  <MenuItem className={classes.FontColor} onClick={LogoutClick}>Logout</MenuItem>
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
