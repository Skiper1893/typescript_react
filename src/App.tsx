import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
      <Router>
        <Switch>
          <Route
              path="/"
              exact
              component={About}
          />

          <Route
              path="/home"
              exact
              component={Home}
          />
        </Switch>
      </Router>
  );
}

export default App;
