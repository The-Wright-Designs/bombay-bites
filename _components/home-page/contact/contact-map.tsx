"use client";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useCallback, useRef } from "react";
import classNames from "classnames";

interface Props {
  cssClasses?: string;
}

const libraries: "marker"[] = ["marker"];

const ContactMapComponent = ({ cssClasses }: Props) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null,
  );

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  const onMapLoad = useCallback((map: google.maps.Map) => {
    try {
      mapRef.current = map;
      if (
        window.google &&
        window.google.maps &&
        window.google.maps.marker &&
        window.google.maps.marker.AdvancedMarkerElement
      ) {
        markerRef.current = new google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: -34.054642603333996, lng: 23.37427080581031 },
          title: "Bombay Bites",
        });
      }
    } catch (error) {
      console.error("Error loading map:", error);
    }
  }, []);

  const onUnmount = useCallback(() => {
    try {
      if (markerRef.current) {
        markerRef.current.map = null;
        markerRef.current = null;
      }
      mapRef.current = null;
    } catch (error) {
      console.error("Error unmounting map:", error);
    }
  }, []);

  if (loadError) {
    return (
      <div
        className={classNames(
          "bg-black grid place-items-center py-16",
          cssClasses,
        )}
      >
        <p className="text-heading font-thin">Error loading map</p>
      </div>
    );
  }

  if (!isLoaded || !window.google || !window.google.maps) {
    return (
      <div
        className={classNames(
          "bg-black grid place-items-center py-16",
          cssClasses,
        )}
      >
        <p className="text-heading text-white">Map loading...</p>
      </div>
    );
  }

  return (
    <GoogleMap
      zoom={17}
      center={{ lat: -34.054642603333996, lng: 23.37427080581031 }}
      mapContainerClassName={cssClasses}
      onLoad={onMapLoad}
      onUnmount={onUnmount}
      options={{
        mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID as string,
      }}
    />
  );
};

export default ContactMapComponent;
