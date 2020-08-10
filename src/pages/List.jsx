import React, { useState, useEffect } from "react";
import { db } from "../firebase/index";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper } from "@material-ui/core";

import VocabularyList from "../components/VocabularyList";
import "../styles/list.css";

const List = () => {
  const listId = window.location.pathname.split("/list/")[1];
  const [list, setList] = useState({});
  console.log("list", list);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    db.collection("lists")
      .doc(listId)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        setList(data);
      });
  }, []);

  return (
    <div>
      <Carousel responsive={responsive}>
        {JSON.stringify(list) !== "{}" &&
          list.list.map((word, i) => (
            <Paper variant="outlined" square key={i}>
              <p className="en-word">{word.word}</p>
            </Paper>
          ))}
      </Carousel>
      {JSON.stringify(list) !== "{}" && (
        <VocabularyList words={list.list} listId={listId} />
      )}
    </div>
  );
};

export default List;
