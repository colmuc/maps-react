import React, { Component } from "react";
import PageOne from "./components/pageOne";

import "./App.css";

// Test
class App extends Component {
  render() {
    return (
      <div>
        <PageOne></PageOne>
      </div>
    );
  }
}

export default App;

/**        <NavBar></NavBar>
        <div className="App">
          <Switch>
            <Route path="/history" component={HistoryTable}></Route>
            <Route path="/map" component={MyMap}></Route>
            <Route path="/" component={MyMap}></Route>
          </Switch>
        </div> */
