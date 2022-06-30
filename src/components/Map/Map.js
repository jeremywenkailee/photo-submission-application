import testImage from "../../images/test.jpg";
import "../ViewPage/ViewPage.module.css";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";



const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 49.28242858109916,
  lng: -123.12815985240425,
};

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const Map = (props) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        {/* Child components, such as markers, info windows, etc. */}
        {/* <></> */}
        <Marker position={{ lat: 49.262828, lng: -123.22841 }}></Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
