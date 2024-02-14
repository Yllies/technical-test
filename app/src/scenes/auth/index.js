import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "./signin";
import Signup from "./signup";
import api from "../../services/api";

const Auth = () => {
  return (
    <Switch>
      <Route path="/auth/signup" component={Signup} />
      <Route path="/auth" component={Signin} />
    </Switch>
  );
};

export default Auth;
