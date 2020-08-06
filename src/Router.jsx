import React from "react";
import { Switch, Route } from "react-router";

import Toppage from "./pages/Toppage";
import Auth from "./Auth";
import Home from "./pages/Home";
import CreateList from "./pages/CreateList";

const Router = () => {
  return (
    <Switch>
      <Route exact path="(/)?" component={Toppage} />
      <Auth>
        <Route exact path="/home" component={Home} />
        <Route exact path="/create-list" component={CreateList} />
      </Auth>
    </Switch>
  );
};

export default Router;
