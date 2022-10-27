import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/views/Homepage";
import {
  TRACKING_ID,
  initialiseGA,
  triggerPageView,
} from "./utils/tracker.utils";

function App() {
  try {
    initialiseGA(TRACKING_ID);
    triggerPageView();
  } catch (e) {
    console.log("GA failed to initialise", e.message);
  }

  return (
    <Router>
      <Switch>
        <Route path={"/"} component={Homepage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
