import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import NavbarSection from "./Components/Basics/Header";
import Homepage from "./Components/Layouts/Homepage";
import Article from "./Components/Layouts/Article";
import Profile from "./Components/Layouts/Profile";
import LogInSignUp from "./Components/Layouts/LogInSignUp";
import ScrollToTop from "./Components/Basics/ScrollTop";
import NewArticle from "./Components/Layouts/NewArticle";

var App = () => {
  return (
    <Router>
      <ScrollToTop />
      <NavbarSection />
      <Switch>
        <Route path="/article/:articleId">
          <Article />
        </Route>
        <Route path="/user/:userId">
          <Profile />
        </Route>
        <Route path="/signup" exact>
          <LogInSignUp />
        </Route>
        <Route path="/login" exact>
          <LogInSignUp />
        </Route>
        <Route path="/create" exact>
          <NewArticle />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
