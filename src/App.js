import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { WrappedLogin } from "components/Login";
import { WrappedRegister } from "components/Register";
import Dashboard from "components/Dasboard";

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/login">
            <WrappedLogin />
          </Route>
          <Route exact path="/register">
            <WrappedRegister />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      
    </Router>
  );
}
