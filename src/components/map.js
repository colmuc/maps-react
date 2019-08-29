import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Circle
} from "react-google-maps";

//Should make a circle or polygon depending on what tool is checked. Should get this from redux store
const makeShape = event => {
  return null;
};

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 35.461107, lng: -97.502961 }}
      onClick={makeShape}
    />
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

const MyMap = () => {
  return (
    <div style={{ width: "auto", height: "100vh" }}>
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        }
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default MyMap;
