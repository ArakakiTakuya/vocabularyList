import React, { useState, useEffect } from "react";
import { db } from "../firebase/index";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper } from "@material-ui/core";

import "../styles/list.css";

const List = () => {
  const id = window.location.pathname.split("/list/")[1];
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
      .doc(id)
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
    </div>
  );
};

export default List;
