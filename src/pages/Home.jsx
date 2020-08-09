import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../reducks/users/operations";
import { db } from "../firebase/index";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = selector.users.uid;
  const username = selector.users.username;

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
    <div>
      <p>{uid}</p>
      <p>{username}</p>
      <button
        onClick={() => {
          dispatch(signOut());
        }}
      >
        サインアウト
      </button>
    </div>
  );
};

export default Home;
