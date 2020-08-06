import React from "react";
import { Switch, Route } from "react-router";

import Toppage from "./pages/Toppage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Auth from "./Auth";
import Home from "./pages/Home";
import Reset from "./pages/Reset";

const Router = () => {
  return (
    <Switch>
      <Route exact path="(/)?" component={Toppage} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin/reset" component={Reset} />
      <Auth>
        <Route exact path="/home" component={Home} />
      </Auth>
    </Switch>
  );
};

export default Router;
