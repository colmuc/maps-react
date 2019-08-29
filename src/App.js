import React, { Component } from "react";
import PageOne from "./components/pageOne";

import "./App.css";
import PermanentDrawer from "./components/permanentDrawer";
import MyMap from "./components/map";

// Test
class App extends Component {
  render() {
    return (
      <div>
        <PermanentDrawer></PermanentDrawer>
      </div>
    );
  }
}

export default App;
