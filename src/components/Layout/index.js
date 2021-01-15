import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Loadnav from "../Loadnav";
import MainContent from "../Maincontent";

const Layout = () => {
  return (
    <>
      <Router>
        <Loadnav />
        <Switch>
          <Route path="/about">
            <p> hi there</p>
          </Route>

          <Route path="/" exact>
            <MainContent />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Layout;
