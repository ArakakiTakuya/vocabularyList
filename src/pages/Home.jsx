import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const selector = useSelector((state) => state);
  const uid = selector.users.uid;
  const username = selector.users.username;
  return (
    <div>
      <p>{uid}</p>
      <p>{username}</p>
    </div>
  );
};

export default Home;
