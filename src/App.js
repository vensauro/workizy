import React, { createContext, useState, useMemo, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { WrappedLogin } from "components/Login";
import { WrappedRegister } from "components/Register";
import Dashboard from "components/Dasboard";

export const LoggedContext = createContext(null);

export default function App() {
  const [globalState, setGlobalState] = useState({});

  const stateContext = useMemo(() => [globalState, setGlobalState], [
    globalState
  ]);

  return (
    <LoggedContext.Provider value={stateContext}>
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
    </LoggedContext.Provider>
  );
}

export function LoggedContextEvolution() {
  return useContext(LoggedContext);
}
