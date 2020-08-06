import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../reducks/users/operations";
import NavbarForLoginUser from "../components/NavbarForLoginUser";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const uid = selector.users.uid;
  const username = selector.users.username;
  return (
    <div>
      <NavbarForLoginUser username={username} />
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
