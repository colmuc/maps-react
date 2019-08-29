import React from "react";
import AppBar from "./appBar";
import DrawMap from "./drawMap";

//AppBar on top and drawMap on bottom
const PageOne = () => {
  return (
    <div>
      <div>
        <AppBar></AppBar>
      </div>
      <DrawMap></DrawMap>
    </div>
  );
};

export default PageOne;
/** <AppBar style={{ height: "auto" }}></AppBar> */
