import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HistoryTable from "./components/historyTable";
import Map from "./components/map";

import "./App.css";

import NavBar from "./components/navBar";
// Test
class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="App">
          <Switch>
            <Route path="/history" component={HistoryTable}></Route>
            <Route path="/map" component={Map}></Route>
            <Route path="/" component={Map}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
