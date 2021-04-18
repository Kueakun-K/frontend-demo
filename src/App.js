import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "./navbar";

import TestApi from "./TestApi"
import DonePage from "./page/donePage";
import CreatePage from "./page/createPage";


export default function App()  {
  return (
    <div >
       <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={TestApi} />
          <Route exact path="/done" component={DonePage} />
          {/* <Route exact path="/contact" component={ContactPage} /> */}
          <Route exact path="/create" component={CreatePage} />
          {/* <Route exact path="/edit/:id" component={EditPage} /> */}
        </Switch>
      </Router>
    </div>
  );
}


