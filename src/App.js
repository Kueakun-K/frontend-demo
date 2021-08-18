import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "./navbar";

import TestApi from "./TestApi"
import DonePage from "./page/donePage";
import CreatePage from "./page/createPage";
import AboutPage from "./page/aboutPage";
import RegisterPage from "./page/registerPage";


export default function App()  {
  return (
    <div >
       <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={TestApi} />
          <Route exact path="/done" component={DonePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/create" component={CreatePage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  );
}


