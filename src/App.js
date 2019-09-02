import React, { Component } from "react";
import "./App.css";
import PermanentDrawer from "./components/permanentDrawer";
import { Grid } from "@material-ui/core";
import PageOne from "./components/pageOne";
import { Route, Switch } from "react-router-dom";
import PageTwo from "./components/pageTwo";

//Add the router here
// Test
class App extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={1}>
            <div className="">
              <PermanentDrawer></PermanentDrawer>
            </div>
          </Grid>
          <Grid item xs>
            <div>
              <Switch>
                <Route path="/draw" component={PageOne}></Route>
                <Route path="/history" component={PageTwo}></Route>
                <Route path="/" component={PageOne}></Route>
              </Switch>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
