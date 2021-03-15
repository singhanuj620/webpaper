import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./Components/Layouts/Homepage";
import Article from "./Components/Layouts/Article";
import Profile from "./Components/Layouts/Profile";
import ScrollToTop from "./Components/Basics/ScrollTop";

var App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/article/:articleId">
          <Article />
        </Route>
        <Route path="/user/:userId">
          <Profile />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
