import React from "react";
import Router from "./Router";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import NavbarForLoginUser from "./components/NavbarForLoginUser";

const App = () => {
  const selector = useSelector((state) => state);
  const isSignedIn = selector.users.isSignedIn;
  const username = selector.users.username;
  return (
    <>
      {!isSignedIn ? <Navbar /> : <NavbarForLoginUser username={username} />}
      <main>
        <Router />
      </main>
    </>
  );
};

export default App;
