"use client";

import React from "react";
import { useCallback, useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 49.707556892870045,
  lng: 8.84701398118458,
};

// Separate the map functionality into its own component
const Map = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

// Wrapper component that handles the script loading
const MapComponent = () => {
  // For Next.js 13+ with app directory, ensure API key is properly typed
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <div className="relative h-[400px] w-full">
      <LoadScript googleMapsApiKey={apiKey}>
        <Map />
      </LoadScript>
    </div>
  );
};

export default MapComponent;
