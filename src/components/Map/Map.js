import testImage from "../../images/test.jpg";
import "../ViewPage/ViewPage.module.css";
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

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
  const [mapIsLoaded,setMapIsLoaded] = useState(false);

  useEffect(() => {
    setMapIsLoaded(true);
  },[])

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
        {/* Child components, such as markers, info windows, etc. */}
        {/* <></> */}
        {mapIsLoaded && props.data.map((location) =>{
          return <MarkerF key = {location.id} position = {{lat: location.lat, lng: location.lon}} />
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
