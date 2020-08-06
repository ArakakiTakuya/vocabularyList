import React from "react";
import { Switch, Route } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="(/)?" component={Home} />
    </Switch>
  );
};

export default Router;
