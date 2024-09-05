import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactMap = () => {
  const defaultProps = {
    center: {
      lat: 22.723406,
      lng: 89.075127,
    },
    zoom: 11,
  };

  return (
    <div className="h-[500px] md:w-100%">
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default ContactMap;
