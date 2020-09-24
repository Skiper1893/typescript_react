import React from 'react';
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import { history } from './store'
import './App.css';
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
      <Router history={ history }>
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
