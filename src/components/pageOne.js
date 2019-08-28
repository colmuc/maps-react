import React from "react";
import AppBar from "./appBar";
import DrawMap from "./drawMap";

//AppBar on top and drawMap on bottom
const PageOne = () => {
  return (
    <div>
      <AppBar></AppBar>
      <DrawMap></DrawMap>
    </div>
  );
};

export default PageOne;
