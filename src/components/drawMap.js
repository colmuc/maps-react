import React from "react";
import Map from "./map";

import ToolsList from "./ToolsList";
import { Grid } from "@material-ui/core";

//This should have a map and a list
const DrawMap = () => {
  return (
    <Grid container>
      <Grid item sm={3}>
        <ToolsList></ToolsList>
      </Grid>
      <Grid item sm>
        <Map></Map>
      </Grid>
    </Grid>
  );
};

export default DrawMap;
