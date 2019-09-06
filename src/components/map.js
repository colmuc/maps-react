import {
  GoogleMap,
  Marker,
  Circle,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import React, { Component } from "react";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 35.461107, lng: -97.502961 }}
      onClick={event => props.onClick(event)}
    >
      {props.isMarkerShown && (
        <Marker
          position={{
            lat: props.markerPoints.lat,
            lng: props.markerPoints.lng
          }}
          onClick={props.onMarkerClick}
        />
      )}
    </GoogleMap>
  ))
);

class Map extends Component {
  state = {
    isMarkerShown: false,
    markerPoints: { lat: 35.461107, lng: -97.502961 }
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  handleClick = event => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const markerPoints = { lat, lng };

    this.setState({ markerPoints });
  };

  render() {
    return (
      <div style={{ width: "auto", height: "100vh" }}>
        <MyMapComponent
          markerPoints={this.state.markerPoints}
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onClick={event => {
            this.handleClick(event);
          }}
        />
      </div>
    );
  }
}

export default Map;
