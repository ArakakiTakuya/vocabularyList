import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [openSignInDialog, setOpenSignInDialog] = useState(false);
  const [openSignUpDialog, setOpenSignUpDialog] = useState(false);

  const handleClickOpen = (type) => {
    if (type === "login") {
      setOpenSignInDialog(true);
    } else {
      setOpenSignUpDialog(true);
    }
  };

  const handleClose = (type) => {
    if (type === "login") {
      setOpenSignInDialog(false);
    } else {
      setOpenSignUpDialog(false);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar style={{ color: "#e0f2f1", background: "transparent" }}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Vocabulary
          </Typography>
          <Button
            onClick={() => {
              handleClickOpen("login");
            }}
            color="inherit"
          >
            ログイン
          </Button>
          <Button
            onClick={() => {
              handleClickOpen("signUp");
            }}
            color="inherit"
          >
            新規登録
          </Button>
        </Toolbar>
      </AppBar>
      <>
        <Dialog open={openSignInDialog} onClose={() => handleClose("login")}>
          <DialogTitle>ログイン</DialogTitle>
          <DialogContent>
            <SignIn />
          </DialogContent>
        </Dialog>
        <Dialog open={openSignUpDialog} onClose={() => handleClose("signUp")}>
          <DialogTitle>新規登録</DialogTitle>
          <DialogContent>
            <SignUp />
          </DialogContent>
        </Dialog>
      </>
    </div>
  );
};

export default Navbar;
