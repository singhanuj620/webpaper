import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import "./App.css";

import NavbarSection from "./Components/Basics/Header";
import Homepage from "./Components/Layouts/Homepage";
import Article from "./Components/Layouts/Article";
import EditArticle from "./Components/Layouts/EditArticle";
import Profile from "./Components/Layouts/Profile";
import LogInSignUp from "./Components/Layouts/LogInSignUp";
import ScrollToTop from "./Components/Basics/ScrollTop";
import NewArticle from "./Components/Layouts/NewArticle";
import NotFound from "./Components/Basics/NotFound";

var App = () => {
  return (
    <CookiesProvider>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/article/:blogId" exact>
            <Article />
          </Route>
          <Route path="/article/edit/:blogId" exact>
            <EditArticle />
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
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ CookiesProvider >
  );
};

export default App;
