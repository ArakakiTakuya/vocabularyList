import React, { useState, useEffect } from "react";
import { db } from "../firebase/index";

const List = () => {
  const id = window.location.pathname.split("/list/")[1];
  const [list, setList] = useState({});
  console.log("list", list);

  useEffect(() => {
    db.collection("lists")
      .doc(id)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        setList(data);
      });
  }, []);

  return <div>Hi</div>;
};

export default List;
