import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/views/Homepage";
import ReactGA from 'react-ga';

function App() {
  const TRACKING_ID = "UA-198139037-1"; 
  ReactGA.initialize(TRACKING_ID);
  ReactGA.send('pageview')
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={Homepage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
