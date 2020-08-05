import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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

  return (
    <div className={classes.root}>
      <AppBar style={{ color: "#e0f2f1", background: "transparent" }}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Vocabulary
          </Typography>
          <Button
            onClick={() => {
              dispatch(push("/login"));
            }}
            color="inherit"
          >
            ログイン
          </Button>
          <Button color="inherit">新規登録</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
