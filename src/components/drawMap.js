import React from "react";
import Map from "./testMap";

import ToolsList from "./ToolsList";
import { Grid, Paper } from "@material-ui/core";

//This should have a map and a list
const DrawMap = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <ToolsList></ToolsList>
      </Grid>
      <Grid item xs>
        <Paper>
          <Map></Map>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default DrawMap;
