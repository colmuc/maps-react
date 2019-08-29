import React from "react";
import { MenuItem, MenuList, Grid } from "@material-ui/core";
import PageOne from "./pageOne";

export default function PermanentDrawer() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <div className="">
          <MenuList>
            <MenuItem>Draw</MenuItem>

            <MenuItem>History</MenuItem>
          </MenuList>
        </div>
      </Grid>
      <Grid item xs>
        <PageOne></PageOne>
      </Grid>
    </Grid>
  );
}
