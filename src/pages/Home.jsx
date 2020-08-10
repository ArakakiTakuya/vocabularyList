import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../firebase/index";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = selector.users.uid;
  const [lists, setLists] = useState([]);
  console.log(lists);

  useEffect(() => {
    db.collection("lists")
      .where("creatorId", "==", uid)
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }
        snapshot.forEach((doc) => {
          const data = doc.data();
          setLists((prevState) => [...prevState, data]);
        });
      });
  }, []);

  return (
    <div className={classes.root}>
      <h2>あなたの単語帳</h2>
      <Grid container spacing={3}>
        {lists.map((list) => (
          <Grid item xs={6} key={list.listName}>
            <Paper className={classes.paper}>
              <div onClick={() => console.log("hi")}>
                <h2>{list.listName}</h2>
                <p>{list.description}</p>
                <p>{list.list.length}個の用語</p>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
