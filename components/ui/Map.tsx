"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useEffect, useRef, useState } from "react";

type MapProps_TP = {
  center: {
    lat: string | number;
    lng: string | number;
  };
  zoom: number;
  width?: string;
  height?: string;
  markerPositions: { lat: string | number; long: string | number }[];
};
type Map = google.maps.Map;

const Map = ({
  center,
  zoom,
  width = "95%",
  height = "490px",
  markerPositions,
}: MapProps_TP) => {
  const [markerPosition, setMarkerPosition] = useState(center);
  const mapRef = useRef<Map>();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBVofSHmm5fYuCQFYHlNSltQJhVjAi1H80",
    libraries: ["places"],
  });

  const darkModeStyles = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#1d1d1d', // Dark background color
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#8b8b8b', // Light text color
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1a1a1a', // Dark text stroke color
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#ffffff', // White borders for administrative areas
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#ffffff', // White borders for land parcels
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        {
          color: '#242424', // Dark landscape color
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          color: '#363636', // Dark POI color
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [
        {
          color: '#484848', // Dark road color
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        {
          color: '#575757', // Dark transit color
        },
      ],
    },
    // Omitting water feature to retain default color
  ];
  // Handle event when the map is loaded
  const onLoad = useCallback((map: Map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    setMarkerPosition(center);
  }, []);

  return isLoaded ? (
    <div className="w-full h-full col-span-full">
      <GoogleMap
        mapContainerStyle={{ width, height }}
        options={{
          styles: darkModeStyles,
        }}
        // @ts-ignore
        center={markerPosition}
        zoom={zoom}
        onLoad={onLoad}>
        {markerPositions?.map((marker) => (
          // @ts-ignore
          <Marker
            position={{ lat: marker.lat, lng: marker.long }}
            key={marker?.lat}
          />
        ))}
      </GoogleMap>
    </div>
  ) : null;
};

export default Map;
