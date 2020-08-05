import React from "react";
import { Switch, Route } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"(/)?"} component={Home} />
    </Switch>
  );
};

export default Router;
