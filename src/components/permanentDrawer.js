import React from "react";
import { MenuItem, MenuList } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function PermanentDrawer() {
  return (
    <MenuList>
      <Link to="/draw">
        <MenuItem>Draw</MenuItem>
      </Link>
      <Link to="/history">
        <MenuItem>History</MenuItem>
      </Link>
    </MenuList>
  );
}
