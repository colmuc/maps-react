import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import { MenuItem, MenuList, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PageOne from "./pageOne";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing(2)
  }
}));

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
