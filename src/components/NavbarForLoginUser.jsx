import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { signOut } from "../reducks/users/operations";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavbarForLoginUser = ({ username }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        style={{ color: "#e0f2f1", background: "#ef5350" }}
        position="static"
      >
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Vocabulary
          </Typography>
          <div>
            <IconButton onClick={handleMenu} color="inherit">
              <AccountCircle />
              {username}
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem
                onClick={() => {
                  dispatch(push("/home"));
                }}
              >
                単語帳を見る
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch(push("/"));
                }}
              >
                単語帳を作成する
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch(signOut());
                }}
              >
                ログアウトする
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarForLoginUser;
